import React from 'react'
import { Sparkles, Zap, Share2 } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">AI • Cloud Native • DevOps</span>
          </div>

          <h1 className="hero-title">
            Connect. Learn.
            <span className="gradient-text"> Build. Innovate.</span>
          </h1>

          <p className="hero-description">
            Bringing together AI, Cloud Native and DevOps enthusiasts across the UAE 
            through knowledge sharing, technical talks, workshops and community collaboration.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">Explore Community</a>
            <a href="#events" className="btn btn-secondary">Upcoming Events</a>
          </div>

          <div className="hero-pillars">
            <div className="pillar">
              <h4 className="pillar-title">Connect</h4>
              <p className="pillar-description">Network with AI, Cloud Native and DevOps professionals and enthusiasts</p>
            </div>
            <div className="pillar">
              <h4 className="pillar-title">Learn</h4>
              <p className="pillar-description">Attend technical talks, workshops and knowledge-sharing sessions</p>
            </div>
            <div className="pillar">
              <h4 className="pillar-title">Build</h4>
              <p className="pillar-description">Collaborate on projects, experiment with technologies and innovate</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">
              <Sparkles size={28} />
            </div>
            <div className="card-label">Innovation</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">
              <Share2 size={28} />
            </div>
            <div className="card-label">Collaboration</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">
              <Zap size={28} />
            </div>
            <div className="card-label">Growth</div>
          </div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
      </div>
    </section>
  )
}
