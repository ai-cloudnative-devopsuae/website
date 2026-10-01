import React from 'react'
import { CalendarDays } from 'lucide-react'
import { SITE_CONFIG } from '../config/site'
import './Events.css'

export default function Events() {
  const { contactEmail } = SITE_CONFIG

  return (
    <section id="events" className="events">
      <div className="events-container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Meetups, technical talks, hands-on workshops and AI learning sessions across the UAE.</p>
        </div>

        <div className="events-status">
          <div className="events-status-icon" aria-hidden="true">
            <CalendarDays size={32} />
          </div>
          <h3>Our first events are being planned</h3>
          <p>
            Dates, venues and speakers will be announced here. Event updates will be
            available to everyone, with no membership required.
          </p>

          <a href="#newsletter" className="btn btn-secondary">Get Event Updates</a>

          {contactEmail && (
            <p className="events-speak">
              Interested in speaking or hosting an event?{' '}
              <a href={`mailto:${contactEmail}?subject=${encodeURIComponent('Speaking or hosting')}`}>
                Email us
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
