import Image from "next/image"
import { ExternalLink, Quote, Star } from "lucide-react"
import { reviews, siteConfig } from "@/lib/data"

export default function ReviewsPreview() {
  const featured = reviews.slice(0, 3)

  return (
    <section className="bg-gray-50 text-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 lg:max-w-sm">
            <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
              WHAT OUR CUSTOMERS SAY
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              EXCELLENT
              <br />
              SERVICE.
              <br />
              TOP RATED.
            </h2>
            <div className="mb-8">
              <div className="mb-4">
                <Image
                  src={siteConfig.yelpLogoUrl}
                  alt="Yelp Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain"
                  draggable={false}
                />
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl font-bold">{siteConfig.rating.value}</span>
                <div className="flex text-[#FF1A1A] gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-[#FF1A1A] rounded flex items-center justify-center p-1"
                    >
                      <Star size={20} className="fill-white text-white" />
                    </div>
                  ))}
                  <div className="bg-gray-200 rounded flex items-center justify-center p-1">
                    <Star size={20} className="fill-white text-white" />
                  </div>
                </div>
              </div>
              <p className="text-gray-500 font-medium">
                {siteConfig.rating.count} reviews
              </p>
            </div>
            <a
              href={siteConfig.yelpUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-lg font-bold font-label items-center justify-center gap-2 transition-colors w-full sm:w-auto"
            >
              READ MORE REVIEWS
              <ExternalLink size={20} />
            </a>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((review) => (
              <div
                key={review.author}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="text-brand-orange mb-6">
                  <Quote size={32} />
                </div>
                <p className="text-gray-700 font-medium text-lg mb-8 flex-1">
                  &quot;{review.quote}&quot;
                </p>
                <div>
                  <p className="font-bold mb-2">&mdash; {review.author}</p>
                  <div className="flex text-brand-orange gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
