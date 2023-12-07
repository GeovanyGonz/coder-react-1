import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">Acerca</NavLink>
        </li>
        <li>
          <NavLink to="/services">Productos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contactanos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar