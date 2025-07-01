"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function CommunityClientPage() {
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
        {/* Mobile menu button and drawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <Menu className="h-6 w-6 text-useful-text" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-6">
                <Image src="/usefulcoin-logo.png" alt="UsefulCoin Logo" width={32} height={32} className="rounded-full" />
                <div className="text-xl font-semibold text-useful-accent">$USEFULCOIN</div>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-useful-light-text hover:text-useful-accent text-lg font-medium">Home</Link>
                <div>
                  <div className="text-useful-light-text text-lg font-medium mb-1">About</div>
                  <Link href="/team" className="ml-4 text-useful-light-text hover:text-useful-accent text-base">Team</Link>
                </div>
                <div>
                  <div className="text-useful-light-text text-lg font-medium mb-1">Useful Links</div>
                  <Link href="/whitepaper" className="ml-4 text-useful-light-text hover:text-useful-accent text-base block">Whitepaper</Link>
                  <Link href="/community" className="ml-4 text-useful-light-text hover:text-useful-accent text-base block">Community</Link>
                  <Link href="/roadmap" className="ml-4 text-useful-light-text hover:text-useful-accent text-base block">Roadmap</Link>
                </div>
                <Link href="https://x.com/i/communities/1940082863162237300" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-useful-accent text-white hover:bg-useful-accent/90 px-6 py-3 text-lg rounded-full shadow-md transition-all duration-300 w-full mt-4">
                    Buy Useful
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="pt-24 md:pt-28 lg:pt-32" /> {/* Spacer for fixed header */}
      <main className="flex flex-col items-center justify-center text-center py-24 md:py-36 lg:py-48 px-4 opacity-0 animate-fade-in-up delay-300">
        <h1 className="text-4xl md:text-5xl font-bold text-useful-accent mb-4">Usefulcoin Community</h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-useful-text mb-6 leading-tight tracking-tight">
          Join Our <span className="text-useful-accent">Community</span>
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mb-10 text-useful-light-text leading-relaxed font-light">
          Connect with fellow UsefulCoin enthusiasts, share memes, and discuss the future of utility.
        </p>
        <Link href="https://x.com/i/communities/1940082863162237300" target="_blank" rel="noopener noreferrer">
          <Button className="bg-useful-accent text-white hover:bg-useful-accent/80 px-8 py-4 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Twitter className="mr-2 h-5 w-5" /> Join X Community
          </Button>
        </Link>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
