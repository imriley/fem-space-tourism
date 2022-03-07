import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import changePage from "../redux/action";

export default function NavBar() {
  let location = useLocation();
  let dispatch = useDispatch();
  const [active, setactive] = useState(false);
  const onClick = () => {
    setactive(!active);
  };
  return (
    <header className={`header ${active ? "active" : ""}`}>
      <nav className="navbar">
        <div className="wrapper">
          <Link className="header__logo" to="/">
            <img src={logo} alt="Space Tourism" />
          </Link>
          <div className="header__links hide-for-mobile">
            <Link className={`${location.pathname === "/" ? "active" : ""}`} to="/" onClick={() => dispatch(changePage("home"))}>
              <span>00 </span>Home
            </Link>
            <Link className={`${location.pathname === "/destination" ? "active" : ""}`} to="/destination" onClick={() => dispatch(changePage("destination"))}>
              <span>01 </span>Destination
            </Link>
            <Link className={`${location.pathname === "/crew" ? "active" : ""}`} to="/crew">
              <span>02 </span>Crew
            </Link>
            <Link className={`${location.pathname === "/technology" ? "active" : ""}`} to="/technology">
              <span>03 </span>Technology
            </Link>
          </div>
          <Link className="header__toggle hide-for-desktop" to="/" onClick={onClick}>
            <img src={active ? close : hamburger} alt="Close" />
          </Link>
        </div>
      </nav>
      <div className="header__menu">
        <Link className={`${location.pathname === "/" ? "active" : ""}`} to="/">
          <span>00</span> Home
        </Link>
        <Link className={`${location.pathname === "/destination" ? "active" : ""}`} to="/destination">
          <span>01</span> Destination
        </Link>
        <Link className={`${location.pathname === "/crew" ? "active" : ""}`} to="/crew">
          <span>02</span> Crew
        </Link>
        <Link className={`${location.pathname === "/technology" ? "active" : ""}`} to="/technology">
          <span>03</span> Technology
        </Link>
      </div>
    </header>
  );
}
