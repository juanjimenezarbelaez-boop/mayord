"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { siteConfig } from "@/lib/data"
import { trackPhoneConversion } from "@/lib/gtag"

type PhoneCallLinkProps = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

// Anchor to the shop phone number that fires a Google Ads conversion on click.
export default function PhoneCallLink({
  children,
  onClick,
  ...rest
}: PhoneCallLinkProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      onClick={(e) => {
        trackPhoneConversion()
        onClick?.(e)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
