"use client"

import { useState, type FormEvent } from "react"
import { Check } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { trackPhoneConversion } from "@/lib/gtag"

const SHOP_SMS_NUMBER = "2405958547"

export default function QuoteForm() {
  const [size, setSize] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!size.trim() || !name.trim() || !phone.trim()) return

    // Fire the Google Ads conversion — this is a qualified lead.
    trackPhoneConversion()

    // Pre-fill the visitor's SMS composer to the shop (mobile-first ads audience).
    const body = encodeURIComponent(
      `Hi Mayo RD Tire Shop, I'd like a price on used tires. Tire size/vehicle: ${size.trim()}. Name: ${name.trim()}. My number: ${phone.trim()}.`,
    )
    window.location.href = `sms:${SHOP_SMS_NUMBER}?body=${body}`

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-surface border border-brand-surface-light p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white">
          <Check size={28} />
        </div>
        <h3 className="font-label text-2xl font-bold text-white mb-2">
          YOU&apos;RE ALL SET
        </h3>
        <p className="text-brand-text-muted mb-6 text-pretty">
          Your text is ready to send. If it didn&apos;t open automatically, just call
          us and we&apos;ll check your size right away.
        </p>
        <a
          href={siteConfig.phoneHref}
          onClick={() => trackPhoneConversion()}
          className="inline-flex items-center justify-center rounded-lg bg-brand-orange px-6 py-3 font-label font-bold text-white transition-colors hover:bg-brand-orange-hover"
        >
          CALL {siteConfig.phone}
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-brand-surface border border-brand-surface-light p-6 sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="q-size"
            className="mb-1.5 block font-label text-sm font-bold tracking-wide text-white"
          >
            Tire size or vehicle
          </label>
          <input
            id="q-size"
            type="text"
            required
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="e.g. 205/55R16 or 2018 Honda Civic"
            className="w-full rounded-lg border border-brand-surface-light bg-brand-dark px-4 py-3 text-white placeholder:text-brand-text-muted/70 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>
        <div>
          <label
            htmlFor="q-name"
            className="mb-1.5 block font-label text-sm font-bold tracking-wide text-white"
          >
            Name
          </label>
          <input
            id="q-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-brand-surface-light bg-brand-dark px-4 py-3 text-white placeholder:text-brand-text-muted/70 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>
        <div>
          <label
            htmlFor="q-phone"
            className="mb-1.5 block font-label text-sm font-bold tracking-wide text-white"
          >
            Phone
          </label>
          <input
            id="q-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(240) 555-0123"
            className="w-full rounded-lg border border-brand-surface-light bg-brand-dark px-4 py-3 text-white placeholder:text-brand-text-muted/70 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-brand-orange px-6 py-4 font-label text-lg font-bold text-white transition-colors hover:bg-brand-orange-hover"
      >
        TEXT ME A PRICE
      </button>
      <p className="mt-3 text-center text-sm text-brand-text-muted">
        Or call {siteConfig.phone} — we answer 7 days a week.
      </p>
    </form>
  )
}
