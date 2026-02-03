import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">Geetha Boutique</h2>
          <span className="footer-text">
            Elegant collections of silk sarees, 
            cotton sarees, designer wear & ethnic styles.
          </span>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li> <Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/sarees">Sarees</Link></li>
            <li><Link className="link" to="/kurtis">Kurtis</Link></li>
            <li><Link className="link" to="/collection">Collections</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
            <li> <Link className="link" to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Tamil Nadu, India</p>
          <p>📞 +91 1234567890</p>
          <p>✉️ geethaboutique@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Geetha Boutique. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
