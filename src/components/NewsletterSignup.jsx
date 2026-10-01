import React, { useId } from 'react'
import { SITE_CONFIG, hasPrivacyPolicy, isHttpsUrl } from '../config/site'
import './NewsletterSignup.css'

// Separate from Membership: subscribers only receive announcements.
export default function NewsletterSignup({ tone = 'light', id }) {
  const inputId = useId()
  const noteId = useId()
  const isOpen = isHttpsUrl(SITE_CONFIG.newsletterFormUrl)

  const handleSubmit = (event) => {
    if (!isOpen) event.preventDefault()
  }

  return (
    <form
      id={id}
      className={`newsletter newsletter--${tone}`}
      action={isOpen ? SITE_CONFIG.newsletterFormUrl : undefined}
      method="post"
      target="_blank"
      rel="noopener noreferrer"
      onSubmit={handleSubmit}
    >
      <label htmlFor={inputId} className="newsletter-label">Email address</label>
      <div className="newsletter-fields">
        <input
          id={inputId}
          type="email"
          name="EMAIL"
          autoComplete="email"
          placeholder="Your email"
          required
          disabled={!isOpen}
          aria-describedby={noteId}
        />
        <button type="submit" className="newsletter-button" disabled={!isOpen}>
          Subscribe
        </button>
      </div>

      <p id={noteId} className="newsletter-note">
        {isOpen ? (
          <>
            Event announcements only. No membership required, unsubscribe anytime.
            {hasPrivacyPolicy && (
              <> See our <a href={SITE_CONFIG.privacyPolicyUrl}>Privacy Policy</a>.</>
            )}
          </>
        ) : (
          <>
            <strong>Newsletter opening soon.</strong> Subscriptions are not active yet, so
            nothing entered here is stored or sent.
          </>
        )}
      </p>
    </form>
  )
}
