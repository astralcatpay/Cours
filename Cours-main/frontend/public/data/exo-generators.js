/**
 * Générateurs d'exercices variés, progressifs, avec corrections détaillées.
 */
(function () {
  "use strict";

  function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  function pick(arr) {
    return arr[rand(0, arr.length - 1)];
  }
  function pickN(arr, n) {
    const copy = arr.slice();
    const out = [];
    for (let i = 0; i < n && copy.length; i++) {
      const j = rand(0, copy.length - 1);
      out.push(copy.splice(j, 1)[0]);
    }
    return out;
  }
  function fmt(n) {
    return n > 0 ? "+" + n : String(n);
  }
  function step(n, html) {
    return `<div class="step"><div class="step-num">${n}</div><div class="step-body">${html}</div></div>`;
  }
  function corr(title, steps) {
    return (
      `<p><strong>Méthode :</strong> ${title}</p>` +
      steps +
      `<div class="qed" style="margin-top:10px;color:var(--green);font-family:'JetBrains Mono',monospace;font-size:11px">■ Conclusion</div>`
    );
  }
  function badge(level) {
    const colors = { Facile: "var(--green)", Moyen: "var(--accent)", Difficile: "var(--coral)" };
    return `<span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:${colors[level] || "var(--muted)"};margin-left:8px">● ${level}</span>`;
  }

  /* ───────── SECONDE ───────── */

  function ineq_1() {
    const a = rand(3, 15),
      b = rand(-12, 12),
      c = rand(2, 11),
      d = rand(-20, 25);
    const A = a - c,
      B = d - b;
    const sym = A > 0 ? "<" : ">";
    const sol = (B / A).toFixed(2);
    const interval = A > 0 ? `]-\\infty\\, ;\\, ${sol}[` : `]${sol}\\, ;\\, +\\infty[`;
    return {
      difficulty: "Moyen",
      title: "Inéquation linéaire avec regroupement",
      statement: `<p>Résoudre dans \\(\\mathbb{R}\\) puis représenter l'ensemble solution sur une droite graduée :</p>$$${a}x ${fmt(b)} ${pick(["<", "≤"])} ${c}x ${fmt(d)}$$`,
      correction: corr("Isoler \\(x\\) d'un seul côté", [
        step(1, `On soustrait \\(${c}x\\) des deux membres : $$${A}x ${fmt(b)} ${pick(["<", "≤"])} ${d}$$`),
        step(2, `On soustrait \\(${b}\\) : $$${A}x ${fmt(B)}$$`),
        step(3, `On divise par \\(${A}\\) (${A > 0 ? "positif → sens conservé" : "négatif → on inverse le sens"}) : $$x ${sym} ${sol}$$`),
        step(4, `<strong style="color:var(--green)">Solution :</strong> \\(S = ${interval}\\).`),
      ]),
    };
  }

  function ineq_2() {
    const k = rand(2, 6),
      m = rand(1, 5),
      p = rand(3, 9);
    const rhs = k * p + m;
    return {
      difficulty: "Difficile",
      title: "Double inéquation et intervalle",
      statement: `<p>Déterminer les réels \\(x\\) vérifiant simultanément :</p>$$${k}x - ${m} > 0 \\quad\\text{et}\\quad ${k}x + ${m} < ${rhs}$$`,
      correction: corr("Résoudre chaque inéquité puis intersecter", [
        step(1, `Première : \\(${k}x > ${m}\\) donc \\(x > \\dfrac{${m}}{${k}}\\).`),
        step(2, `Deuxième : \\(${k}x < ${rhs - m}\\) donc \\(x < \\dfrac{${rhs - m}}{${k}} = ${p}\\).`),
        step(3, `Intersection : \\(\\dfrac{${m}}{${k}} < x < ${p}\\).`),
        step(4, `<strong style="color:var(--green)">\\(S = \\left]\\dfrac{${m}}{${k}}\\, ;\\, ${p}\\right[\\)</strong>`),
      ]),
    };
  }

  function ineq_3() {
    const a = rand(-8, -2),
      b = rand(5, 20),
      c = rand(1, 9);
    const sol = ((c - b) / a).toFixed(2);
    return {
      difficulty: "Moyen",
      title: "Inéquation avec coefficient négatif",
      statement: `<p>Résoudre et justifier l'inversion du sens :</p>$$${a}x + ${b} \\geq ${c}$$`,
      correction: corr("Attention au signe du coefficient de \\(x\\)", [
        step(1, `Soustraction : \\(${a}x \\geq ${c - b}\\).`),
        step(2, `Division par \\(${a} < 0\\) : <strong>on inverse le sens</strong> : $$x \\leq ${sol}$$`),
        step(3, `<strong style="color:var(--green)">\\(S = ]-\\infty\\, ;\\, ${sol}]\\)</strong>`),
      ]),
    };
  }

  function probas_1() {
    const total = rand(24, 52),
      fav = rand(4, total - 4),
      comp = total - fav;
    const p = (fav / total).toFixed(3);
    const pc = (comp / total).toFixed(3);
    return {
      difficulty: "Facile",
      title: "Probabilité et événement contraire",
      statement: `<p>Une urne contient ${total} boules indiscernables dont ${fav} sont gagnantes. On tire une boule au hasard (équiprobabilité).</p><p>1. Calculer \\(P(G)\\) où \\(G\\) = « boule gagnante ».<br>2. En déduire \\(P(\\bar G)\\).</p>`,
      correction: corr("Formule de l'équiprobabilité + complémentaire", [
        step(1, `\\(P(G) = \\dfrac{\\text{favorables}}{\\text{total}} = \\dfrac{${fav}}{${total}} \\approx ${p}\\.`),
        step(2, `Événement contraire : \\(\\bar G\\) = « non gagnante », ${comp} issues.`),
        step(3, `\\(P(\\bar G) = 1 - P(G) = 1 - \\dfrac{${fav}}{${total}} = \\dfrac{${comp}}{${total}} \\approx ${pc}\\.`),
      ]),
    };
  }

  function probas_2() {
    const pA = (rand(3, 7) / 10).toFixed(1),
      pB = (rand(2, 6) / 10).toFixed(1),
      pAB = (Math.min(parseFloat(pA), parseFloat(pB)) * rand(2, 8) / 10).toFixed(2);
    const pAuB = (parseFloat(pA) + parseFloat(pB) - parseFloat(pAB)).toFixed(2);
    return {
      difficulty: "Difficile",
      title: "Union et probabilités",
      statement: `<p>On sait que \\(P(A)=${pA}\\), \\(P(B)=${pB}\\) et \\(P(A\\cap B)=${pAB}\\).</p><p>1. Calculer \\(P(A\\cup B)\\).<br>2. \\(A\\) et \\(B\\) sont-ils incompatibles ? Justifier.</p>`,
      correction: corr("Formule de l'union", [
        step(1, `\\(P(A\\cup B) = P(A)+P(B)-P(A\\cap B) = ${pA}+${pB}-${pAB} = ${pAuB}\\.`),
        step(2, `\\(A\\) et \\(B\\) incompatibles \\(\\Leftrightarrow P(A\\cap B)=0\\).`),
        step(3, `Ici \\(P(A\\cap B)=${pAB} \\neq 0\\) : les événements <strong>ne sont pas incompatibles</strong> (ils peuvent se réaliser simultanément).`),
      ]),
    };
  }

  function probas_3() {
    const pa = rand(2, 5),
      pb = rand(2, 5),
      pc = rand(2, 5);
    const total = pa + pb + pc;
    return {
      difficulty: "Moyen",
      title: "Arbre de probabilités",
      statement: `<p>On lance un dé truqué : face A (${pa} issues), face B (${pb}), face C (${pc}). Puis on tire une pièce : si A → P(Pile)=0,6 ; si B → 0,5 ; si C → 0,4.</p><p>Calculer la probabilité d'obtenir « A puis Face ».</p>`,
      correction: corr("Probabilités composées sur arbre", [
        step(1, `\\(P(A) = \\dfrac{${pa}}{${total}}\\).`),
        step(2, `Probabilité conditionnelle : \\(P_F(A) = 1 - 0{,}6 = 0{,}4\\) (Face sachant A).`),
        step(3, `Formule composée : \\(P(A\\cap F) = P(A)\\times P_F(F) = \\dfrac{${pa}}{${total}}\\times 0{,}4 = \\dfrac{${(pa * 0.4).toFixed(2)}}{${total}}\\).`),
      ]),
    };
  }

  function urne_1() {
    const r = rand(4, 9),
      b = rand(3, 8),
      v = rand(2, 6);
    const t = r + b + v;
    const p2r = (((r * (r - 1)) / (t * (t - 1))) * 100).toFixed(1);
    return {
      difficulty: "Difficile",
      title: "Tirage sans remise",
      statement: `<p>Urne : ${r} rouges, ${b} bleues, ${v} vertes. On tire <strong>2 boules successivement sans remise</strong>.</p><p>Probabilité d'obtenir deux rouges ?</p>`,
      correction: corr("Multiplication des probabilités conditionnelles", [
        step(1, `1er tirage rouge : \\(P(R_1)=\\dfrac{${r}}{${t}}\\).`),
        step(2, `2e tirage rouge sachant 1er rouge : \\(P_{R_1}(R_2)=\\dfrac{${r - 1}}{${t - 1}}\\).`),
        step(3, `\\(P(R_1\\cap R_2)=\\dfrac{${r}}{${t}}\\times\\dfrac{${r - 1}}{${t - 1}} \\approx ${p2r}\\%\\.`),
      ]),
    };
  }

  function eq1_1() {
    const a = rand(2, 9),
      b = rand(-15, 15),
      c = rand(-20, 20);
    const x = ((c - b) / a).toFixed(2);
    return {
      difficulty: "Moyen",
      title: "Équation du 1er degré",
      statement: `<p>Résoudre :</p>$$${a}(x ${fmt(-Math.round(b / a))}) = ${c}$$`,
      correction: corr("Développer puis isoler", [
        step(1, `Développer : \\(${a}x ${fmt(b)} = ${c}\\).`),
        step(2, `Isoler : \\(${a}x = ${c - b}\\).`),
        step(3, `\\(x = \\dfrac{${c - b}}{${a}} = ${x}\\).`),
        step(4, `<strong style="color:var(--green)">\\(S = \\{${x}\\}\\)</strong> — vérification en substituant.`),
      ]),
    };
  }

  function sys_1() {
    const x = rand(-4, 4),
      y = rand(-4, 4);
    const a1 = rand(1, 3),
      b1 = rand(1, 3),
      c1 = a1 * x + b1 * y;
    const a2 = rand(1, 3),
      b2 = rand(-3, -1),
      c2 = a2 * x + b2 * y;
    return {
      difficulty: "Difficile",
      title: "Système 2×2",
      statement: `<p>Résoudre le système :</p>$$\\begin{cases}${a1}x ${fmt(b1)}y = ${c1} \\\\ ${a2}x ${fmt(b2)}y = ${c2}\\end{cases}$$`,
      correction: corr("Substitution ou combinaison linéaire", [
        step(1, `On cherche \\((x;y)\\) vérifiant les deux équations.`),
        step(2, `Résolution algébrique (combinaison) : multiplier pour éliminer une inconnue.`),
        step(3, `<strong style="color:var(--green)">\\(S = \\{(${x}\\, ;\\, ${y})\\}\\)</strong>.`),
        step(4, `Vérification : \\(${a1}\\cdot${x}${fmt(b1 * y)} = ${c1}\\) ✓ et \\(${a2}\\cdot${x}${fmt(b2 * y)} = ${c2}\\) ✓.`),
      ]),
    };
  }

  function stats_1() {
    const vals = pickN([8, 10, 12, 14, 15, 16, 18, 20, 22, 25], 6);
    const sum = vals.reduce((a, b) => a + b, 0);
    const m = (sum / vals.length).toFixed(1);
    return {
      difficulty: "Moyen",
      title: "Moyenne et interprétation",
      statement: `<p>Notes d'un contrôle (sur 25) : ${vals.join(", ")}.</p><p>1. Calculer la moyenne.<br>2. Combien d'élèves sont au-dessus de la moyenne ?</p>`,
      correction: corr("Somme ÷ effectif", [
        step(1, `Somme = ${vals.join("+")} = ${sum}.`),
        step(2, `Moyenne = \\(\\dfrac{${sum}}{${vals.length}} = ${m}\\).`),
        step(3, `Compter les notes strictement supérieures à ${m} dans la liste.`),
      ]),
    };
  }

  /* ───────── PREMIÈRE ───────── */

  function second_1() {
    const x1 = rand(-4, 2),
      x2 = rand(3, 7),
      a = rand(1, 3);
    const b = -a * (x1 + x2),
      c = a * x1 * x2,
      D = b * b - 4 * a * c;
    return {
      difficulty: "Moyen",
      title: "Second degré — racines et factorisation",
      statement: `<p>Résoudre, factoriser, puis dresser le tableau de signes de :</p>$$f(x) = ${a}x^2 ${fmt(b)}x ${fmt(c)}$$`,
      correction: corr("Discriminant → racines → signe", [
        step(1, `\\(\\Delta = b^2-4ac = ${b}^2 - 4\\cdot${a}\\cdot${c} = ${D}\\).`),
        step(2, `\\(\\Delta > 0\\) : \\(x_1=${Math.min(x1, x2)}\\), \\(x_2=${Math.max(x1, x2)}\\).`),
        step(3, `Factorisation : \\(f(x)=${a}(x-${Math.min(x1, x2)})(x-${Math.max(x1, x2)})\\).`),
        step(4, `Signe de \\(a=${a}\\) : ${a > 0 ? "positif à l'extérieur des racines" : "négatif à l'extérieur"}.`),
      ]),
    };
  }

  function second_2() {
    const alpha = rand(-3, 3),
      beta = rand(-5, 8),
      a = rand(1, 2);
    return {
      difficulty: "Difficile",
      title: "Forme canonique et extremum",
      statement: `<p>Soit \\(f(x) = ${a}x^2 ${fmt(-2 * a * alpha)}x ${fmt(a * alpha * alpha + beta)}\\).</p><p>1. Mettre sous forme canonique.<br>2. Minimum ou maximum ? Valeur ?</p>`,
      correction: corr("Compléter le carré", [
        step(1, `\\(\\alpha = -\\dfrac{b}{2a} = ${alpha}\\), \\(\\beta = f(\\alpha) = ${beta}\\).`),
        step(2, `Forme canonique : \\(f(x) = ${a}(x-${alpha})^2 ${fmt(beta)}\\).`),
        step(3, `${a > 0 ? "Minimum" : "Maximum"} en \\(x=${alpha}\\), valeur \\(y=${beta}\\).`),
      ]),
    };
  }

  function derivee_1() {
    const a = rand(1, 3),
      b = rand(-4, 4),
      c = rand(-5, 5);
    const da = 3 * a,
      db = 2 * b;
    return {
      difficulty: "Moyen",
      title: "Dérivée et tangente",
      statement: `<p>Soit \\(f(x)=${a}x^3 ${fmt(b)}x^2 ${fmt(c)}x\\). On note \\(f'\\) sa dérivée.</p><p>1. Calculer \\(f'(x)\\).<br>2. Équation de la tangente en \\(x=1\\).</p>`,
      correction: corr("(x^n)' = nx^{n-1}", [
        step(1, `\\(f'(x) = ${da}x^2 ${fmt(db)}x ${fmt(c)}\\).`),
        step(2, `\\(f(1) = ${a + b + c}\\), \\(f'(1) = ${da + db + c}\\).`),
        step(3, `Tangente : \\(y = f'(1)(x-1)+f(1)\\).`),
        step(4, `\\(y = ${da + db + c}(x-1) + ${a + b + c}\\).`),
      ]),
    };
  }

  function derivee_2() {
    const n = rand(3, 5),
      a = rand(2, 4);
    return {
      difficulty: "Difficile",
      title: "Dérivée quotient + variations",
      statement: `<p>Soit \\(f(x)=\\dfrac{x^${n}}{x^2+${a}}\\) sur \\(\\mathbb{R}\\).</p><p>1. Calculer \\(f'(x)\\).<br>2. Étudier le signe de \\(f'\\).</p>`,
      correction: corr("Formule (u/v)'", [
        step(1, `\\(f'(x) = \\dfrac{${n}x^{${n - 1}}(x^2+${a}) - x^${n}\\cdot 2x}{(x^2+${a})^2}\\).`),
        step(2, `Numérateur : \\(x^{${n - 2}}(${n}x^2+${n * a} - 2x^2) = x^{${n - 2}}(${(n - 2)}x^2+${n * a})\\).`),
        step(3, `Signe : dénominateur toujours \\(>0\\). Étudier le numérateur selon les valeurs de \\(x\\).`),
      ]),
    };
  }

  function suitesArith_1() {
    const u0 = rand(-8, 8),
      r = rand(-4, 4) || 2,
      n = rand(8, 20);
    const un = u0 + n * r;
    const sum = ((n + 1) * (u0 + un)) / 2;
    return {
      difficulty: "Moyen",
      title: "Suite arithmétique — terme et somme",
      statement: `<p>\\((u_n)\\) arithmétique : \\(u_0=${u0}\\), \\(r=${r}\\).</p><p>1. \\(u_{${n}}\\) ?<br>2. \\(\\displaystyle\\sum_{k=0}^{${n}} u_k\\) ?</p>`,
      correction: corr("Formules explicite et somme", [
        step(1, `\\(u_n = u_0 + nr\\) : \\(u_{${n}} = ${u0} + ${n}\\times${r} = ${un}\\).`),
        step(2, `Somme : \\((n+1)\\times\\dfrac{u_0+u_n}{2} = ${n + 1}\\times\\dfrac{${u0}+${un}}{2}\\).`),
        step(3, `<strong style="color:var(--green)">\\(\\sum = ${sum}\\)</strong>`),
      ]),
    };
  }

  function suitesGeo_1() {
    const u0 = rand(2, 6),
      q = pick([0.5, -0.5, 2, 3, 1.5]),
      n = rand(5, 10);
    const un = u0 * Math.pow(q, n);
    return {
      difficulty: "Difficile",
      title: "Suite géométrique et limite",
      statement: `<p>\\((u_n)\\) géométrique : \\(u_0=${u0}\\), \\(q=${q}\\).</p><p>1. \\(u_{${n}}\\).<br>2. \\(\\displaystyle\\sum_{k=0}^{${n}} u_k\\).<br>3. Limite de \\((u_n)\\) ?</p>`,
      correction: corr("u_n = u_0 q^n et somme finie", [
        step(1, `\\(u_{${n}} = ${u0}\\times${q}^{${n}} \\approx ${un.toFixed(2)}\\).`),
        step(2, `Somme : \\(\\dfrac{1-q^{${n + 1}}}{1-q}\\times u_0\\) (si \\(q\\neq 1\\)).`),
        step(3, Math.abs(q) < 1 ? `\\(|q|<1\\) donc \\(\\lim u_n = 0\\).` : q > 1 ? `\\(q>1\\) et \\(u_0>0\\) : \\(\\lim u_n = +\\infty\\).` : `Suite alternée non convergente.`),
      ]),
    };
  }

  function trigo_1() {
    const t = pick([
      ["π/6", "π/3", "√3/2", "1/2"],
      ["π/4", "π/4", "√2/2", "√2/2"],
      ["π/3", "π/6", "1/2", "√3/2"],
    ]);
    return {
      difficulty: "Moyen",
      title: "Équation trigonométrique",
      statement: `<p>Résoudre sur \\([0\\, ;\\, 2\\pi[\\) :</p>$$\\cos x = ${t[2]}$$`,
      correction: corr("Cercle trigonométrique", [
        step(1, `\\(\\cos x = ${t[2]}\\) : angles de référence \\(\\pm ${t[0]} + 2k\\pi\\).`),
        step(2, `Sur \\([0;2\\pi[\\) : \\(x = ${t[0]}\\) ou \\(x = 2\\pi - ${t[0]} = ${t[1] === t[0] ? "2π - " + t[0] : t[1]}\\).`),
        step(3, `Vérifier avec \\(\\cos^2+\\sin^2=1\\).`),
      ]),
    };
  }

  function probaCond_1() {
    const sens = rand(0, 1);
    const pB = (rand(3, 7) / 10).toFixed(1);
    const pA = (rand(4, 8) / 10).toFixed(1);
    const pAB = (parseFloat(pA) * parseFloat(pB) * rand(8, 10) / 10).toFixed(2);
    return {
      difficulty: "Difficile",
      title: "Formule des probabilités totales",
      statement: `<p>Dans une usine : \\(P(D)=${pA}\\) (défectueux), \\(P(M)=${pB}\\) (machine M). \\(P(D|M)=${(parseFloat(pAB) / parseFloat(pB)).toFixed(2)}\\).</p><p>Calculer \\(P(D\\cap M)\\) puis \\(P_M(D)\\).</p>`,
      correction: corr("Composée et conditionnelle", [
        step(1, `\\(P(D\\cap M) = P(M)\\times P_M(D) = ${pB}\\times${(parseFloat(pAB) / parseFloat(pB)).toFixed(2)} = ${pAB}\\).`),
        step(2, `\\(P_M(D) = \\dfrac{P(D\\cap M)}{P(M)} = \\dfrac{${pAB}}{${pB}}\\).`),
        step(3, `Interprétation : probabilité de défaut sachant qu'on utilise M.`),
      ]),
    };
  }

  function va_1() {
    const p1 = 0.2,
      p2 = 0.5,
      p3 = 0.3;
    const x1 = rand(0, 2),
      x2 = rand(3, 6),
      x3 = rand(7, 10);
    const E = p1 * x1 + p2 * x2 + p3 * x3;
    const E2 = p1 * x1 * x1 + p2 * x2 * x2 + p3 * x3 * x3;
    const V = E2 - E * E;
    return {
      difficulty: "Difficile",
      title: "Espérance et variance",
      statement: `<p>\\(X\\) prend les valeurs \\(${x1}\\) (proba 0,2), \\(${x2}\\) (0,5), \\(${x3}\\) (0,3).</p><p>Calculer \\(E(X)\\) et \\(V(X)\\).</p>`,
      correction: corr("Formules BO Première", [
        step(1, `\\(E(X) = 0{,}2\\times${x1} + 0{,}5\\times${x2} + 0{,}3\\times${x3} = ${E.toFixed(2)}\\).`),
        step(2, `\\(E(X^2) = 0{,}2\\times${x1 * x1} + 0{,}5\\times${x2 * x2} + 0{,}3\\times${x3 * x3} = ${E2.toFixed(2)}\\).`),
        step(3, `\\(V(X) = E(X^2)-E(X)^2 = ${E2.toFixed(2)} - ${E.toFixed(2)}^2 = ${V.toFixed(2)}\\).`),
        step(4, `\\(\\sigma(X) = \\sqrt{${V.toFixed(2)}} \\approx ${Math.sqrt(V).toFixed(2)}\\).`),
      ]),
    };
  }

  function geoRep_1() {
    const m = rand(-3, 3) || 2,
      p = rand(-4, 4);
    return {
      difficulty: "Moyen",
      title: "Équation de droite et coefficient directeur",
      statement: `<p>Droite \\(\\mathcal{D}\\) passant par \\(A(1\\, ;\\, ${m + p})\\) et \\(B(3\\, ;\\, ${3 * m + p})\\).</p><p>1. Vecteur directeur.<br>2. Équation réduite.<br>3. Ordonnée à l'origine.</p>`,
      correction: corr("Pente = (y_B-y_A)/(x_B-x_A)", [
        step(1, `\\(\\vec{AB}(2\\, ;\\, ${2 * m})\\), directeur colinéaire à \\((1\\, ;\\, ${m})\\).`),
        step(2, `Coefficient directeur \\(m = ${m}\\).`),
        step(3, `\\(y = ${m}x ${fmt(p)}\\). Ordonnée à l'origine : \\(${p}\\).`),
      ]),
    };
  }

  /* ───────── TERMINALE ───────── */

  function limites_1() {
    const n = rand(2, 4),
      a = rand(2, 5),
      b = rand(1, 3);
    return {
      difficulty: "Moyen",
      title: "Limite de quotient à l'infini",
      statement: `<p>Calculer :</p>$$\\lim_{x\\to+\\infty}\\frac{${a}x^${n} ${fmt(b)}}{x^${n} ${fmt(-2)}}$$`,
      correction: corr("Factoriser par le terme dominant", [
        step(1, `Degré num = degré den = ${n} : limite = rapport des coefficients dominants.`),
        step(2, `\\(\\lim = \\dfrac{${a}}{1} = ${a}\\).`),
        step(3, `Justification : pour \\(x\\to+\\infty\\), termes de degré \\(<${n}\\) deviennent négligeables.`),
      ]),
    };
  }

  function limites_2() {
    return {
      difficulty: "Difficile",
      title: "Limite avec racine (forme indéterminée)",
      statement: `<p>Calculer :</p>$$\\lim_{x\\to+\\infty}\\left(\\sqrt{x^2+${rand(3, 8)}x} - x\\right)$$`,
      correction: corr("Multiplier par l'expression conjuguée", [
        step(1, `Forme \\(\\infty - \\infty\\). On multiplie par \\(\\dfrac{\\sqrt{x^2+ax}+x}{\\sqrt{x^2+ax}+x}\\).`),
        step(2, `Numérateur devient \\(x^2+ax-x^2 = ax\\).`),
        step(3, `\\(\\lim = \\lim \\dfrac{ax}{\\sqrt{x^2+ax}+x} = \\lim \\dfrac{a}{\\sqrt{1+a/x}+1} = \\dfrac{a}{2}\\).`),
      ]),
    };
  }

  function limites_3() {
    const a = rand(2, 4);
    return {
      difficulty: "Difficile",
      title: "Croissances comparées",
      statement: `<p>Calculer :</p>$$\\lim_{x\\to+\\infty}\\frac{x^${a}}{e^x}$$`,
      correction: corr("L'exponentielle l'emporte sur toute puissance", [
        step(1, `Théorème BO : \\(\\lim_{x\\to+\\infty}\\dfrac{x^n}{e^x} = 0\\) pour tout \\(n\\).`),
        step(2, `Ici \\(n=${a}\\) : la limite vaut <strong>0</strong>.`),
        step(3, `Interprétation : \\(e^x\\) croît beaucoup plus vite que \\(x^${a}\\).`),
      ]),
    };
  }

  function exp_1() {
    const a = rand(2, 5),
      b = rand(2, 6);
    const rhs = Math.pow(Math.E, a * b).toFixed(0);
    return {
      difficulty: "Moyen",
      title: "Équation exponentielle",
      statement: `<p>Résoudre dans \\(\\mathbb{R}\\) :</p>$$e^{${a}x} = e^{${a * b}}$$`,
      correction: corr("Injectivité de exp", [
        step(1, `\\(e^u = e^v \\Leftrightarrow u = v\\).`),
        step(2, `\\(${a}x = ${a * b}\\).`),
        step(3, `<strong style="color:var(--green)">\\(x = ${b}\\)</strong>.`),
      ]),
    };
  }

  function exp_2() {
    const a = rand(2, 4),
      k = rand(2, 5);
    return {
      difficulty: "Difficile",
      title: "Équation avec ln et exp",
      statement: `<p>Résoudre :</p>$$\\ln(${a}x) = ${k}$$`,
      correction: corr("Domaine + exp des deux côtés", [
        step(1, `Condition d'existence : \\(${a}x > 0\\) donc \\(x > 0\\).`),
        step(2, `\\(${a}x = e^{${k}}\\).`),
        step(3, `\\(x = \\dfrac{e^{${k}}}{${a}}\\).`),
        step(4, `Vérifier \\(x>0\\) : OK.`),
      ]),
    };
  }

  function integrale_1() {
    const a = rand(1, 3),
      n = rand(2, 4);
    const val = Math.pow(a, n + 1) / (n + 1);
    return {
      difficulty: "Moyen",
      title: "Intégrale d'une puissance",
      statement: `<p>Calculer l'aire sous la courbe de \\(x\\mapsto x^${n}\\) entre 0 et ${a} :</p>$$\\int_0^${a} x^${n}\\,dx$$`,
      correction: corr("Primitive x^{n+1}/(n+1)", [
        step(1, `Primitive : \\(F(x) = \\dfrac{x^${n + 1}}}{${n + 1}}\\).`),
        step(2, `\\([F(x)]_0^${a} = F(${a}) - F(0)\\).`),
        step(3, `\\(= \\dfrac{${a}^${n + 1}}}{${n + 1}} = ${val.toFixed(3)}\\).`),
      ]),
    };
  }

  function integrale_2() {
    const a = rand(1, 2),
      b = rand(2, 4);
    return {
      difficulty: "Difficile",
      title: "Intégration par parties",
      statement: `<p>Calculer :</p>$$\\int_0^${b} x\\,e^{${a}x}\\,dx$$`,
      correction: corr("IPP : u=x, v'=e^{ax}", [
        step(1, `\\(u=x\\), \\(u'=1\\), \\(v'=e^{${a}x}\\), \\(v=\\dfrac{1}{${a}}e^{${a}x}\\).`),
        step(2, `\\([uv]_0^${b} - \\int_0^${b} v\\,u'\\,dx\\).`),
        step(3, `Calculer chaque terme et simplifier.`),
        step(4, `Résultat exact en fonction de \\(e^{${a * b}}\\).`),
      ]),
    };
  }

  function edo_1() {
    const a = rand(-3, 3) || 2,
      y0 = rand(1, 5);
    return {
      difficulty: "Moyen",
      title: "Équation différentielle y'=ay",
      statement: `<p>Résoudre \\(y'=${a}y\\) avec \\(y(0)=${y0}\\).</p>`,
      correction: corr("Solutions y=ke^{ax}", [
        step(1, `Solutions générales : \\(y(x)=ke^{${a}x}\\).`),
        step(2, `CI : \\(y(0)=k=${y0}\\).`),
        step(3, `<strong style="color:var(--green)">\\(y(x)=${y0}e^{${a}x}\\)</strong>`),
      ]),
    };
  }

  function binom_1() {
    const n = rand(5, 12),
      p = (rand(2, 7) / 10).toFixed(1),
      k = rand(2, n - 2);
    return {
      difficulty: "Difficile",
      title: "Loi binomiale",
      statement: `<p>\\(X\\sim\\mathcal{B}(${n}\\, ;\\, ${p})\\). Calculer \\(P(X=${k})\\) et \\(E(X)\\).</p>`,
      correction: corr("Formule binomiale + espérance np", [
        step(1, `\\(P(X=${k}) = \\binom{${n}}{${k}}(${p})^{${k}}(1-${p})^{${n - k}}\\).`),
        step(2, `Calcul numérique avec la calculatrice.`),
        step(3, `\\(E(X) = np = ${n}\\times${p} = ${(n * parseFloat(p)).toFixed(1)}\\).`),
        step(4, `\\(V(X)=np(1-p)\\).`),
      ]),
    };
  }

  function comb_1() {
    const n = rand(8, 12),
      k = rand(3, 5);
    return {
      difficulty: "Moyen",
      title: "Combinaisons",
      statement: `<p>Combien de comités de ${k} personnes peut-on former parmi ${n} candidats ?</p>`,
      correction: corr("Ordre ne compte pas → combinaison", [
        step(1, `Nombre de parties à ${k} éléments : \\(\\binom{${n}}{${k}}\\).`),
        step(2, `\\(\\binom{${n}}{${k}} = \\dfrac{${n}!}{${k}!\\,(${n - k})!}\\).`),
        step(3, `Calcul : ${binom(n, k)} comités.`),
      ]),
    };
  }

  function binom(n, k) {
    let r = 1;
    for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
    return Math.round(r);
  }

  function convex_1() {
    return {
      difficulty: "Difficile",
      title: "Étude de convexité",
      statement: `<p>Soit \\(f(x)=x^3-3x^2+2\\). Étudier la convexité de \\(f\\).</p>`,
      correction: corr("Signe de f''", [
        step(1, `\\(f'(x)=3x^2-6x\\), \\(f''(x)=6x-6\\).`),
        step(2, `\\(f''(x)\\geq 0 \\Leftrightarrow x\\geq 1\\) : convexe sur \\([1\\, ;\\, +\\infty[\\).`),
        step(3, `\\(f''(x)\\leq 0 \\Leftrightarrow x\\leq 1\\) : concave sur \\(]-\\infty\\, ;\\, 1]\\).`),
        step(4, `Point d'inflexion en \\(x=1\\) (\\(f''\\) s'annule en changeant de signe).`),
      ]),
    };
  }

  /* ───────── Registres ───────── */

  const POOLS = {
    ineq: [ineq_1, ineq_2, ineq_3],
    probas: [probas_1, probas_2, probas_3],
    urne: [urne_1, probas_2],
    eq1: [eq1_1],
    sys: [sys_1],
    stats: [stats_1],
    second: [second_1, second_2],
    derivee: [derivee_1, derivee_2],
    suitesArith: [suitesArith_1],
    suitesGeo: [suitesGeo_1, suitesArith_1],
    trigo: [trigo_1],
    probaCond: [probaCond_1, probas_2],
    va: [va_1],
    geoRep: [geoRep_1],
    limites: [limites_1, limites_2, limites_3],
    exp: [exp_1, exp_2],
    integrale: [integrale_1, integrale_2],
    edo: [edo_1],
    binom: [binom_1],
    comb: [comb_1],
    convex: [convex_1],
  };

  window.exoGenerators = {};
  Object.keys(POOLS).forEach((key) => {
    window.exoGenerators[key] = () => {
      const fn = pick(POOLS[key]);
      const ex = fn();
      ex.difficulty = ex.difficulty || "Moyen";
      return ex;
    };
  });

  /** Génère n exercices distincts (variantes différentes si possible). */
  window.generateExoSet = function (type, count) {
    const pool = POOLS[type];
    if (!pool) return [];
    const fns = pool.length >= count ? pickN(pool, count) : Array.from({ length: count }, () => pick(pool));
    return fns.map((fn) => {
      const ex = fn();
      ex.difficulty = ex.difficulty || "Moyen";
      return ex;
    });
  };

  window.exoChaptersPrem = [
    { id: "second", label: "Second degré" },
    { id: "derivee", label: "Dérivation" },
    { id: "suitesArith", label: "Suites arithmétiques" },
    { id: "suitesGeo", label: "Suites géométriques" },
    { id: "trigo", label: "Trigonométrie" },
    { id: "probaCond", label: "Probabilités conditionnelles" },
    { id: "va", label: "Variables aléatoires" },
    { id: "geoRep", label: "Géométrie repérée" },
  ];

  window.exoChaptersByLevel = {
    seconde: [
      { id: "ineq", label: "Inéquations" },
      { id: "eq1", label: "Équations 1er degré" },
      { id: "sys", label: "Systèmes linéaires" },
      { id: "probas", label: "Probabilités" },
      { id: "urne", label: "Tirages / urnes" },
      { id: "stats", label: "Statistiques" },
    ],
    premiere: window.exoChaptersPrem,
    terminale: [
      { id: "limites", label: "Limites" },
      { id: "derivee", label: "Dérivation" },
      { id: "suitesGeo", label: "Suites" },
      { id: "exp", label: "Exponentielle / ln" },
      { id: "integrale", label: "Intégrales" },
      { id: "edo", label: "Éq. différentielles" },
      { id: "binom", label: "Loi binomiale" },
      { id: "comb", label: "Combinatoire" },
      { id: "convex", label: "Convexité" },
      { id: "probaCond", label: "Probabilités" },
    ],
  };
})();
