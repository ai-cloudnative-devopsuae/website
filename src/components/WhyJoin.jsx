import React from 'react'
import { Users, Lightbulb, Handshake } from 'lucide-react'
import './WhyJoin.css'

export default function WhyJoin() {
  const benefits = [
    {
      id: 1,
      icon: Users,
      title: "Professional Network",
      description: "Meet engineers, architects, students and technology leaders working across the UAE."
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Learn Together",
      description: "Gain practical insight from talks, workshops and real-world experiences shared by members."
    },
    {
      id: 3,
      icon: Handshake,
      title: "Get Involved",
      description: "Speak at a meetup, help organise events or collaborate on community projects."
    }
  ]

  return (
    <section id="community" className="why-join">
      <div className="why-join-container">
        <div className="section-header">
          <h2>Why Join Our Community?</h2>
          <p>A welcoming place to grow your network, skills and impact.</p>
        </div>

        <div className="benefits-grid">
          {benefits.map(benefit => {
            const IconComponent = benefit.icon
            return (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon" aria-hidden="true">
                  <IconComponent size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="why-join-cta">
          <a href="#membership" className="btn btn-primary">Become a Member</a>
        </div>
      </div>
    </section>
  )
}
