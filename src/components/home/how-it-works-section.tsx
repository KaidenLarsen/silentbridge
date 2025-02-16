// DEPRICIATED SECTION //
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { MessagesSquare, Brain, Sparkles, Send } from "lucide-react"

const steps = [
  {
    icon: MessagesSquare,
    title: "Input Processing",
    description: "The system processes multimodal inputs including symbols, gestures, and text to understand user intent."
  },
  {
    icon: Brain,
    title: "Context Analysis",
    description: "AI analyzes environmental and historical data to understand the communication context."
  },
  {
    icon: Sparkles,
    title: "Personalized Generation",
    description: "Advanced language models generate natural, contextually appropriate responses."
  },
  {
    icon: Send,
    title: "Adaptive Output",
    description: "The system delivers responses through the user's preferred communication channels."
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Alert key={step.title} className="border-2">
                <Icon className="h-5 w-5" />
                <AlertTitle className="mt-2">{step.title}</AlertTitle>
                <AlertDescription className="mt-2">
                  {step.description}
                </AlertDescription>
              </Alert>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection;