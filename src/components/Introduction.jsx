import React from 'react'
import { BookOpen, Share2, Zap } from 'lucide-react'
import './Introduction.css'

export default function Introduction() {
  return (
    <section id="about" className="introduction">
      <div className="introduction-container">
        <div className="section-header">
          <h2>About Our Community</h2>
          <p>A platform for professionals in AI, Cloud Native and DevOps</p>
        </div>

        <div className="intro-content">
          <div className="intro-text">
            <h3>Welcome to AI Cloud Native DevOps UAE</h3>
            <p>
              We are an independent, community-driven platform bringing together AI, 
              Cloud Native and DevOps professionals, developers, engineers, and enthusiasts 
              based in the United Arab Emirates.
            </p>
            <p>
              Our mission is to foster knowledge sharing, enable collaboration, and build 
              a thriving community around three core technology domains: Artificial Intelligence, 
              Cloud Native technologies, and DevOps practices.
            </p>

            <div className="intro-features">
              <div className="feature">
                <div className="feature-icon">
                  <BookOpen size={24} />
                </div>
                <h4>Knowledge Sharing</h4>
                <p>Learn from community members and industry practitioners</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Share2 size={24} />
                </div>
                <h4>Collaboration</h4>
                <p>Connect and collaborate with peers on real-world projects</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Zap size={24} />
                </div>
                <h4>Innovation</h4>
                <p>Explore cutting-edge technologies and practices</p>
              </div>
            </div>
          </div>

          <div className="intro-image">
            <div className="image-placeholder">
              <div className="abstract-visual">
                <div className="node node-1"></div>
                <div className="node node-2"></div>
                <div className="node node-3"></div>
                <div className="node node-4"></div>
                <div className="node node-5"></div>
                <svg className="connection-lines" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                  <line x1="100" y1="30" x2="70" y2="80" stroke="currentColor" opacity="0.3"/>
                  <line x1="100" y1="30" x2="130" y2="80" stroke="currentColor" opacity="0.3"/>
                  <line x1="70" y1="80" x2="100" y2="150" stroke="currentColor" opacity="0.3"/>
                  <line x1="130" y1="80" x2="100" y2="150" stroke="currentColor" opacity="0.3"/>
                  <line x1="70" y1="80" x2="50" y2="120" stroke="currentColor" opacity="0.2"/>
                  <line x1="130" y1="80" x2="150" y2="120" stroke="currentColor" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
