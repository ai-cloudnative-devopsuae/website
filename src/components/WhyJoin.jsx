import React from 'react'
import { Users, Cpu, Server, Network, Lightbulb, Star } from 'lucide-react'
import './WhyJoin.css'

export default function WhyJoin() {
  const benefits = [
    {
      id: 1,
      icon: Users,
      title: "Diverse Community",
      description: "Connect with AI engineers, DevOps practitioners, Cloud Native architects and technology enthusiasts"
    },
    {
      id: 2,
      icon: Cpu,
      title: "AI Expertise",
      description: "Learn about Generative AI, LLMs, Machine Learning, AI Engineering and practical AI applications"
    },
    {
      id: 3,
      icon: Server,
      title: "Cloud Native Skills",
      description: "Master Kubernetes, Docker, containers, CNCF technologies and cloud architecture"
    },
    {
      id: 4,
      icon: Network,
      title: "DevOps Knowledge",
      description: "Develop CI/CD, Infrastructure as Code, Terraform, GitOps and SRE expertise"
    },
    {
      id: 5,
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Share ideas, collaborate on projects and explore cutting-edge technologies together"
    },
    {
      id: 6,
      icon: Star,
      title: "Community Driven",
      description: "Be part of an independent, grassroots community focused on learning and growth"
    }
  ]

  return (
    <section id="community" className="why-join">
      <div className="why-join-container">
        <div className="section-header">
          <h2>Why Join Our Community?</h2>
          <p>Be part of something meaningful. Here's what you get:</p>
        </div>

        <div className="benefits-grid">
          {benefits.map(benefit => {
            const IconComponent = benefit.icon
            return (
              <div key={benefit.id} className="benefit-card">
                <div className="benefit-icon">
                  <IconComponent size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
