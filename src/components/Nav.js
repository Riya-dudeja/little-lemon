import {Routes, Route, Link} from "react-router-dom";
import Main from './Main.js';
import { Fragment, useState } from "react";
import logo from "./icons_assets/Logo.svg"
import BookingPage from "./BookingPage.js";
import BookingForm from "./BookingForm.js";

function Nav(){
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="nav-item">
            <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item">Home </Link>
        <Link to="/about" className="nav-item">About </Link>
        <Link to="/menu" className="nav-item">Menu </Link>
        <Link to="/booking" className="nav-item">Reservations </Link>
        <Link to="/order-online" className="nav-item">Order Online </Link>
        <Link to="/login" className="nav-item">Login </Link>
      </nav>
      <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/" element={<Fragment />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
      </Routes>
   </>
  );
}
export default Nav;