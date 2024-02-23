import {Outlet, NavLink} from "react-router-dom";
import { useState } from "react";
import logo from "./icons_assets/Logo.svg";
import ham from "./icons_assets/hamIcon.svg"

function Nav(){
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className={`nav-container ${showMenu ? "open" : "" }`}>
          <NavLink to="/" className="nav-item">
              <img src={logo} alt="logo" />
          </NavLink>
          <div className="menu-icon" onClick={toggleMenu}>
            {/* <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div> */}
            <img src={ham} alt="ham-burger icon" />
          </div>
          <ul className={`nav-links ${showMenu ? "visible" : ""}`}>
            <li>
              <NavLink to="/" className="nav-item">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item">About</NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="nav-item">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/booking" className="nav-item">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="/order" className="nav-item">Order Online</NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-item">Login</NavLink>
            </li>
          </ul>
      </nav>
      <Outlet />
    </>
  );
}
export default Nav;