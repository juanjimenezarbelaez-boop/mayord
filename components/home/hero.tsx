import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { images } from "@/lib/data"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden">
      <img
        src={images.homeHero}
        alt="Tire shop interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40 pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            GOOD TIRES.
            <br />
            GREAT PRICES.
            <br />
            <span className="text-brand-orange">REAL SERVICE.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-brand-text mb-10 max-w-2xl font-medium">
            Quality used tires, expert service, and unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tires"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors"
            >
              SHOP USED TIRES
              <ChevronRight size={20} />
            </Link>
            <Link
              href="/services"
              className="border-2 border-brand-text hover:border-brand-orange hover:text-brand-orange text-brand-text px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center transition-colors"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
