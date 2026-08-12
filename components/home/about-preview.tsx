import Image from "next/image"
import { CircleCheck } from "lucide-react"
import { images } from "@/lib/data"

const highlights = [
  "Family-owned & operated by the Hagans family",
  "New tires from top brands",
  "Carefully inspected used tires",
  "Fast, reliable and friendly service",
  "Honest recommendations",
  "Proudly serving Maryland for years",
]

export default function AboutPreview() {
  return (
    <section className="bg-brand-dark py-24 border-t border-brand-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
              ABOUT MAYORD
            </h4>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              DRIVEN BY
              <br />
              <span className="text-brand-orange">QUALITY</span>.
              <br />
              FOCUSED ON <span className="text-brand-orange">YOU</span>.
            </h2>
            <p className="text-lg text-brand-text-muted mb-3 max-w-lg leading-relaxed">
              Mayo RD Tire Shop is a trusted local business in Maryland known for
              honest work and outstanding customer service. Our bright orange shop
              is more than just a place to fix tires&mdash;it&apos;s a place where
              our community comes first.
            </p>
            <p className="text-sm font-label font-bold tracking-wider text-brand-orange mb-10">
              Proudly Afro-American &amp; Latino owned
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CircleCheck size={24} className="text-brand-orange flex-shrink-0" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[600px] h-[500px] lg:h-full lg:absolute lg:-right-32">
              <Image
                src={images.homeAbout}
                alt="Tire close up"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center rounded-2xl lg:rounded-none"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
