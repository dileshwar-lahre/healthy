"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";

export default function ContactSection() {
  // WhatsApp Configuration - Number with Country Code (91)
  const whatsappNumber = "919202511211";
  const defaultMessage = encodeURIComponent("Hello! I'm interested in booking a physiotherapy appointment. Found you through Stonenox.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Direct Call",
      details: ["+91 92025 11211", "+91 77524 42111"],
      link: "tel:+919202511211",
      bgColor: "bg-blue-50",
      hoverBorder: "hover:border-blue-300",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp Chat",
      details: ["Click to Book Appointment", "+91 92025 11211"],
      link: whatsappUrl, // Automatic Message Link
      bgColor: "bg-green-50",
      hoverBorder: "hover:border-green-400",
    },
    {
      icon: <Mail className="w-6 h-6 text-red-600" />,
      title: "Email Us",
      details: ["healthywingsbsp@gmail.com"],
      link: "mailto:healthywingsbsp@gmail.com",
      bgColor: "bg-red-50",
      hoverBorder: "hover:border-red-200",
    },
  ];

  return (
    <section id="contact" className="bg-white py-24 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="mb-16 text-center lg:text-left">
          <p className="text-green-600 font-bold tracking-widest uppercase text-sm">
            Contact & Support
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
            Let's Start Your <span className="text-green-600">Recovery</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <a 
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={index} 
                className={`group p-6 rounded-[2rem] ${item.bgColor} border border-transparent ${item.hoverBorder} transition-all duration-300 shadow-sm hover:shadow-xl`}
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 text-lg mb-0.5">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-slate-600 text-sm font-semibold">{detail}</p>
                    ))}
                  </div>
                  <div className="bg-white/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </a>
            ))}

            {/* Address Card (Non-Clickable for Clarity) */}
            <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-5">
              <div className="p-4 bg-white rounded-2xl shadow-sm">
                <MapPin className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Clinic Address</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  H2/24 Narmada Nagar Chowk, Nehru Nagar Rd, Bilaspur, CG 495001
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="lg:col-span-7 min-h-[500px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.1234567890!2d82.123456789!3d22.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzM0LjQiTiA4MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            
            {/* Hours Badge */}
            <div className="absolute bottom-8 right-8 bg-slate-900 text-white p-5 rounded-[2rem] shadow-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Open Hours</p>
                  <p className="text-sm font-bold">Mon - Sat: 10AM - 8PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}