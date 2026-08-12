import Link from "next/link"
import { Check, MapPin, Phone } from "lucide-react"
import PhoneCallLink from "@/components/phone-call-link"
import { siteConfig } from "@/lib/data"

const bullets = [
  "Tire change or flat assistance on location",
  "Available during shop hours, 7 days a week",
  "Service call from $XX — applied to your service",
  "Dispatched by phone for the fastest response",
]

// 12 covered communities distributed around the radius circle.
const communities = [
  "Edgewater",
  "Mayo",
  "Riva",
  "Selby-on-the-Bay",
  "Beverly Beach",
  "Londontowne",
  "Annapolis",
  "Parole",
  "Hillsmere Shores",
  "Davidsonville",
  "Galesville",
  "Harwood",
]

const whatsappHref = `https://wa.me/12405958547?text=${encodeURIComponent(
  "Hi! I need mobile tire assistance. Here is my location:",
)}`

export default function MobileService() {
  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTAs */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 font-label text-xs font-bold uppercase tracking-widest text-brand-orange mb-6">
              <MapPin size={14} />
              Mobile Tire Assistance
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-balance">
              MOBILE TIRE SERVICE —
              <br />
              <span className="text-brand-orange">WE COME TO YOU.</span>
            </h2>
            <p className="text-lg text-brand-text-muted leading-relaxed mb-8 max-w-lg text-pretty">
              Flat tire at home, work, or on the road? Our mobile tire service covers
              everything within about 15 minutes of our Edgewater shop.
            </p>

            <ul className="flex flex-col gap-4 mb-10">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
                    <Check size={14} className="text-brand-orange" />
                  </span>
                  <span className="font-medium text-brand-text">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneCallLink className="bg-brand-orange hover:bg-brand-orange-hover text-white px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors">
                <Phone size={20} />
                CALL FOR MOBILE SERVICE: {siteConfig.phone}
              </PhoneCallLink>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brand-surface-light hover:border-brand-orange hover:text-brand-orange text-brand-text px-7 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
              >
                Share your location on WhatsApp
              </Link>
            </div>

            <p className="mt-6 text-brand-text-muted">
              Learn how it works, pricing, and coverage on our{" "}
              <Link
                href="/mobile-tire-service-edgewater-md"
                className="font-bold text-brand-orange hover:underline"
              >
                mobile tire service in Edgewater
              </Link>{" "}
              page.
            </p>
          </div>

          {/* Right: stylized radius map */}
          <div>
            <div className="relative aspect-square w-full max-w-lg mx-auto rounded-2xl border border-brand-surface-light bg-brand-surface/40 p-6">
              {/* concentric radius rings */}
              <div className="absolute inset-[8%] rounded-full border border-brand-surface-light/70" />
              <div className="absolute inset-[22%] rounded-full border border-dashed border-brand-orange/40" />
              <div className="absolute inset-[36%] rounded-full border border-brand-orange/70 bg-brand-orange/5" />

              {/* radius label */}
              <span className="absolute left-1/2 top-[9%] -translate-x-1/2 font-label text-xs font-bold uppercase tracking-widest text-brand-orange">
                ~15 min radius
              </span>

              {/* community markers distributed around the circle */}
              {communities.map((name, i) => {
                // start half a step past top-center so no marker collides with the radius label
                const angle =
                  (i / communities.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / 12
                const radius = 38 // percent from center
                const left = 50 + radius * Math.cos(angle)
                const top = 50 + radius * Math.sin(angle)
                const isShop = name === "Edgewater"
                return (
                  <div
                    key={name}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                    style={{ top: `${top}%`, left: `${left}%` }}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isShop ? "bg-brand-orange" : "bg-brand-text-muted"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap font-label text-[10px] font-semibold uppercase tracking-wide ${
                        isShop ? "text-brand-orange" : "text-brand-text-muted"
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                )
              })}

              {/* center pin: the shop */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange shadow-lg shadow-brand-orange/30">
                  <MapPin size={26} className="text-white" fill="currentColor" />
                </div>
                <span className="whitespace-nowrap rounded-full bg-brand-dark px-3 py-1 font-label text-xs font-bold uppercase tracking-wide text-white">
                  175 Mayo Rd
                </span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-brand-text-muted">
              A little farther out? Call — we&apos;ll confirm in one minute.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
