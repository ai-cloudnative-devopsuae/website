import React from 'react'
import './Events.css'

export default function Events() {
  return (
    <section id="events" className="events">
      <div className="events-container">
        <div className="section-header">
          <h2>Events Coming Soon</h2>
          <p>We're preparing our first community meetups, technical talks, workshops and AI learning sessions across the UAE.</p>
        </div>

        <div className="events-placeholder">
          <div className="placeholder-content">
            <div className="placeholder-icon">📅</div>
            <h3>First Events Coming Soon</h3>
            <p>Join us for our upcoming community gatherings and technical sessions</p>
            <button className="btn btn-primary">Stay Updated</button>
          </div>
        </div>
      </div>
    </section>
  )
}
