import type { Metadata } from "next"
import Script from "next/script"
import { Work_Sans, Lexend, Space_Grotesk } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { GA_CONVERSION_ID } from "@/lib/gtag"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "MayoRD Tire Shop in Maryland | New & Used Tires, Tire Repair & Alignment",
  description:
    "Quality used tires, expert service, and unbeatable prices in Edgewater, Maryland. Tire mounting, repair, balancing, TPMS & valves. No appointments needed.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${lexend.variable} ${spaceGrotesk.variable} font-sans bg-brand-dark text-brand-text min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* Google Tag (gtag.js) — Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_CONVERSION_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_CONVERSION_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
