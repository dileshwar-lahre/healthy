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
  title: "Healthy Wings Wellness | Advanced Physiotherapy Clinic Bilaspur",
  description: "Experience advanced physiotherapy at Healthy Wings Wellness, Bilaspur. Founded by Ruhul Amin Pasha (BPT), specializing in robotic therapy and pain management.",
};

export default function RootLayout({ children }) {
  
  // 1. Professional Business & Founder Schema (English SEO)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    "name": "Healthy Wings Wellness",
    "url": "https://healthywingswellness.com/",
    "logo": "https://healthywingswellness.com/logo.png",
    "description": "Healthy Wings Wellness is the most advanced physiotherapy clinic in Bilaspur, utilizing high-end robotic machines and specialized manual therapy.",
    "founder": {
      "@type": "Person",
      "name": "Ruhul Amin Pasha",
      "jobTitle": "Founder & Chief Physiotherapist",
      "knowsAbout": "Physiotherapy, Sports Rehab, Robotic Therapy",
      "description": "Ruhul Amin Pasha is a qualified Physiotherapist (BPT) and the founder of Healthy Wings Wellness, dedicated to advanced patient care and clinical growth."
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bilaspur",
      "addressRegion": "Chhattisgarh",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/share/19Kv7xaZQb/",
      "https://www.instagram.com/healthy_wings_physiotherapy?igsh=bHl4a2s0NTh0ZDZ1"
    ]
  };

  // 2. Professional FAQ Schema (English)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the founder of Healthy Wings Wellness?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthy Wings Wellness was founded by Ruhul Amin Pasha, a professional Physiotherapist (BPT) committed to providing advanced healthcare solutions in Bilaspur."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Healthy Wings Wellness unique in Bilaspur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are the first clinic in Bilaspur to integrate high-end robotic machines with expert manual therapy for faster and more effective recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Does Healthy Wings Wellness use advanced medical equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use the latest advanced physiotherapy machines and robotic technology to ensure high-quality treatment for various musculoskeletal conditions."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Business & Founder Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}