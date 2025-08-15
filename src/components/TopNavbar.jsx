import React, { useState } from "react";
import "./TopNavbar.css";

const TopNavbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "BIOGRAPHY", id: "biography" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "SERVICES", id: "services" },
    { name: "NEWS & TIPS", id: "news" },
    { name: "CONTACT", id: "contact" }
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-navbar">
      <div className="top-nav-content">
        
        {/* Logo */}
        <div className="top-logo">
          <button 
            onClick={() => scrollToSection('home')}
            className="logo-button"
            aria-label="Go to Home"
          >
            W THAGWANA
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`top-nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`top-nav-item ${activeSection === item.name ? 'active' : ''}`}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false); // close menu after click
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          aria-label="Toggle menu"
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
