import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavigationBar() {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar`}>
      <div className="navbar-logo">MyLogo</div>
      <div className={`navbar-links ${isMobileMenuOpen ? "navbar-links-open" : ""}`}>
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/articles" className="navbar-link">Articles</Link>
        <Link to="/sign-in" className="navbar-link">Sign In</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
}

export default NavigationBar;
