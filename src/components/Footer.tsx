'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // If not on homepage, let Next.js navigate to /#about normally
  }

    const handleEventsSectionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      const aboutSection = document.getElementById('events-section')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    // If not on homepage, let Next.js navigate to /#about normally
  }

  return (
    <footer className="border-t border-white bg-[#1a2d4a]">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <p className="group relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-1 text-base font-medium transition-colors duration-150 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a]">
            &copy; {new Date().getFullYear()} Computer Technology Club.
          </p>

          <div className="flex gap-4">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="group relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-1 text-base font-medium transition-colors duration-150 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a]"
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={handleAboutClick}
              className="group relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-1 text-base font-medium transition-colors duration-150 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a]"
            >
              About
            </Link>

            <Link
              href="/events"
              onClick={handleEventsSectionClick}
              className="group relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-1 text-base font-medium transition-colors duration-150 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a]"
            >
              Events & Calendar
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}