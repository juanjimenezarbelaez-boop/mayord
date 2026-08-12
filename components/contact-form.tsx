"use client"

import { useState } from "react"
import { Check, Clock, MessageCircle, Phone, Send } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { trackPhoneConversion } from "@/lib/gtag"

const interestOptions = [
  "Used Tires",
  "New Tires",
  "Flat Tire Repair",
  "Mobile Tire Assistance",
  "Mounting & Balancing",
  "Tire Rotation",
  "TPMS Sensors / Sensor Light On",
  "Rim Cleaning",
  "Other",
]

// Interests that need immediate phone dispatch rather than a form submission.
const urgentInterests = new Set(["Flat Tire Repair", "Mobile Tire Assistance"])

const confirmationHours = [
  { day: "Mon - Wed", time: "8:00 AM - 6:30 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:30 PM" },
  { day: "Saturday", time: "8:00 AM - 6:30 PM" },
  { day: "Sunday", time: "9:00 AM - 4:00 PM" },
]

const whatsappHref = `https://wa.me/12405958547?text=${encodeURIComponent(
  "Hi! I'd like a quote on tires.",
)}`

const inputClasses =
  "w-full bg-white text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-xl px-4 py-3.5 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all font-semibold"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [interest, setInterest] = useState("")

  const showUrgentAlert = urgentInterests.has(interest)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // TODO: wire up to your form backend (e.g. a server action, Formspree, or an API route)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-6 mx-auto">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thanks! Your quote request is in.
        </h3>
        <p className="text-gray-500 font-medium mb-8 max-w-md mx-auto">
          We reply within the hour during business hours. Prefer to talk now?
          Give us a call or send a WhatsApp message.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-brand-orange mb-3">
              <Phone size={20} />
              <span className="font-label font-bold text-sm tracking-widest">
                CALL OR TEXT
              </span>
            </div>
            <a
              href={siteConfig.phoneHref}
              onClick={() => trackPhoneConversion()}
              className="text-xl font-bold text-gray-900 hover:text-brand-orange transition-colors"
            >
              {siteConfig.phone}
            </a>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Hablamos Espa&ntilde;ol
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb959] text-white px-4 py-3 rounded-xl font-bold font-label transition-colors"
            >
              <MessageCircle size={18} />
              WHATSAPP US
            </a>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-brand-orange mb-3">
              <Clock size={20} />
              <span className="font-label font-bold text-sm tracking-widest">
                HOURS
              </span>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-600 font-medium">
              {confirmationHours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-3">
                  <span className="text-gray-900">{entry.day}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form
      id="contact-form"
      aria-label="Contact Form"
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
            Name
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
            Phone &mdash; we&apos;ll call or text you back
          </label>
          <input
            required
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(240) 555-0123"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className="block text-sm font-bold text-gray-900 mb-2">
          Tire size or vehicle
        </label>
        <input
          id="vehicle"
          name="vehicle"
          type="text"
          placeholder="e.g. 205/55R16 or 2018 Honda Civic"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-bold text-gray-900 mb-2">
          I am interested in...
        </label>
        <select
          required
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full bg-white text-gray-900 border border-gray-300 rounded-xl px-4 py-3.5 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all font-semibold"
        >
          <option value="" disabled className="text-gray-500">
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option} className="text-gray-900">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
          Message <span className="font-medium text-gray-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you need..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
          Email <span className="font-medium text-gray-400">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          className={inputClasses}
        />
      </div>

      {showUrgentAlert && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-brand-orange/10 border border-brand-orange rounded-xl p-4"
        >
          <Phone size={20} className="text-brand-orange mt-0.5 flex-shrink-0" />
          <p className="text-sm font-semibold text-gray-900 leading-relaxed">
            Need help right now? Don&apos;t wait for the form &mdash; call us:{" "}
            <a
              href={siteConfig.phoneHref}
              onClick={() => trackPhoneConversion()}
              className="text-brand-orange font-bold hover:underline"
            >
              {siteConfig.phone}
            </a>
            . Mobile service is dispatched by phone.
          </p>
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-bold font-label flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
        >
          {sending ? "SENDING..." : "GET MY QUOTE"}
          <Send size={20} />
        </button>
        <p className="text-sm text-gray-500 font-medium mt-4 leading-relaxed">
          We reply within the hour during business hours. Prefer to talk? Call{" "}
          <a
            href={siteConfig.phoneHref}
            onClick={() => trackPhoneConversion()}
            className="text-brand-orange font-bold hover:underline"
          >
            {siteConfig.phone}
          </a>{" "}
          &mdash; Hablamos Espa&ntilde;ol.
        </p>
      </div>
    </form>
  )
}
