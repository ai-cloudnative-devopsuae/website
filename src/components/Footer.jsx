import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AI Cloud Native DevOps UAE</h3>
          <p>A community-driven platform for AI, Cloud Native and DevOps professionals.</p>
          <p className="footer-domain">
            <strong>Primary Domain:</strong> devopsuae.ae<br/>
            <strong>Secondary Domain:</strong> devopsdxb.ae
          </p>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#focus">Focus Areas</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay In Touch</h4>
          <p>Be the first to know about community events and updates</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} AI Cloud Native DevOps UAE. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
