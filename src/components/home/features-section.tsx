"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const features = [
  {
    title: "Personalization",
    description: "AI adapts to individual communication styles, preferences, and sensory needs for a truly personalized experience."
  },
  {
    title: "Context Awareness",
    description: "Real-time analysis provides situationally appropriate responses, making communication more natural and effective."
  },
  {
    title: "Predictive Capabilities",
    description: "Advanced AI reduces cognitive load by anticipating user needs and suggesting relevant responses."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}