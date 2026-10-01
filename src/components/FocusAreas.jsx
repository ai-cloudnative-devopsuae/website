import React from 'react'
import { Brain, Cloud, Workflow } from 'lucide-react'
import './FocusAreas.css'

export default function FocusAreas() {
  const areas = [
    {
      id: 1,
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Building practical, production-ready AI, from foundation models to real-world applications.",
      highlights: ["Generative AI", "LLMs", "AI Agents", "Machine Learning", "AI Engineering"]
    },
    {
      id: 2,
      icon: Cloud,
      title: "Cloud Native",
      description: "Designing and running scalable, resilient platforms on modern cloud infrastructure.",
      highlights: ["Kubernetes", "Docker", "Containers", "CNCF", "Cloud Architecture"]
    },
    {
      id: 3,
      icon: Workflow,
      title: "DevOps",
      description: "Delivering software faster and more reliably through automation and shared ownership.",
      highlights: ["CI/CD", "Infrastructure as Code", "Terraform", "GitOps", "Observability", "SRE", "Platform Engineering"]
    }
  ]

  return (
    <section id="focus" className="focus-areas">
      <div className="focus-container">
        <div className="section-header">
          <h2>Our Focus Areas</h2>
          <p>Three core technology domains driving innovation</p>
        </div>

        <div className="areas-grid">
          {areas.map(area => {
            const IconComponent = area.icon
            return (
              <div key={area.id} className="area-card">
                <div className="area-icon" aria-hidden="true">
                  <IconComponent size={48} />
                </div>
                <h3>{area.title}</h3>
                <p className="area-description">{area.description}</p>
                <ul className="highlights" aria-label={`${area.title} topics`}>
                  {area.highlights.map((highlight) => (
                    <li key={highlight} className="highlight-tag">{highlight}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
