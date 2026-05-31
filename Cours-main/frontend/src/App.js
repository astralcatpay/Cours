import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("./math.html");
  }, []);
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#0d1117",
      color: "#f0c040",
      fontFamily: "monospace",
    }}>
      <div data-testid="redirect-loader">∑ Chargement…</div>
    </div>
  );
}

export default App;
