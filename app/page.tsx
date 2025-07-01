"use client"

import Link from "next/link"
import Image from "next/image"
import { Rocket, ChevronDown, Menu, Zap, TrendingUp, Users, ShieldCheck } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"

export default function Component() {
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
      {/* Header */}
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
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-24 md:py-36 lg:py-48 px-4 opacity-0 animate-fade-in-up delay-300">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-useful-text mb-6 leading-tight tracking-tight">
          Welcome to <span className="text-useful-accent">Useful Coin</span>
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mb-10 text-useful-light-text leading-relaxed font-light">
          The world&apos;s first memecoin that promises nothing in terms of financial gains, but everything in terms of
          charitable impact.
          <br />
          Infinite utility for good. Infinite purpose through giving. 100% focused on charity from creator rewards. The
          world&apos;s most honest memecoin.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button className="bg-useful-accent text-white hover:bg-useful-accent/80 px-8 py-4 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Rocket className="mr-2 h-5 w-5" /> Launch App
          </Button>
          <Link href="/roadmap">
            <Button
              variant="outline"
              className="border-useful-accent text-useful-accent hover:bg-useful-accent/5 px-8 py-4 text-xl rounded-full bg-transparent transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn
            </Button>
          </Link>
        </div>
      </main>
      {/* The Utility of Useful Coin Section - Enhanced Design */}
      <section className="container mx-auto px-4 py-16 md:py-24 opacity-0 animate-fade-in-up delay-500">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-useful-text">
          The Utility of Useful Coin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Instant Gratification */}
          <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 text-center p-6 rounded-xl">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="p-4 rounded-full bg-useful-accent/10 mb-4">
                <Zap className="h-10 w-10 text-useful-accent" />
              </div>
              <CardTitle className="text-2xl font-semibold text-useful-text">Instant Gratification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-useful-light-text text-base font-light">
                Experience the thrill of contributing to good causes with every transaction.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Future-Proof Hype */}
          <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 text-center p-6 rounded-xl">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="p-4 rounded-full bg-useful-accent/10 mb-4">
                <TrendingUp className="h-10 w-10 text-useful-accent" />
              </div>
              <CardTitle className="text-2xl font-semibold text-useful-text">Future-Proof Hype</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-useful-light-text text-base font-light">
                Our roadmap is simple: more memes, more community, more charitable impact. Always trending for good.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Vibrant Community */}
          <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 text-center p-6 rounded-xl">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="p-4 rounded-full bg-useful-accent/10 mb-4">
                <Users className="h-10 w-10 text-useful-accent" />
              </div>
              <CardTitle className="text-2xl font-semibold text-useful-text">Vibrant Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-useful-light-text text-base font-light">
                Join a global family united by memes and a shared passion for making a difference.
              </p>
            </CardContent>
          </Card>

          {/* Card 4: Unbreakable Trust */}
          <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 text-center p-6 rounded-xl">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="p-4 rounded-full bg-useful-accent/10 mb-4">
                <ShieldCheck className="h-10 w-10 text-useful-accent" />
              </div>
              <CardTitle className="text-2xl font-semibold text-useful-text">Unbreakable Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-useful-light-text text-base font-light">
                Built on the blockchain, secured by memes and our transparent commitment to charity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
