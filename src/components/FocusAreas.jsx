import React from 'react'
import { Brain, Cloud, Workflow } from 'lucide-react'
import './FocusAreas.css'

export default function FocusAreas() {
  const areas = [
    {
      id: 1,
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Generative AI, LLMs, AI Engineering, AI Agents, Machine Learning and practical AI applications",
      highlights: ["Generative AI", "LLMs", "AI Engineering", "Machine Learning", "AI Applications"]
    },
    {
      id: 2,
      icon: Cloud,
      title: "Cloud Native",
      description: "Kubernetes, Docker, containers, CNCF technologies, cloud infrastructure and cloud architecture",
      highlights: ["Kubernetes", "Docker", "Containers", "CNCF", "Cloud Architecture"]
    },
    {
      id: 3,
      icon: Workflow,
      title: "DevOps",
      description: "CI/CD, Infrastructure as Code, Terraform, GitOps, automation, observability, SRE and platform engineering",
      highlights: ["CI/CD", "IaC", "Terraform", "GitOps", "SRE"]
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
                <div className="area-icon">
                  <IconComponent size={48} />
                </div>
                <h3>{area.title}</h3>
                <p className="area-description">{area.description}</p>
                <div className="highlights">
                  {area.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
