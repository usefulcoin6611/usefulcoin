import Link from "next/link"
import Image from "next/image" // Import Image component
import { Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-useful-footer-bg py-12 text-useful-footer-text opacity-0 animate-fade-in-up delay-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About UsefulCoin */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            {" "}
            {/* Flex container for logo and text */}
            <Image src="/usefulcoin-logo.png" alt="UsefulCoin Logo" width={40} height={40} className="rounded-full" />
            <div className="text-3xl font-bold text-useful-accent">$USEFULCOIN</div>
          </div>
          <p className="text-sm mb-4 font-light">
            The cryptocurrency that proudly delivers absolute utility (memecoin standard) through charitable initiatives
            funded by creator rewards. You&apos;re early. But it matters. $USEFULCOIN is not responsible for any
            financial gains, losses, or existential crises. Do your own research — or don&apos;t. It&apos;s useful
            anyway.
          </p>
          <p className="text-sm mb-4 font-light">
            Support:{" "}
            <a href="mailto:support@usefulcoin.com" className="hover:underline text-useful-footer-link">
              support@usefulcoin.com
            </a>
            <br />
            (Expect a response.)
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/i/communities/1940082863162237300" // Updated URL
              aria-label="Twitter"
              className="text-useful-footer-text hover:text-useful-accent transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Column 2: Links - Now matching header's "Useful Links" */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/whitepaper"
              className="text-useful-footer-link hover:text-useful-accent transition-colors font-light"
            >
              Whitepaper
            </Link>
            <Link
              href="/community"
              className="text-useful-footer-link hover:text-useful-accent transition-colors font-light"
            >
              Community
            </Link>
            <Link
              href="/roadmap"
              className="text-useful-footer-link hover:text-useful-accent transition-colors font-light"
            >
              Roadmap
            </Link>
          </nav>
        </div>

        {/* Column 3: Community - Only X Community remains */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="https://x.com/i/communities/1940082863162237300"
              className="text-useful-footer-link hover:text-useful-accent transition-colors font-light"
            >
              X Community
            </Link>
          </nav>
        </div>

        {/* Column 4: Empty or for future use */}
        <div className="hidden md:block" />
      </div>

      {/* Bottom Copyright and Tagline */}
      <div className="container mx-auto border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-useful-footer-link">
        <p className="font-light">
          &copy; {new Date().getFullYear()} Useful Coin. All rights reserved. (But what&apos;s the point?)
        </p>
        <p className="mt-4 md:mt-0 font-light">Built with love and infinite utility 🚀</p>
      </div>
    </footer>
  )
}
