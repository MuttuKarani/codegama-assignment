import React from "react";
import "../scss/custom.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/assets/LOGO.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Comparison</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
