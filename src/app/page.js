"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection"; // <-- Naya component import kiya
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section id="home" className="scroll-mt-28">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-28">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-28">
        <ServicesSection />
      </section>

      {/* Gallery Section - Contact ke upar setup kar diya */}
      <section id="gallery" className="scroll-mt-28">
        <GallerySection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-28">
        <ContactSection />
      </section>

    </main>
  );
}