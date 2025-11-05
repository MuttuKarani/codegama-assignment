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

// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react"; // Hamburger icons
// import "../../scss/custom.scss";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src="/assets/LOGO.png" alt="Logo" />
//         </div>

//         {/* Hamburger icon for mobile */}
//         <div className="hamburger" onClick={toggleMenu}>
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>

//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li>
//             <Link
//               to="features"
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//             >
//               Features
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="resources"
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//             >
//               Resources
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="comparison"
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//             >
//               Comparison
//             </Link>
//           </li>

//           <li>
//             <Link
//               to="blogs"
//               smooth={true}
//               duration={600}
//               offset={-70}
//               onClick={() => setIsOpen(false)}
//             >
//               Blogs
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
