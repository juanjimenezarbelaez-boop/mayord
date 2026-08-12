import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import ServicesPreview from "@/components/home/services-preview"
import TireSizes from "@/components/home/tire-sizes"
import AboutPreview from "@/components/home/about-preview"
import ReviewsPreview from "@/components/home/reviews-preview"
import Gallery from "@/components/home/gallery"
import LocationHours from "@/components/home/location-hours"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <TireSizes />
      <AboutPreview />
      <ReviewsPreview />
      <Gallery />
      <LocationHours />
    </>
  )
}
