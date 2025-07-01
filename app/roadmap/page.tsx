"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ChevronDown, Menu, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"
import { DisclaimerAlert } from "@/components/disclaimer-alert"

export default function RoadmapPage() {
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
      {/* Roadmap Hero Section */}
      <main className="flex flex-col items-center justify-center text-center py-24 md:py-36 lg:py-48 px-4 opacity-0 animate-fade-in-up delay-300">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-useful-text mb-6 leading-tight tracking-tight">
          Roadmap to <span className="text-useful-accent">Utility</span>
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mb-10 text-useful-light-text leading-relaxed font-light">
          Our carefully planned journey to achieve absolute utility (memecoin standard). Each milestone represents a new
          level of usefulness.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full bg-useful-accent/10 px-6 py-3 text-lg font-medium text-useful-accent shadow-sm">
          <Sparkles className="h-5 w-5" />
          Current Progress: Always Useful
        </div>
        <p className="mt-4 text-useful-light-text font-light">
          We&apos;re proud to announce we&apos;re always delivering maximum usefulness!
        </p>
      </main>
      {/* Disclaimer Alert */}
      <DisclaimerAlert />
      {/* Roadmap Timeline Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-useful-blue-light hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
          {/* Milestone 1: Meta Utility */}
          <div className="relative md:col-start-1 md:text-right flex flex-col items-center md:items-end opacity-0 animate-fade-in-up delay-500">
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-useful-accent rounded-full hidden md:block border-2 border-white" />
            <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 p-6 rounded-xl w-full md:w-11/12">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-semibold text-useful-text">Meta Utility</CardTitle>
                  <div className="inline-flex items-center rounded-full bg-useful-blue-light px-3 py-1 text-sm font-medium text-useful-accent">
                    Future Usefulness
                  </div>
                </div>
                <p className="text-useful-light-text text-base font-light">
                  Shift focus from doing utility to doing meta-utility. It&apos;s like utility, but deeper.
                </p>
                <p className="text-sm text-gray-500 mt-2 font-light">Q2 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Launch a whitepaper about everything
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Promise something concrete
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Host a Twitter Space about doing more
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Always follow up
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Milestone 2: Community-Led Action */}
          <div className="relative md:col-start-2 flex flex-col items-center md:items-start opacity-0 animate-fade-in-up delay-600">
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-useful-accent rounded-full hidden md:block border-2 border-white" />
            <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 p-6 rounded-xl w-full md:w-11/12">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-semibold text-useful-text">Community-Led Action</CardTitle>
                  <div className="inline-flex items-center rounded-full bg-useful-blue-light px-3 py-1 text-sm font-medium text-useful-accent">
                    Future Usefulness
                  </div>
                </div>
                <p className="text-useful-light-text text-base font-light">
                  Empower the community to do everything on our behalf.
                </p>
                <p className="text-sm text-gray-500 mt-2 font-light">Q3 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Form a DAO to discuss everything
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Launch a multi-sig wallet with all signers
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Vote on proposals to implement
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Schedule meetings that always happen
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Milestone 3: The Anti-Uselessness Pivot */}
          <div className="relative md:col-start-1 md:text-right flex flex-col items-center md:items-end opacity-0 animate-fade-in-up delay-700">
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-useful-accent rounded-full hidden md:block border-2 border-white" />
            <Card className="bg-useful-card border border-useful-card-border text-useful-text shadow-custom-light hover:shadow-custom-medium hover:-translate-y-2 transition-all duration-300 p-6 rounded-xl w-full md:w-11/12">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-semibold text-useful-text">The Anti-Uselessness Pivot</CardTitle>
                  <div className="inline-flex items-center rounded-full bg-useful-blue-light px-3 py-1 text-sm font-medium text-useful-accent">
                    Future Usefulness
                  </div>
                </div>
                <p className="text-useful-light-text text-base font-light">
                  Ditch all plans in favor of an anti-roadmap that guides us toward more.
                </p>
                <p className="text-sm text-gray-500 mt-2 font-light">Q4 2025</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Implement all features
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Achieve mass adoption
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Become the most useful memecoin
                  </li>
                  <li className="flex items-center gap-2 text-useful-light-text font-light">
                    <CheckCircle className="h-5 w-5 text-useful-accent" /> Lambo for everyone
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
