from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

try:
    from motor.motor_asyncio import AsyncIOMotorClient
except ImportError:  # pragma: no cover
    AsyncIOMotorClient = None

try:
    from emergentintegrations.llm.chat import LlmChat, UserMessage
except ImportError:  # pragma: no cover
    LlmChat = None
    UserMessage = None


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

EMERGENT_LLM_KEY = os.environ.get("EMERGENT_LLM_KEY", "").strip()
MONGO_URL = os.environ.get("MONGO_URL", "").strip()
DB_NAME = os.environ.get("DB_NAME", "cours_db")

client = None
db = None
if MONGO_URL and AsyncIOMotorClient is not None:
    client = AsyncIOMotorClient(MONGO_URL)
    db = client[DB_NAME]

app = FastAPI(title="Cours Maths API", version="1.1.0")
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ExerciseRequest(BaseModel):
    level: str = "Terminale"
    difficulty: str = "Moyen"
    topic: str = ""
    session_id: Optional[str] = None


EXERCISE_SYSTEM = (
    "Tu es un professeur de mathématiques français expérimenté, "
    "spécialiste des programmes officiels du lycée français (BO 2019). "
    "Tu rédiges des exercices ORIGINAUX, mathématiquement rigoureux, "
    "avec une correction détaillée étape par étape. "
    "Tu utilises LaTeX entre $$ ... $$ pour les formules en mode display "
    "et \\( ... \\) pour les formules inline. Réponds STRICTEMENT en HTML "
    "(sans balise <html> ou <body>, sans markdown, sans backticks)."
)


def build_prompt(level: str, difficulty: str, topic: str) -> str:
    return f"""Génère UN exercice original pour un élève de **{level}**, niveau de difficulté **{difficulty}**, sur le thème :

« {topic} »

Format de réponse OBLIGATOIRE — HTML pur (n'utilise PAS de balises <html>, <body>, et n'utilise JAMAIS de blocs de code ``` ) :

<div class="exo-card">
  <div class="exo-head"><span class="exo-num">EXERCICE IA · {level} · {difficulty}</span></div>
  <div class="theorem-box"><div class="label">Énoncé</div>
    <!-- énoncé clair, en plusieurs questions numérotées 1. 2. 3. ... -->
  </div>
  <div class="proof-box"><div class="label">Correction détaillée</div>
    <!-- correction rigoureuse étape par étape, avec justifications -->
  </div>
</div>

Exigences :
- Reste strictement dans le programme officiel français (BO) de {level}.
- Mathématiquement rigoureux : justifie chaque étape.
- Utilise LaTeX dans $$ ... $$ ou \\( ... \\).
- N'écris RIEN d'autre que le HTML demandé (pas d'introduction, pas de conclusion en dehors)."""


@api_router.get("/")
async def root():
    return {
        "message": "API Cours Maths",
        "ai_configured": bool(EMERGENT_LLM_KEY),
        "mongodb": bool(db),
    }


@api_router.get("/ai/health")
async def ai_health():
    return {
        "ok": bool(EMERGENT_LLM_KEY and LlmChat),
        "provider": "emergentintegrations",
        "model": "claude-sonnet-4-6",
    }


@api_router.post("/ai/exercise")
async def ai_exercise(req: ExerciseRequest):
    if not EMERGENT_LLM_KEY or LlmChat is None:
        raise HTTPException(
            status_code=503,
            detail="Service IA non configuré. Définissez EMERGENT_LLM_KEY dans backend/.env",
        )
    if not req.topic.strip():
        raise HTTPException(status_code=400, detail="Précise le sujet de l'exercice")

    session_id = req.session_id or f"exo-{uuid.uuid4()}"
    try:
        chat = (
            LlmChat(
                api_key=EMERGENT_LLM_KEY,
                session_id=session_id,
                system_message=EXERCISE_SYSTEM,
            )
            .with_model("anthropic", "claude-sonnet-4-6")
        )
        msg = UserMessage(text=build_prompt(req.level, req.difficulty, req.topic))
        content = await chat.send_message(msg)
        content = (content or "").strip()
        if content.startswith("```"):
            content = content.split("\n", 1)[1] if "\n" in content else content
            content = content.rstrip("`").rstrip()
            if content.endswith("```"):
                content = content[:-3].rstrip()
        return {"content": content}
    except Exception as e:
        logger.exception("AI exercise error")
        raise HTTPException(status_code=500, detail=str(e)) from e


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if db is None:
        raise HTTPException(status_code=503, detail="MongoDB non configuré")
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if db is None:
        raise HTTPException(status_code=503, detail="MongoDB non configuré")
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check["timestamp"], str):
            check["timestamp"] = datetime.fromisoformat(check["timestamp"])
    return status_checks


app.include_router(api_router)

_cors = os.environ.get("CORS_ORIGINS", "*")
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=_cors.split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    if client is not None:
        client.close()
