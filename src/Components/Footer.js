import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="footer__copy">
        <p>&copy; 2023 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
