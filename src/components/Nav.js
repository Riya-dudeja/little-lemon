import {Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import logo from "./icons_assets/Logo.svg"

function Nav(){
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
      <nav className={`nav-container ${showMenu ? "open" : "" }`}>
          <Link to="/" className="nav-item">
              <img src={logo} alt="logo" />
          </Link>
          <div class="menu-icon" onClick={toggleMenu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul className={`nav-links ${showMenu ? "visible" : ""}`}>
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/menu" className="nav-item">Menu</Link>
            </li>
            <li>
              <Link to="/booking" className="nav-item">Reservations</Link>
            </li>
            <li>
              <Link to="/order" className="nav-item">Order Online</Link>
            </li>
            <li>
              <Link to="/login" className="nav-item">Login</Link>
            </li>
          </ul>
      </nav>
  );
}
export default Nav;