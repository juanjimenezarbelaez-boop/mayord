import type { Metadata } from "next"
import {
  Crosshair,
  Disc,
  Settings,
  Shield,
  Star,
  Tag,
  Wrench,
} from "lucide-react"
import { images } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services | Mayo RD Tire Shop",
  description:
    "Tire mounting, repair, and balancing in Edgewater, Maryland. Expert technicians, quality equipment, affordable prices.",
}

const highlights = [
  {
    icon: Shield,
    title: "EXPERT TECHNICIANS",
    description: "Skilled service you can trust.",
  },
  {
    icon: Settings,
    title: "QUALITY EQUIPMENT",
    description: "Precision service for a smooth ride.",
  },
  {
    icon: Tag,
    title: "AFFORDABLE PRICES",
    description: "Top-notch service that fits your budget.",
  },
]

const services = [
  {
    icon: Disc,
    title: "TIRE",
    accent: "MOUNTING",
    description: "Professional mounting\ndone right the first time.",
    image: images.serviceMounting,
  },
  {
    icon: Wrench,
    title: "TIRE",
    accent: "REPAIR",
    description: "Punctures, leaks, and more\n- we've got you covered.",
    image: images.serviceRepair,
  },
  {
    icon: Crosshair,
    title: "TIRE",
    accent: "BALANCING",
    description: "Smooth ride, better handling,\nand longer tire life.",
    image: images.serviceBalancing,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 overflow-hidden bg-brand-dark">
        <img
          src={images.servicesHero}
          alt="Mechanic shop exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 text-white uppercase leading-[0.9]">
              MOUNTED.
              <br />
              <span className="text-brand-orange">REPAIRED.</span>
              <br />
              BALANCED.
            </h1>
            <div className="mt-8 inline-block">
              <h2 className="text-3xl sm:text-4xl text-white font-bold bg-brand-orange px-4 py-2 italic uppercase">
                WE KEEP YOU ROLLING.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-brand-dark border-y border-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide leading-none">
                    {item.title}
                  </h3>
                  <p className="text-brand-text-muted mt-2 font-medium text-lg leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service rows */}
      <section className="bg-brand-dark">
        {services.map((service) => (
          <div
            key={service.accent}
            className="flex flex-col md:flex-row border-b border-brand-surface min-h-[300px]"
          >
            <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-start md:justify-end">
              <div className="flex items-center gap-8 max-w-lg w-full">
                <div className="w-24 h-24 rounded-full border border-brand-orange flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <service.icon size={48} strokeWidth={1} />
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase leading-[1.1] mb-2 whitespace-pre-line">
                    {service.title}
                    {"\n"}
                    <span className="text-brand-orange">{service.accent}</span>
                  </h2>
                  <p className="text-brand-text-muted text-lg tracking-wide whitespace-pre-line font-medium leading-snug">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 min-h-[250px]">
              <img
                src={service.image}
                alt={`${service.title} ${service.accent}`}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent pointer-events-none md:block hidden z-0" />
            </div>
          </div>
        ))}
      </section>

      {/* CTA banner */}
      <section className="bg-black py-12 md:py-16 border-t-[6px] border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic leading-none mb-2 text-white">
                DRIVEN BY <span className="text-brand-orange">QUALITY.</span>
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic leading-none text-white">
                FOCUSED ON <span className="text-brand-orange">YOU.</span>
              </h2>
            </div>
            <div className="bg-brand-dark border border-brand-surface p-6 md:p-8 rounded-2xl flex flex-col items-center max-w-sm text-center">
              <div className="flex text-brand-orange mb-3">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={32} className="fill-current" />
                ))}
              </div>
              <p className="text-white font-bold text-2xl uppercase tracking-wide">
                HIGHLY RATED
                <br />
                BY OUR
                <br />
                <span className="text-brand-orange">CUSTOMERS!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
