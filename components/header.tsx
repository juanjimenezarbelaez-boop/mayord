"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/data"
import PhoneCallLink from "@/components/phone-call-link"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur border-b border-brand-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="inline-block relative">
            <Image
              src={siteConfig.logoUrl}
              alt="Mayo RD Tire Shop Logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 font-label text-sm font-bold tracking-wider text-brand-text">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === "/services" && pathname.startsWith("/mobile-tire-service"))
            const activeClass = isActive
              ? "text-brand-orange border-b-2 border-brand-orange pb-1"
              : "hover:text-brand-orange transition-colors"

            if (!link.submenu) {
              return (
                <Link key={link.href} href={link.href} className={activeClass}>
                  {link.label}
                </Link>
              )
            }

            return (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 ${activeClass}`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180"
                  />
                </Link>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-60 rounded-xl border border-brand-surface-light bg-brand-dark p-2 shadow-xl shadow-black/40">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                          pathname === sub.href
                            ? "bg-brand-surface text-brand-orange"
                            : "text-brand-text hover:bg-brand-surface hover:text-brand-orange"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <PhoneCallLink
          label="header"
          className="hidden lg:flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-lg font-bold font-label transition-colors"
        >
          <Phone size={18} />
          <span>{siteConfig.phone}</span>
        </PhoneCallLink>

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
              <div key={link.href} className="flex flex-col gap-3">
                <Link
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
                {link.submenu && (
                  <div className="ml-4 flex flex-col gap-3 border-l border-brand-surface-light pl-4">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className={
                          pathname === sub.href
                            ? "text-brand-orange font-medium normal-case tracking-normal"
                            : "text-brand-text-muted hover:text-brand-orange transition-colors font-medium normal-case tracking-normal"
                        }
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <PhoneCallLink
              label="header"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 rounded-lg font-bold transition-colors mt-2"
            >
              <Phone size={18} />
              <span>{siteConfig.phone}</span>
            </PhoneCallLink>
          </nav>
        </div>
      )}
    </header>
  )
}
