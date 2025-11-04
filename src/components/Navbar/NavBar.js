import React from "react";
import { Link } from "react-router-dom";
import "../../scss/custom.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/assets/LOGO.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/comparison">Comparison</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
