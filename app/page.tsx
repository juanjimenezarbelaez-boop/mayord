import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import EmergencyBanner from "@/components/home/emergency-banner"
import ServicesPreview from "@/components/home/services-preview"
import MobileService from "@/components/home/mobile-service"
import TireSizes from "@/components/home/tire-sizes"
import AboutPreview from "@/components/home/about-preview"
import ReviewsPreview from "@/components/home/reviews-preview"
import Gallery from "@/components/home/gallery"
import LocationHours from "@/components/home/location-hours"
import MobileActionBar from "@/components/mobile-action-bar"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <EmergencyBanner />
      <ServicesPreview />
      <MobileService />
      <TireSizes />
      <AboutPreview />
      <ReviewsPreview />
      <Gallery />
      <LocationHours />
      <MobileActionBar />
    </>
  )
}
