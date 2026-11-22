// src/layout/navbar/navbar.jsx
"use client";

import NavbarDesktop from "./navbardesktop/navbardesktop";
import NavbarMobile from "./navbarmobile/navbarmobile";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar-show-desktop">
        <NavbarDesktop />
      </div>
      <div className="navbar-show-mobile">
        <NavbarMobile />
      </div>
    </>
  );
}
