import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription,} from "@/components/ui/card"
import { Database, Network, Brain, Share2, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Ethically source motion data and gestures with robust privacy protections. We prioritize user consent and data security at every step."
  },
  {
    icon: Network,
    title: "Converting Data into Vectors",
    description: "Transform diverse inputs into meaningful patterns through advanced feature extraction and multimodal integration."
  },
  {
    icon: Brain,
    title: "Training the Model",
    description: "Create generalized models with careful attention to bias mitigation and domain-specific needs of non-verbal individuals."
  },
  {
    icon: Share2,
    title: "Exporting the Generalized Model",
    description: "Deploy secure, efficient models that protect user privacy while enabling powerful communication tools."
  },
  {
    icon: Sparkles,
    title: "Fine-Tuning for Individuals",
    description: "Personalize the system for each user&apos;s unique communication style with real-time adjustments and learning."
  }
]

const benefits = [
  "Enhanced communication & vocabulary through AI-powered assistance",
  "Reduced cognitive load with intuitive, adaptive interfaces",
  "Scalable solutions that grow with user needs",
  "Strong ethical frameworks and privacy protections"
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-16">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Advancing Communication for Non-Verbal Autistic Individuals Through AI
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;re building a future where personalized AI systems empower non-verbal autistic individuals 
            to communicate more effectively, naturally, and independently.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <h3 className="text-2xl font-semibold text-center">Our Approach</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="border-2">
                  <CardHeader>
                    <div className="mb-2">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why This Matters</h3>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

         
            <div>
            <h3 className="text-2xl font-semibold mb-4">Early Concept Stage</h3>
            <p className="text-muted-foreground">
                SilentBridge is currently in its early conceptual phase. This vision 
                represents our aspirational roadmap for developing AI-assisted communication tools. 
                We&apos;re openly sharing these ideas to gather feedback, build a community of 
                like-minded individuals, and work together towards making this vision a reality.
            </p>
            <p className="text-muted-foreground mt-4">
                While we&apos;re still in the learning and planning stages, we believe in 
                the potential of combining AI with AAC systems to create more intuitive 
                and personalized communication tools. We invite researchers, developers, 
                and AAC experts to join us in exploring these possibilities.
            </p>
            </div>

        </div>

      </div>
    </section>
  )
}

export default ApproachSection;