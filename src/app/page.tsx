import { FeaturesSection } from "@/components/home/features-section"
import { Button } from "@/components/ui/button"

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
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>
      
      <FeaturesSection />
    </main>
  )
}