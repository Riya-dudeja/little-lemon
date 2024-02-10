import {Routes, Route, Link} from "react-router-dom";
import Main from './Main.js';
import { Fragment } from "react";
import logo from"./icons_assets/Logo.svg"

function Nav(){
  return (
    <>
      <nav className="nav-container">
        <Link to="/" className="nav-item">
            <img src={logo} alt="logo" />   
        </Link>
        <Link to="/" className="nav-item">Home </Link>
        <Link to="/" className="nav-item">About </Link>
        <Link to="/" className="nav-item">Menu </Link>
        <Link to="/" className="nav-item">Reservations </Link>
        <Link to="/" className="nav-item">Order Online </Link>
        <Link to="/" className="nav-item">Login </Link>
      </nav>
      <Routes>
          <Route path="/" element={<Fragment />}></Route>
          <Route path="/" element={<Fragment />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/" element={<Main />}></Route>
      </Routes>
   </>
  );
}
export default Nav;