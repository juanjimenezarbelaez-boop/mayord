"use client"

import useSWR from "swr"
import Image from "next/image"
import { ExternalLink, Quote, Star } from "lucide-react"
import { reviews as staticReviews, siteConfig } from "@/lib/data"
import type { NormalizedReview, ReviewsResponse } from "@/app/api/reviews/route"

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to load reviews")
    return res.json() as Promise<ReviewsResponse>
  })

// Static fallback derived from the bundled reviews so the section is never empty.
const fallback: ReviewsResponse = {
  averageRating: Number(siteConfig.rating.value),
  totalCount: siteConfig.rating.count,
  reviews: staticReviews.map((r, i) => ({
    id: `static-${i}`,
    author: r.author,
    quote: r.quote,
    rating: 5,
    source: "google",
  })),
  sources: { google: false, yelp: false },
}

function RatingStars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < Math.round(rating)
        return (
          <div
            key={i}
            className={`rounded flex items-center justify-center p-1 ${
              filled ? "bg-[#FF1A1A]" : "bg-gray-200"
            }`}
          >
            <Star size={size} className="fill-white text-white" />
          </div>
        )
      })}
    </div>
  )
}

function ReviewCard({ review }: { review: NormalizedReview }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
      <div className="text-brand-orange mb-6">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 font-medium text-lg mb-8 flex-1 line-clamp-6 whitespace-pre-line">
        &quot;{review.quote}&quot;
      </p>
      <div>
        <p className="font-bold mb-2">&mdash; {review.author}</p>
        <div className="flex text-brand-orange gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.round(review.rating) ? "fill-current" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function CardSkeleton() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col animate-pulse">
      <div className="h-8 w-8 bg-gray-200 rounded mb-6" />
      <div className="space-y-3 flex-1 mb-8">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-11/12" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-32 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-24" />
      </div>
    </div>
  )
}

export default function ReviewsPreview() {
  const { data, isLoading } = useSWR<ReviewsResponse>("/api/reviews", fetcher, {
    fallbackData: fallback,
    revalidateOnFocus: false,
    // Silent error handling: keep showing fallback data, never surface errors.
    onError: () => {},
    shouldRetryOnError: false,
  })

  // Prefer live data with reviews; otherwise gracefully use the static fallback.
  const source = data && data.reviews.length > 0 ? data : fallback
  const averageRating = source.averageRating || fallback.averageRating
  const totalCount = source.totalCount || fallback.totalCount
  const featured = source.reviews.slice(0, 3)

  const showSkeleton = isLoading && (!data || data.reviews.length === 0)

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
                {showSkeleton ? (
                  <>
                    <div className="h-12 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-bold">
                      {averageRating.toFixed(1)}
                    </span>
                    <RatingStars rating={averageRating} />
                  </>
                )}
              </div>
              <p className="text-gray-500 font-medium">
                {showSkeleton ? (
                  <span className="inline-block h-4 w-24 bg-gray-200 rounded animate-pulse align-middle" />
                ) : (
                  `${totalCount} reviews`
                )}
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
            {showSkeleton
              ? [0, 1, 2].map((i) => <CardSkeleton key={i} />)
              : featured.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
          </div>
        </div>
      </div>
    </section>
  )
}
