import Link from "next/link"
import {
  AlignEndHorizontal,
  ChevronRight,
  Gauge,
  PenTool,
  Settings,
  ShoppingBag,
} from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: ["USED TIRE", "SALES"],
    description: "High quality used tires at the best prices.",
  },
  {
    icon: Settings,
    title: ["TIRE", "MOUNTING"],
    description: "Professional mounting service.",
  },
  {
    icon: PenTool,
    title: ["TIRE", "REPAIR"],
    description: "Puncture repair you can trust.",
  },
  {
    icon: AlignEndHorizontal,
    title: ["TIRE", "BALANCING"],
    description: "Smooth ride, better performance.",
  },
  {
    icon: Gauge,
    title: ["TPMS &", "VALVES"],
    description: "We install and service TPMS and valves.",
  },
]

export default function ServicesPreview() {
  return (
    <section className="bg-white text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
              OUR SERVICES
            </h4>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              WE KEEP YOU <br />
              <span className="text-brand-orange">ROLLING</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mb-0">
              From mounting to repairs, we&apos;ve got everything you need to stay
              safe on the road.
            </p>
          </div>
          <div>
            <Link
              href="/services"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label flex items-center justify-center gap-2 transition-colors lg:mb-4"
            >
              VIEW ALL SERVICES
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.title.join(" ")}
              className="bg-white border border-gray-100 hover:border-brand-orange/30 rounded-2xl p-8 text-center shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6 group-hover:bg-brand-orange/10 transition-colors">
                <service.icon
                  size={28}
                  className="text-gray-900 group-hover:text-brand-orange transition-colors"
                />
              </div>
              <h3 className="font-label font-bold text-base tracking-widest mb-4">
                {service.title[0]}
                <br />
                {service.title[1]}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
