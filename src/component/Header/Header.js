import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Asset/logo.PNG";

function Header() {
  return (
    <div className="header">
      <img height={100}
      // className="header-image" 
      src={logo} alt="Logo" />
      <h1 className="logo-name">Geetha Boutique</h1>

      <div>
        <Link className="Menu" to="/">Home</Link>
        <Link className="Menu" to="/collection">Collections</Link>
        <Link className="Menu" to="/about">About Us</Link>
        <Link className="Menu" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
