import React from 'react'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Connect and Grow?</h2>
          <p>Join AI, Cloud Native and DevOps professionals across the UAE. 
             Connect. Learn. Build. Innovate.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Join Community Now</button>
            <button className="btn btn-white">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
