import React, { useState, useEffect } from "react";
import "../App.css";

function NavigationBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos) {
        setShowNav(false); // Hide on scroll down
      } else {
        setShowNav(true); // Show on scroll up
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${showNav ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar-logo">MyLogo</div>
      <div className={`navbar-links ${isMobileMenuOpen ? "navbar-links-open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">Articles</a>
        <a href="#services">Login</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
}

export default NavigationBar;
