"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Footer } from "@/components/footer"

export default function WhitepaperPage() {
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
      {/* Whitepaper Content Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 opacity-0 animate-fade-in-up delay-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-useful-text mb-8 text-center">
          The <span className="text-useful-accent">UsefulCoin</span> Whitepaper
        </h1>
        <p className="text-lg text-useful-light-text leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Dive deep into the foundational principles, charitable mechanisms, and future vision of UsefulCoin. Understand
          how every transaction contributes to a greater good.
        </p>

        <div className="prose prose-lg mx-auto text-useful-text">
          <h2 className="text-3xl font-bold text-useful-accent mb-4">1. Introduction to UsefulCoin</h2>
          <p>
            UsefulCoin ($USEFUL) is not just another memecoin; it&apos;s a movement. Born from the idea that even the
            most whimsical digital assets can serve a profound purpose, UsefulCoin channels the power of community and
            decentralization to generate real-world charitable impact. We believe in transparency, fun, and making a
            tangible difference.
          </p>
          <h2 className="text-3xl font-bold text-useful-accent mb-4">2. The Charitable Mechanism</h2>
          <p>
            A portion of the creator rewards from UsefulCoin transactions is dedicated to various charitable
            organizations. Our smart contract is designed to facilitate this process, ensuring that a consistent flow of
            funds supports causes ranging from environmental protection to humanitarian aid. Details of donations will
            be regularly published for full transparency.
          </p>
          <h2 className="text-3xl font-bold text-useful-accent mb-4">3. Tokenomics (Simplified)</h2>
          <p>
            UsefulCoin operates on a simple, deflationary model. While specific numbers are subject to change based on
            market dynamics and community proposals, the core principle remains: a small percentage of each transaction
            contributes to the charity pool, while another portion may be burned to reduce supply, potentially
            increasing scarcity.
          </p>
          <ul className="list-disc list-inside">
            <li>Total Supply: [To be determined]</li>
            <li>Charity Allocation: [Percentage] of creator rewards</li>
            <li>Burn Mechanism: [Percentage] per transaction (optional)</li>
          </ul>
          <h2 className="text-3xl font-bold text-useful-accent mb-4">4. Community & Governance</h2>
          <p>
            The strength of UsefulCoin lies in its vibrant community. We encourage active participation in discussions
            and future governance proposals. While initial decisions are guided by the founding team, our long-term
            vision includes a decentralized autonomous organization (DAO) where holders can vote on charitable causes
            and project developments.
          </p>
          <h2 className="text-3xl font-bold text-useful-accent mb-4">5. Roadmap to Utility</h2>
          <p>
            Our roadmap outlines key milestones focused on expanding our charitable reach, fostering community growth,
            and enhancing the overall absolute utility (memecoin standard) of UsefulCoin. This includes partnerships
            with charities, development of community tools, and continuous engagement with our holders.
          </p>
          <p className="text-center mt-12">
            <Link href="/roadmap" className="text-useful-accent hover:underline font-semibold">
              View Our Full Roadmap &rarr;
            </Link>
          </p>
          <h2 className="text-3xl font-bold text-useful-accent mb-4">6. Disclaimer</h2>
          <p>
            Please refer to our official disclaimer for important information regarding financial risks and the nature
            of this project. UsefulCoin is a memecoin focused on charity, not an investment vehicle.
          </p>
          <p className="text-center mt-12">
            <Link href="#" className="text-useful-accent hover:underline font-semibold">
              Read the Full Disclaimer &rarr;
            </Link>
          </p>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
