"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState(null);

  const services = [
    {
      id: 1,
      title: "Orthopedic Rehab",
      shortDesc: "Joint pain, fractures, aur surgery ke baad ki recovery.",
      longDesc: "Hum knee replacement, hip surgery, aur ligament tears (ACL/PCL) ke baad muscle strength aur mobility wapas lane mein help karte hain. Isme manual therapy aur personalized exercise plans shaamil hain.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
      icon: "🦴",
    },
    {
      id: 2,
      title: "Neuro Physiotherapy",
      shortDesc: "Stroke, Parkinson's aur nerve injuries ka treatment.",
      longDesc: "Neurological conditions mein balance aur coordination sudharne ke liye hum Neuro-Developmental Treatment (NDT) aur neuro-rehab techniques ka use karte hain taaki patient independent ho sake.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
      icon: "🧠",
    },
    {
      id: 3,
      title: "Sports Injury Clinic",
      shortDesc: "Athletes ke liye fast recovery aur performance boost.",
      longDesc: "Sprains, strains, aur muscle tears ka ilaj advanced physical therapy se kiya jata hai. Hum injury prevention techniques bhi sikhate hain taaki aap field par jaldi aur safely wapas laut sakein.",
      image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=800&auto=format&fit=crop",
      icon: "🏃‍♂️",
    },
    {
      id: 4,
      title: "Back & Neck Care",
      shortDesc: "Slip disc, cervical, aur posture related dard ka ilaj.",
      longDesc: "Modern lifestyle ki wajah se hone wale gardan aur kamar dard ke liye hum spine mobilization aur postural correction exercise ka use karte hain, jo bina dawa ke long-term relief deta hai.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
      icon: "🧘‍♂️",
    },
    {
      id: 5,
      title: "Dry Needling & Cupping",
      shortDesc: "Chronic pain aur muscle tension ke liye advanced therapy.",
      longDesc: "Hum certified techniques use karte hain jo deep tissue pain ko release karti hain. Dry needling trigger points par kaam karti hai, wahi Cupping therapy blood circulation aur recovery ko fast karti hai.",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=800&auto=format&fit=crop",
      icon: "📍",
    },
    {
      id: 6,
      title: "Geriatric Wellness",
      shortDesc: "Elderly logon ke liye mobility aur strength programs.",
      longDesc: "Umar ke saath hone wale arthritis (gathiya) aur balance problems ke liye hamare paas special geriatric care hai, jo buzurgon ko active aur confident rehne mein madad karti hai.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      icon: "👴",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-green-600 font-bold tracking-widest uppercase text-sm">
            Expertise That Matters
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Our Specialist <span className="text-green-600">Services</span>
          </h2>
          <div className="mt-6 h-1.5 w-24 bg-green-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">
            Personalized treatment plans led by Dr. Ruhul Amin Pasha to ensure you regain 
            your strength and lead a pain-free life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div 
              layout
              key={service.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-2xl">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed font-medium">
                  {service.shortDesc}
                </p>

                {/* Animated Detailed Text */}
                <AnimatePresence>
                  {expandedId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-slate-100 text-slate-500 text-sm leading-relaxed italic">
                        {service.longDesc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => toggleExpand(service.id)}
                  className="mt-6 flex items-center gap-2 text-green-600 font-bold text-sm tracking-wide group-hover:underline decoration-2"
                >
                  {expandedId === service.id ? "SHOW LESS ↑" : "LEARN MORE →"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}