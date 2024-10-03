import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "10px", position: "sticky", top: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Link to="/" style={{ fontSize: "24px", textDecoration: "none", color: "#333" }}>
            LiveScores
          </Link>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/fixture" style={{ textDecoration: "none", color: "#333" }}>
            Fixtures
          </Link>
          <Link to="/results" style={{ textDecoration: "none", color: "#333" }}>
            Results
          </Link>
          <Link to="/odds" style={{ textDecoration: "none", color: "#333" }}>
            Odds
          </Link>
        </div>

        <div>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#333",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
