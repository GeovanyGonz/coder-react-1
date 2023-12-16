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
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Tenis">TENIS</NavLink>
        </li>
        <li>
          <NavLink to="/Tecnologias">TECNOLOGIAS</NavLink>
        </li>
        <li>
          <NavLink to="/Lociones">LOCIONES</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;