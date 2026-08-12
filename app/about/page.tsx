import type { Metadata } from "next"
import { images } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us | Mayo RD Tire Shop",
  description:
    "We are a locally owned tire shop dedicated to providing the community with high-quality new & used tires and honest services.",
}

const stats = [
  { value: "1k+", label: "Tires Sold" },
  { value: "100%", label: "Satisfaction" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-gray-50 text-center">
        <img
          src={images.aboutHero}
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-50/90 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            SINCE 2020
          </h4>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-brand-dark">
            ABOUT <span className="text-brand-orange">OUR SHOP</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            We are a locally owned tire shop dedicated to providing the community
            with high-quality new and used tires and honest services.
          </p>
        </div>
      </section>

      {/* Story & mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={images.aboutStory}
                alt="Mechanic showing tires"
                className="w-full rounded-2xl aspect-[4/5] object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                OUR STORY &amp; MISSION
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium mb-10">
                <p>
                  Mayo RD Tire Shop was founded with a simple goal: to provide
                  drivers with an affordable alternative without compromising on
                  safety.
                </p>
                <p>
                  Whether you want brand-new tires from top brands at a
                  competitive price, or carefully inspected used tires that fit a
                  tighter budget, we&apos;ve got you covered. Every used tire we
                  sell is meticulously sourced and inspected &mdash; we never
                  sell a tire we wouldn&apos;t put on our own vehicles.
                </p>
                <p>
                  Customer satisfaction comes first. When you walk into our shop,
                  you can expect transparent pricing, honest advice, and fast,
                  professional service every single time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-4xl font-bold text-brand-orange mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
