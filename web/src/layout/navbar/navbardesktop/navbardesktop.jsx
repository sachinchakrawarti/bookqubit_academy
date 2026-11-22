// src/layout/navbar/navbardesktop/navbardesktop.jsx
import FirstRowNavbarDesktop from "./first_row_navbar_desktop";
import SecondRowNavbarDesktop from "./second_row_navbar_desktop";
import "./navbardesktop.css";

export default function NavbarDesktop() {
  return (
    <header className="nbd-root">
      <FirstRowNavbarDesktop />
      <SecondRowNavbarDesktop />
    </header>
  );
}
