import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar" style={{ marginBottom: "20px", padding: "10px", }}>
      <button
        onClick={() => setPage("home")}
        style={{ marginRight: "10px", padding: "10px 20px", cursor: "pointer" }}
      >
        Main Page
      </button>
      <button
        onClick={() => setPage("filter")}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Is It A Palindrome Page
      </button>
    </nav>
  );
};

export default Navbar;
