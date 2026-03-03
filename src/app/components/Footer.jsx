"use client";

import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "919770511211";
  const defaultMessage = encodeURIComponent("Hello! I'm interested in booking a physiotherapy appointment. Found you through Stonenox.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">
              HEALTHY <span className="text-green-500">WING'S</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Bilaspur's leading physiotherapy clinic specializing in advanced recovery, 
              holistic wellness, and personalized patient care under Dr. Ruhul Amin Pasha.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/19Kv7xaZQb/" target="_blank" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/healthy_wings_physiotherapy?igsh=bHl4a2s0NTh0ZDZ1" target="_blank" className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl hover:bg-pink-600 hover:-translate-y-1 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><a href="#home" className="hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Treatments</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-green-500 shrink-0" />
                <p className="text-sm">H2/24 Narmada Nagar Chowk, Nehru Nagar Rd, Bilaspur, CG</p>
              </div>
              <a href="tel:+919770511211" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold">+91 97705 11211</span>
              </a>
              <a href={whatsappUrl} target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold">WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Help</h4>
            <ul className="space-y-4 text-slate-300 text-sm font-medium">
              <li><a href="#" className="hover:text-green-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Powered By */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 <span className="text-slate-300">Healthy Wing's Physiotherapy.</span> All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
            <span>Powered by</span>
            <a 
              href="https://www.stonenox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 flex items-center gap-0.5 transition-colors font-bold"
            >
              www.stonenox.com <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}