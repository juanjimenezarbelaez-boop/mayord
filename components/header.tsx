"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/data"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-brand-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-block relative">
            <img
              src={siteConfig.logoUrl}
              alt="Mayo RD Tire Shop Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-label text-sm font-bold tracking-wider text-brand-text">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-brand-orange border-b-2 border-brand-orange pb-1"
                  : "hover:text-brand-orange transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="hidden lg:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-lg font-bold font-label transition-colors"
        >
          <Phone size={18} />
          <span>{siteConfig.phone}</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-brand-text hover:text-brand-orange transition-colors"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-surface-light">
          <nav className="flex flex-col px-4 py-6 gap-4 font-label text-sm font-bold tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === link.href
                    ? "text-brand-orange"
                    : "text-brand-text hover:text-brand-orange transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg font-bold transition-colors mt-2"
            >
              <Phone size={18} />
              <span>{siteConfig.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
