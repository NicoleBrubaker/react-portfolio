import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div style={{}}>
      <ul
        className="nav nav-tabs"
        style={{ position: "fixed", top: 0, right: 20 }}
      >
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
            className={
              currentPage === "/Projects" ? "nav-link active" : "nav-link"
            }
          >
            My Projects
          </Link>
        </li>
        {/* <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li> */}
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
