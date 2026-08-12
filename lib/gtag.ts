// Google Ads / Google Tag configuration and helpers.
export const GA_CONVERSION_ID = "AW-18349807750"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Fires a Google Ads conversion event for phone-call clicks.
// Safe to call on the client only; no-ops if gtag hasn't loaded.
export function trackPhoneConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: GA_CONVERSION_ID,
    })
  }
}
