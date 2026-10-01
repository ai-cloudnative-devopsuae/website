import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

// Speakers, Resources and Contact are omitted until those sections exist.
const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#focus', label: 'Focus Areas' },
  { href: '#events', label: 'Events' },
  { href: '#community', label: 'Community' },
]

// Must match the mobile breakpoint in Navbar.css.
const DESKTOP_QUERY = '(min-width: 901px)'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const toggleRef = useRef(null)
  const baseUrl = import.meta.env.BASE_URL

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const handlePointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    const desktopQuery = window.matchMedia(DESKTOP_QUERY)
    const handleBreakpointChange = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    desktopQuery.addEventListener('change', handleBreakpointChange)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      desktopQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  return (
    <nav className="navbar" ref={navRef} aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img
            src={`${baseUrl}community-logo.jpeg`}
            alt="AI Cloud Native DevOps UAE - Home"
            className="logo-image"
          />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`} aria-hidden="true"></span>
        </button>

        <div
          id="primary-navigation"
          className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a href="#membership" className="nav-cta" onClick={closeMenu}>Join Community</a>
        </div>
      </div>
    </nav>
  )
}
