import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://healthywingswellness.com"),

  title: {
    default: "Healthy Wings Wellness Physiotherapy - Best Clinic in Bilaspur",
    template: "%s | Healthy Wings Wellness",
  },

  description:
    "Healthy Wings Wellness Physiotherapy Clinic in Bilaspur provides expert treatment for back pain, neck pain, sports injuries and rehabilitation services.",

  keywords: [
    "Physiotherapy in Bilaspur",
    "Best Physiotherapist in Bilaspur Chhattisgarh",
    "Back Pain Treatment Bilaspur",
    "Neck Pain Treatment Bilaspur",
    "Sports Injury Rehabilitation Bilaspur",
    "Pain Relief Clinic Bilaspur",
  ],

  authors: [{ name: "Healthy Wings Wellness" }],

  openGraph: {
    title: "Healthy Wings Wellness Physiotherapy Bilaspur",
    description:
      "Professional physiotherapy clinic for pain relief & rehabilitation in Bilaspur.",
    url: "https://healthywingswellness.com",
    siteName: "Healthy Wings Wellness",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* Local Business Schema for Bilaspur */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Healthy Wings Wellness Physiotherapy",
              url: "https://healthywingswellness.com",
              logo: "https://healthywingswellness.com/favicon.ico",
              telephone: "+91 9770511211",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bilaspur",
                addressRegion: "Chhattisgarh",
                postalCode: "495001",
                addressCountry: "IN",
              },
            }),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}