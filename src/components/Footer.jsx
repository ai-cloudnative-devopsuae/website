import React from 'react'
import { Mail } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'
import { SITE_CONFIG, activeSocialLinks, hasPrivacyPolicy } from '../config/site'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const baseUrl = import.meta.env.BASE_URL
  const { contactEmail } = SITE_CONFIG

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <a href="#home" className="footer-logo">
            <img 
              src={`${baseUrl}community-logo-256.jpg`} 
              alt="AI Cloud Native DevOps UAE - Home" 
              className="footer-logo-image"
              width="256"
              height="256"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>Connecting AI, Cloud Native and DevOps professionals across the UAE.</p>
        </div>

        <nav className="footer-section" aria-label="Footer">
          <h4>Quick Links</h4>
          <ul className="footer-nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#focus">Focus Areas</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#membership">Membership</a></li>
          </ul>
        </nav>

        <div className="footer-section">
          <h4>Get in Touch</h4>
          <p>Speakers, sponsors, partners and collaborators are welcome to reach out.</p>
          {contactEmail && (
            <a href={`mailto:${contactEmail}`} className="footer-email">
              <Mail size={18} aria-hidden="true" />
              <span>{contactEmail}</span>
            </a>
          )}
          {activeSocialLinks.length > 0 && (
            <ul className="social-links" aria-label="Social media">
              {activeSocialLinks.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="footer-section">
          <h4>Event Updates</h4>
          <p>Event announcements by email. No membership required.</p>
          <NewsletterSignup tone="dark" id="newsletter" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} AI Cloud Native DevOps UAE. All rights reserved.</p>
        {hasPrivacyPolicy && (
          <div className="footer-links">
            <a href={SITE_CONFIG.privacyPolicyUrl}>Privacy Policy</a>
          </div>
        )}
      </div>
    </footer>
  )
}
