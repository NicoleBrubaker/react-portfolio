import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#D5C2A0",
        height: "32px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ listStyleType: "none" }}>
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
            style={{
              color: "white",
              padding: "0 10px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            About Me
          </Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link
            to="/Projects"
            className={
              currentPage === "/Projects" ? "nav-link active" : "nav-link"
            }
            style={{
              color: "white",
              padding: "0 10px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            My Projects
          </Link>
        </li>
        <li style={{ listStyleType: "none" }}>
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
            style={{
              color: "white",
              padding: "0 10px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
