import { FeaturesSection } from "@/components/home/features-section"
import { ContributingSection } from "@/components/home/contributing-section"
import { ApproachSection } from "@/components/home/approach-section"
import { TimelineSection } from "@/components/home/timeline-section"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="px-4 py-24 md:py-32">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Bridging the Communication Gap with AI
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-muted-foreground md:text-xl">
            SilentBridge empowers non-verbal autistic individuals with AI-powered communication tools, 
            making expression more natural and accessible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://github.com/KaidenLarsen/silentbridge">View on GitHub</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#approach">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <TimelineSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Approach Section */}
      <ApproachSection />
      {/* Contributing Section */}
      <ContributingSection />
    </main>
  )
}