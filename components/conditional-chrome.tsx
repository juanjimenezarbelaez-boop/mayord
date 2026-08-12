"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

/**
 * Landing pages built for standalone Google Ads campaigns. They keep the
 * global nav header and floating WhatsApp button (for site continuity and a
 * persistent contact option) but skip the full footer so the page stays
 * focused on the phone/WhatsApp call-to-action instead of navigating away.
 */
const NO_FOOTER_ROUTES = [
  "/used-tires-edgewater-md",
  "/flat-tire-repair-edgewater-md",
  "/mobile-tire-repair-edgewater-md",
  "/tpms-service-edgewater-md",
  "/tire-mounting-edgewater-md",
  "/tire-balancing-edgewater-md",
  "/tire-rotation-edgewater-md",
  "/rim-cleaning-edgewater-md",
]

/** Routes that render their own fully standalone page with no site chrome at all. */
const BARE_ROUTES = ["/thank-you"]

export default function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isBare = BARE_ROUTES.includes(pathname)
  const hideFooter = NO_FOOTER_ROUTES.includes(pathname)

  if (isBare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      {!hideFooter && <Footer />}
      <WhatsAppButton />
    </>
  )
}
