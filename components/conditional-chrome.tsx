"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

/**
 * Routes that render their own minimal header/footer and must NOT show the
 * global site chrome (nav header, full footer, floating WhatsApp button).
 * Used for standalone Google Ads landing pages.
 */
const BARE_ROUTES = ["/used-tires-edgewater-md", "/flat-tire-repair-edgewater-md"]

export default function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.includes(pathname)

  if (isBare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
