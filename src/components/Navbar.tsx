'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Events & Calendar', href: '/events' },
  { label: 'Get Involved!', href: '/get-involved' },
]

type NavbarProps = {
  /** The href for the currently active page or section. */
  activeHref?: string
}

export default function Navbar({ activeHref }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      // Keep keyboard focus inside the open mobile menu.
      if (event.key !== 'Tab' || !menuRef.current) return

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus())

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  useEffect(() => {
    // Close the mobile menu when switching to desktop widths.
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2d4a] text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3 lg:min-h-20 lg:px-8 lg:py-4"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center gap-3 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a]"
          aria-label="NAIT Computer Technology Club home"
        >
          <Image
            src="/club_logo_transparent.png"
            alt="NAIT Computer Technology Club logo"
            width={64}
            height={64}
            priority
            sizes="64px"
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="text-xs font-bold leading-none tracking-[0.2em] sm:text-sm">
              NAIT
            </span>
            <span className="mt-1 whitespace-nowrap text-sm font-bold leading-tight tracking-[0.15em] sm:text-base lg:text-lg">
              COMPUTER TECHNOLOGY CLUB
            </span>
          </span>
        </Link>

        <div className="hidden items-center lg:flex lg:w-4/5 lg:justify-end">
          <ul className="flex items-center gap-6" role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-1 text-base font-medium transition-colors duration-150 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a] ${
                    activeHref === item.href ? 'text-white' : 'text-white/95'
                  }`}
                  aria-current={activeHref === item.href ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 bottom-1 h-0.5 origin-left bg-white transition-transform duration-150 ${
                      activeHref === item.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d4a] lg:hidden"
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="relative flex h-5 w-6 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-0.5 w-6 origin-center bg-white transition-transform duration-200 ${
                isMenuOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-6 origin-center bg-white transition-transform duration-200 ${
                isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        ref={menuRef}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`border-t border-white/10 bg-[#14253f] shadow-lg transition-[max-height,opacity] duration-200 ease-out lg:hidden ${
          isMenuOpen
            ? 'max-h-[30rem] opacity-100'
            : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6" role="list">
          {navigation.map((item, index) => (
            <li key={item.href}>
              <a
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                tabIndex={isMenuOpen ? 0 : -1}
                className={`flex min-h-11 w-full items-center rounded-md px-3 py-3 text-base font-medium transition-colors duration-150 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  activeHref === item.href ? 'bg-white/10 text-white' : 'text-white/95'
                }`}
                aria-current={activeHref === item.href ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
