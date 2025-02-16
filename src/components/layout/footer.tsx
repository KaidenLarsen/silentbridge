import Link from "next/link"
import { Github } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-medium">SilentBridge</h3>
            <p className="text-muted-foreground">
              Empowering non-verbal autistic individuals through AI-assisted communication.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-medium">Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/research" className="text-muted-foreground hover:text-foreground">
                Research
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-medium">Open Source</h3>
            <p className="text-muted-foreground">
              This project is open source and free to use.
            </p>
            <Link 
              href={siteConfig.social.github}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h3 className="font-medium">Contact</h3>
            <Link 
              href="mailto:contact@silent-bridge.com" 
              className="text-muted-foreground hover:text-foreground"
            >
              contact@silent-bridge.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SilentBridge. Released under the MIT License.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care for the autism community.
          </p>
        </div>
      </div>
    </footer>
  )
}