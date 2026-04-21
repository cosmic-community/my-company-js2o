'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/team', label: 'Team' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/testimonials', label: 'Testimonials' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-midnight/80 backdrop-blur-lg border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚖️</span>
            <span className="text-xl font-display font-bold text-white">
              Google<span className="text-gradient-gold">Peak</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-gold transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/923363747047?text=Hello%20GooglePeak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm"
            >
              Consult Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gold/10">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-gold text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/923363747047"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm text-center"
              >
                Consult Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}