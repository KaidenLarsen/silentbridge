"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { siteConfig } from "@/config/site"
import { scrollToSection } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href.substring(1))
    } else if (href.startsWith('/#')) {
      e.preventDefault()
      scrollToSection(href.substring(2))
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80"
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="-ml-2 h-9 w-9 p-0">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <nav className="mt-6 flex flex-col space-y-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={(e) => handleNavClick(item.href, e)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex justify-end space-x-2">
            <Button asChild>
              <Link href="https://github.com/KaidenLarsen/silentbridge">
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}