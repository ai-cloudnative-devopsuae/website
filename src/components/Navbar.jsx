import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">DevOps UAE</span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={handleLinkClick}>Home</a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>About</a>
          <a href="#focus" className="nav-link" onClick={handleLinkClick}>Focus Areas</a>
          <a href="#events" className="nav-link" onClick={handleLinkClick}>Events</a>
          <a href="#community" className="nav-link" onClick={handleLinkClick}>Community</a>
          <a href="#speakers" className="nav-link" onClick={handleLinkClick}>Speakers</a>
          <a href="#resources" className="nav-link" onClick={handleLinkClick}>Resources</a>
          <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
          <button className="nav-cta" onClick={handleLinkClick}>Join Community</button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}
