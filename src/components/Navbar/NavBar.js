import React from "react";
import { Link } from "react-scroll";
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
            <Link
              to="features"
              smooth={true}
              duration={600}
              offset={-70} // adjusts for navbar height
            >
              Features
            </Link>
          </li>

          <li>
            <Link to="resources" smooth={true} duration={600} offset={-70}>
              Resources
            </Link>
          </li>

          <li>
            <Link to="comparison" smooth={true} duration={600} offset={-70}>
              Comparison
            </Link>
          </li>

          <li>
            <Link to="blogs" smooth={true} duration={600} offset={-70}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
