"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, Lightbulb } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-useful-background text-useful-text font-sans">
      {/* Header - Replicated for consistency on new page */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? "bg-white/95 shadow-custom-light backdrop-blur-sm py-4" : "bg-transparent py-6"} container mx-auto flex items-center justify-between opacity-0 animate-fade-in-up delay-100`}
      >
        <div className="flex items-center gap-2">
          <Image src="/usefulcoin-logo.png" alt="UsefulCoin Logo" width={40} height={40} className="rounded-full" />
          <div className="text-2xl font-semibold text-useful-accent">$USEFULCOIN</div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-useful-light-text hover:text-useful-accent transition-colors text-lg font-medium"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-useful-light-text hover:text-useful-accent transition-colors text-lg font-medium">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/team">Team</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-useful-light-text hover:text-useful-accent transition-colors text-lg font-medium">
              Useful Links <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/whitepaper">Whitepaper</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/community">Community</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/roadmap">Roadmap</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="https://x.com/i/communities/1940082863162237300" target="_blank" rel="noopener noreferrer">
            <Button className="bg-useful-accent text-white hover:bg-useful-accent/90 px-6 py-3 text-lg rounded-full shadow-md transition-all duration-300">
              Buy Useful
            </Button>
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden p-2">
          <Menu className="h-6 w-6 text-useful-text" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <div className="pt-24 md:pt-28 lg:pt-32" /> {/* Spacer for fixed header */}
      <main className="flex flex-col items-center justify-center text-center py-24 md:py-36 lg:py-48 px-4 opacity-0 animate-fade-in-up delay-300">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-useful-text mb-6 leading-tight tracking-tight">
          The <span className="text-useful-accent">UsefulCoin</span> &quot;Team&quot;
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mb-10 text-useful-light-text leading-relaxed font-light">
          UsefulCoin operates without a traditional &quot;team&quot; in the conventional sense. This project is a
          community-driven initiative, inspired by the vision and principles of a prominent Key Opinion Leader (KOL) in
          the space.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-useful-accent/10 px-6 py-3 text-lg font-medium text-useful-accent shadow-sm">
          <Lightbulb className="h-5 w-5" />
          Inspired by a KOL who&apos;s one of the best to ever jeet.
        </div>
        <p className="mt-4 text-useful-light-text font-light max-w-3xl">
          Their insights and philosophy laid the groundwork for UsefulCoin&apos;s commitment to absolute utility
          (memecoin standard) and charitable impact. We believe in the power of decentralized collaboration and the
          collective effort of our community to drive this project forward.
        </p>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
