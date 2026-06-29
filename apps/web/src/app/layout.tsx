import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Project Idea Generator",
  description: "Generate and discover project ideas for your next build",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
