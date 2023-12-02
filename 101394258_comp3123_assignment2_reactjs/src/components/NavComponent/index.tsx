import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow" style={styles.navStyles}>
        <div className="container">
          <ul className="nav">
            <li>
              <Link to="/" className="nav-link" style={styles.linkStyles}>
                Employee Management System
              </Link>
            </li>
            <li>
              <Link to="/signup" className="nav-link" style={styles.linkStyles}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link" style={styles.linkStyles}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navStyles: {
    backgroundColor: "black",
  },
  linkStyles: { color: "white !important", display: "block" },
};
