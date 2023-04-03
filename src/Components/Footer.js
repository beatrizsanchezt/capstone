import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer__copy">
          <p>&copy; 2023 Restaurant Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
