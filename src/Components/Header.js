import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Restaurant Logo" />
        <h1>Little Lemon</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/menu.html">Menu</a>
          </li>
          <li>
            <a href="/reservations.html">Reservations</a>
          </li>
          <li>
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
