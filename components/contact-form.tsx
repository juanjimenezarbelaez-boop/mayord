"use client"

import { useState } from "react"
import { Check, Send } from "lucide-react"

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

const inputClasses =
  "w-full bg-white text-gray-900 placeholder:text-gray-500 border border-gray-300 rounded-xl px-4 py-3.5 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all font-semibold"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mb-6">
          <Check size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h3>
        <p className="text-gray-500 font-medium">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
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
          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
            Email Address
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-bold text-gray-900 mb-2">
          I am interested in...
        </label>
        <select
          required
          id="interest"
          name="interest"
          defaultValue=""
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
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you need..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-xl font-bold font-label flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
      >
        {sending ? "SENDING..." : "SEND MESSAGE"}
        <Send size={20} />
      </button>
    </form>
  )
}
