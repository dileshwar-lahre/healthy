"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  // State to manage which doctor's description is expanded
  const [expandedDocs, setExpandedDocs] = useState({});

  const toggleExpand = (id) => {
    setExpandedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // --- Doctor Profiles Data ---
  const doctors = [
    {
      id: 1,
      image: "/images/PHYSIOTHERAPY_in_bilaspur1.jpg",
      title: "Founder & Lead Physiotherapist",
      name: "Dr. Ruhul Amin Pasha",
      description: "Led by Dr. Ruhul Amin Pasha, our clinic provides advanced physiotherapy, rehabilitation, and holistic wellness programs focused on pain relief, mobility improvement, and long-term recovery with personalized care.",
      qualifications: ""
    },
    {
      id: 2,
      image: "/images/PHYSIOTHERAPY_in-bilaspur.jpg",
      title: "Clinical & Therapeutic Dietitian",
      name: "Dt. Hadia Taufiq",
      qualifications: "BSc (Hons.) in Clinical Nutrition | MSc Food & Nutrition | Fellowship in Clinical Nutrition – CIMS, Bilaspur",
      description: "Dt. Hadia Taufiq is a qualified Clinical Dietitian specialising in Medical Nutrition Therapy (MNT) for a wide range of health conditions. She has clinical experience in managing Diabetes, Cardiac, Renal, and Liver disorders, along with nutrition support for infectious diseases such as Tuberculosis and Pneumonia. She is also experienced in Enteral & Parenteral Nutrition, Malnutrition management, Weight management, and PCOS nutrition, focusing on evidence-based and personalised dietary plans to support faster recovery and long-term health."
    }
  ];

  return (
    <section id="about" className="bg-gray-50 pt-24 pb-24 m-0 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT (About Us Details) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div>
              <p className="text-sm font-bold tracking-widest text-green-600 uppercase">
                About Us
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-black leading-tight">
                HEALTHY WING'S
                <span className="block mt-2 text-gray-800 font-semibold text-2xl md:text-3xl">
                  PHYSIOTHERAPY & HOLISTIC WELLNESS
                </span>
              </h2>
              <div className="mt-6 h-[4px] w-24 bg-green-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Our clinic provides advanced physiotherapy, rehabilitation, and holistic 
              wellness programs focused on pain relief, mobility improvement, and 
              long-term recovery with personalized care. Meet our expert team dedicated 
              to your health.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-lg font-bold text-black mb-3">
                Visit Our Clinic
              </p>
              <p className="text-gray-600 leading-relaxed">
                H2/24 Narmada Nagar Chowk,<br />
                Nehru Nagar Rd, Beside Shiv Mandir,<br />
                Bilaspur, Chhattisgarh – 495001
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-full shadow-inner border border-gray-100 w-fit">
              <div className="flex gap-1 text-yellow-400 text-xl">
                ★★★★★
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  4.9 <span className="text-base font-medium text-gray-500">/ 5</span>
                </p>
                <p className="text-sm text-gray-500">
                  Rated by 390+ Patients on Google
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - DOCTORS LIST */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {doctors.map((doctor) => {
              const isExpanded = expandedDocs[doctor.id];
              // 120 characters ke baad description ko cut kar denge agar expanded nahi hai
              const isLongText = doctor.description.length > 120;
              const shortText = isLongText ? doctor.description.substring(0, 120) + "..." : doctor.description;

              return (
                <div 
                  key={doctor.id} 
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Doctor Image */}
                  <div className="relative w-full md:w-2/5 h-[300px] md:h-auto shrink-0">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400 z-0">
                      Loading Image...
                    </div>
                    <Image 
                      src={doctor.image} 
                      alt={doctor.name} 
                      fill
                      // object-top add kiya taaki photo upar se dikhe (focus on face)
                      className="object-cover object-top relative z-10" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  
                  {/* Doctor Details */}
                  <div className="p-6 md:p-8 flex flex-col justify-center w-full">
                    <p className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                      {doctor.title}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
                      {doctor.name}
                    </h3>
                    
                    {/* Qualifications */}
                    {doctor.qualifications && (
                      <p className="text-sm text-gray-500 font-medium mb-4 italic border-l-2 border-green-500 pl-3">
                        {doctor.qualifications}
                      </p>
                    )}

                    <div className="text-gray-600 text-base leading-relaxed space-y-3">
                      {isExpanded ? (
                        // Pura text line by line
                        doctor.description.split('. ').map((sentence, index, array) => (
                          sentence ? <p key={index}>{sentence}{(index !== array.length - 1) ? '.' : ''}</p> : null
                        ))
                      ) : (
                        // Short text
                        <p>{shortText}</p>
                      )}

                      {/* Read More / Show Less Button */}
                      {isLongText && (
                        <button 
                          onClick={() => toggleExpand(doctor.id)}
                          className="text-green-600 font-semibold text-sm hover:underline mt-2 focus:outline-none"
                        >
                          {isExpanded ? "Show Less" : "Read More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}