import React, { useState } from 'react'
import { CheckCircle2, Clock, Info } from 'lucide-react'
import { SITE_CONFIG, hasPrivacyPolicy, isHttpsUrl } from '../config/site'
import './Membership.css'

// Shows the registration form when true; otherwise an "opening soon" card.
const REGISTRATION_OPEN = false

// Real submission also requires a secure endpoint and a published privacy notice.
const CAN_SUBMIT = isHttpsUrl(SITE_CONFIG.membershipFormUrl) && hasPrivacyPolicy

const EMIRATES = [
  'Abu Dhabi',
  'Dubai',
  'Sharjah',
  'Ajman',
  'Umm Al Quwain',
  'Ras Al Khaimah',
  'Fujairah',
  'Outside the UAE',
]

const INTERESTS = [
  'Artificial Intelligence',
  'Cloud Native',
  'DevOps',
  'All of the above',
]

const MEMBER_BENEFITS = [
  'Early access to meetups, workshops and technical talks',
  'Opportunities to speak, mentor and share your work',
  'Connect with practitioners across the UAE',
]

export default function Membership() {
  const [notConnected, setNotConnected] = useState(false)
  const { contactEmail } = SITE_CONFIG

  // Runs only after native validation passes.
  const handleSubmit = (event) => {
    if (!CAN_SUBMIT) {
      event.preventDefault()
      setNotConnected(true)
    }
  }

  return (
    <section id="membership" className="membership" aria-labelledby="membership-title">
      <div className={`membership-container ${REGISTRATION_OPEN ? '' : 'membership-container--closed'}`}>
        <div className="membership-intro">
          <h2 id="membership-title">Become a Member</h2>
          <p className="membership-lead">
            Membership is free and open to everyone interested in AI, Cloud Native and DevOps
            in the UAE, from students to senior engineers.
          </p>
          <ul className="membership-benefits">
            {MEMBER_BENEFITS.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {!REGISTRATION_OPEN ? (
          <div className="membership-soon">
            <div className="membership-soon-icon" aria-hidden="true">
              <Clock size={28} />
            </div>
            <h3>Membership opening soon</h3>
            <p>
              We are preparing a secure registration process. In the meantime, the organisers are
              happy to answer questions about joining, speaking or getting involved.
            </p>
            {contactEmail && (
              <>
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Membership enquiry')}`}
                  className="btn btn-primary"
                >
                  Contact the Organisers
                </a>
                <p className="membership-soon-email">{contactEmail}</p>
              </>
            )}
          </div>
        ) : (
        <form
          className="membership-form"
          action={CAN_SUBMIT ? SITE_CONFIG.membershipFormUrl : undefined}
          method="post"
          target="_blank"
          rel="noopener noreferrer"
          onSubmit={handleSubmit}
        >
          {notConnected && (
            <div className="membership-notice" role="status">
              <Info size={20} aria-hidden="true" />
              <div>
                <p className="membership-notice-title">Registration is not connected yet</p>
                <p>
                  Your details have not been sent or stored. Please try again once registration
                  is fully open.
                </p>
              </div>
            </div>
          )}

          <fieldset>
            <legend className="visually-hidden">Membership details</legend>

            <div className="form-field">
              <label htmlFor="member-name">
                Full Name <span className="required" aria-hidden="true">*</span>
              </label>
              <input id="member-name" name="fullName" type="text" autoComplete="name" required />
            </div>

            <div className="form-field">
              <label htmlFor="member-email">
                Email Address <span className="required" aria-hidden="true">*</span>
              </label>
              <input id="member-email" name="email" type="email" autoComplete="email" required />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="member-location">
                  Location / Emirate <span className="optional">(optional)</span>
                </label>
                <select id="member-location" name="location" defaultValue="">
                  <option value="">Select an emirate</option>
                  {EMIRATES.map((emirate) => (
                    <option key={emirate} value={emirate}>{emirate}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="member-interest">
                  Primary Area of Interest <span className="optional">(optional)</span>
                </label>
                <select id="member-interest" name="interest" defaultValue="">
                  <option value="">Select an area</option>
                  {INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="member-linkedin">
                LinkedIn Profile <span className="optional">(optional)</span>
              </label>
              <input
                id="member-linkedin"
                name="linkedin"
                type="url"
                inputMode="url"
                placeholder="https://www.linkedin.com/in/your-profile"
              />
            </div>

            <div className="form-consent">
              <input id="member-consent" name="consent" type="checkbox" required />
              <label htmlFor="member-consent">
                I agree that AI Cloud Native DevOps UAE may store the details above to manage my
                membership and contact me about community events. I can ask for my details to be
                deleted at any time. <span className="required" aria-hidden="true">*</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary membership-submit">
              Become a Member
            </button>
          </fieldset>

          <p className="form-footnote">
            <span className="required" aria-hidden="true">*</span> Required fields
          </p>
        </form>
        )}
      </div>
    </section>
  )
}
