import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#D5C2A0",
        height: "32px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Nicole Brubaker 2024
      </p>
    </div>
  );
}

export default Footer;
