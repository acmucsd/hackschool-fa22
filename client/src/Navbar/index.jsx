import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Finance Buddy</h1>
      <nav className="navlinks">
        <a href="/">View Purchase</a>
        <a href="/create">Create Purchase</a>
      </nav>
    </div>
  );
};

export default Navbar;