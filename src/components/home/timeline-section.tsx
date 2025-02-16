import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const phases = [
  {
    title: "Research & Learning Phase",
    timeline: "7-8 months",
    current: true,
    items: [
      "Studying machine learning fundamentals and neural networks",
      "Research into multimodal transformer architectures",
      "Understanding AAC system requirements and constraints",
      "Exploring ethical considerations in AI-assisted communication"
    ]
  },
  {
    title: "Initial Development",
    timeline: "4-6 months",
    items: [
      "Building basic prototype for data collection",
      "Implementing core ML pipeline",
      "Testing different model architectures",
      "Setting up development infrastructure"
    ]
  },
  {
    title: "Alpha Testing",
    timeline: "3-4 months",
    items: [
      "Internal testing of basic functionality",
      "Refinement of ML models",
      "Security and privacy implementation",
      "Documentation preparation"
    ]
  },
  {
    title: "Community Preview",
    timeline: "Ongoing",
    items: [
      "Open-source release",
      "Community feedback collection",
      "Collaborative development",
      "Continuous improvement based on real-world usage"
    ]
  }
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 bg-muted/50">
      <div className="container">
        <div className="max-w-[800px] mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Timeline</h2>
          <p className="text-lg text-muted-foreground">
            SilentBridge is an ambitious project in its early stages. Here's our roadmap 
            for bringing this vision to life.
          </p>
        </div>

        <Alert className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            <AlertDescription className="text-center">
              This timeline is tentative and subject to change as development progresses. 
              Development is being balanced with university studies and work commitments.
            </AlertDescription>
          </div>
        </Alert>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((phase) => (
            <Card key={phase.title} className={`border-2 ${phase.current ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{phase.title}</span>
                  {phase.current && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Current Phase
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="font-semibold">
                  {phase.timeline}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection;