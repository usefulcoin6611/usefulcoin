import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Useful Coin Community",
  description: "",
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/usefulcoin-logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
