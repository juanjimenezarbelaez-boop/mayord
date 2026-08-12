import type { Metadata } from "next"
import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { images, reviews, siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Customer Reviews | Mayo RD Tire Shop",
  description:
    "See what our community has to say about our fast service, honest pricing, and high-quality tires.",
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden bg-brand-orange text-center">
        <Image
          src={images.reviewsHero}
          alt="Reviews background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-orange/80 pointer-events-none z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
            CUSTOMER <span className="text-brand-dark">REVIEWS</span>
          </h1>
          <div className="flex justify-center items-center gap-4 text-white mb-8">
            <span className="text-5xl font-bold">{siteConfig.rating.value}</span>
            <div className="flex text-brand-dark gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={32} className="fill-current" />
              ))}
            </div>
          </div>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto font-medium">
            See what our community has to say about our fast service, honest
            pricing, and high-quality tires.
          </p>
        </div>
      </section>

      {/* Review grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="text-brand-orange mb-6">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 text-lg mb-8 flex-grow font-medium whitespace-pre-line">
                  &quot;{review.quote}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">
                    {review.author}
                  </h4>
                  <div className="flex text-brand-orange mt-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={siteConfig.yelpUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-[#FF1A1A] px-8 py-4 rounded-lg transition-colors font-bold text-gray-900"
            >
              <Image
                src={siteConfig.yelpLogoUrl}
                alt="Yelp"
                width={80}
                height={32}
                className="h-8 w-auto object-contain"
              />
              READ ALL REVIEWS ON YELP
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
