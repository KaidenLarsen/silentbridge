import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { MessagesSquare, Lightbulb, GraduationCap, Users2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contributions = [
  {
    icon: MessagesSquare,
    title: "Join Our Discord",
    description: "Connect with us, share ideas, and participate in early discussions about the project&aposs direction.",
    action: "Join Discord"
  },
  {
    icon: GraduationCap,
    title: "Research & Learning",
    description: "Share resources, papers, or expertise in ML, neural networks, or AAC systems.",
    action: "Share Knowledge"
  },
  {
    icon: Users2,
    title: "AAC Experience",
    description: "Share your experiences with AAC systems to help inform our development approach.",
    action: "Share Experience"
  },
  {
    icon: Lightbulb,
    title: "Early Input",
    description: "Help shape the project&aposs foundation by providing feedback on our initial concepts.",
    action: "Give Feedback"
  }
]

export function ContributingSection() {
  return (
    <section id="contribute" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Early Community</h2>
          <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
            While we&apos;re in the early research and learning phase, we&apos;re building a community of 
            individuals interested in shaping the future of AI-assisted AAC. Your insights and 
            expertise can help guide our development.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contributions.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border-2 flex flex-col">
                <CardHeader>
                  <div className="mb-2">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-6">
                  <Button className="w-full" asChild>
                    <Link href="https://discord.gg/x6YHMU4fKa">{item.action}</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContributingSection;