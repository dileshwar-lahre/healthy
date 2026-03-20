"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, ChevronRight, ChevronDown } from "lucide-react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Dropdown ke liye naya state
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // "Our Team" hata diya gaya hai
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Naye pages ke links
  const moreLinks = [
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
  ];

  // ✅ WhatsApp Link
  const whatsappLink =
    "https://wa.me/919770511211?text=Hello%20Healthy%20Wing's%20Physiotherapy,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[9999] transition-all duration-500">

        {/* Background */}
        <div
          className={`absolute inset-0 -z-10 transition-all duration-500 ${
            scrolled
              ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100"
              : "bg-white"
          }`}
        />

        <div className={`transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10">
            <div className="flex justify-between items-center">

              {/* Logo */}
              <a
                href="#home"
                className="relative flex items-center transition-transform hover:scale-105 duration-300"
              >
                <div className="relative w-48 h-12 md:w-60 md:h-16 -mt-1">
                  <Image
                    src="/images/healthywingswellnessphysiotherapy.jpeg"
                    alt="Healthy Wings Wellness Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </a>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center bg-gray-50/70 px-10 py-3 rounded-full border border-gray-200 backdrop-blur-md">
                <ul className="flex items-center space-x-8">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="relative text-[16px] font-bold tracking-wide transition-all duration-300 group text-gray-700 hover:text-black hover:-translate-y-0.5"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-300 w-0 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}

                  {/* MORE Dropdown (Desktop) */}
                  <li className="relative">
                    <button
                      onClick={() => setIsMoreOpen(!isMoreOpen)}
                      className="relative flex items-center gap-1 text-[16px] font-bold tracking-wide transition-all duration-300 text-gray-700 hover:text-black hover:-translate-y-0.5 focus:outline-none"
                    >
                      More
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isMoreOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu List */}
                    <div
                      className={`absolute top-full left-0 mt-4 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 transition-all duration-300 ${
                        isMoreOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      {moreLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Desktop CTA → WhatsApp */}
              <div className="hidden lg:block">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-gray-900 hover:shadow-xl active:scale-95"
                >
                  Get Appointment
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* ✅ Minimal Mobile Icon */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-black hover:opacity-70 transition"
              >
                <FiMenu size={30} />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[360px] bg-white z-[9999] shadow-2xl transform transition-transform duration-500 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 flex flex-col h-full">

          {/* Close Button */}
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-black transition-all duration-300 hover:rotate-90"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-black hover:translate-x-2"
              >
                {link.name}
                <ChevronRight
                  size={24}
                  strokeWidth={2.5}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                />
              </a>
            ))}

            {/* MORE Dropdown (Mobile) */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="group flex items-center justify-between text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-black w-full"
              >
                More
                <ChevronDown
                  size={24}
                  strokeWidth={2.5}
                  className={`transition-transform duration-300 ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Sub-links */}
              <div
                className={`flex flex-col pl-4 overflow-hidden transition-all duration-300 ${
                  isMoreOpen ? "max-h-48 mt-4 space-y-4" : "max-h-0"
                }`}
              >
                {moreLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setIsMoreOpen(false); // Sidebar close hone par ise bhi close kar diya
                    }}
                    className="text-lg font-semibold text-gray-600 hover:text-black transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile WhatsApp Button */}
          <div className="mt-auto pt-8 border-t border-gray-100">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-black text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-gray-900 transition"
            >
              Book Appointment
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;