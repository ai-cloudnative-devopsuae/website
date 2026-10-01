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
          </div>

          <div className="intro-features">
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <BookOpen size={24} />
              </div>
              <h4>Knowledge Sharing</h4>
              <p>Learn from community members and industry practitioners</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <Share2 size={24} />
              </div>
              <h4>Collaboration</h4>
              <p>Connect and collaborate with peers on real-world projects</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">
                <Zap size={24} />
              </div>
              <h4>Innovation</h4>
              <p>Explore cutting-edge technologies and practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
