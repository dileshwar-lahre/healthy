"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";

// Swiper styles import karna zaroori hai
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

export default function AboutSection() {
  // --- Dummy Data for Doctor Cards ---
  // Note: 'image' path apke /public folder ke hisaab se change karein.
  const doctorCards = [
    {
      id: 1,
      image: "/images/doctor-ruhul.jpg", // Replace with actual photo path
      title: "Meet Your Expert",
      name: "Dr. Ruhul Amin Pasha",
      description: "Founder & Lead Physiotherapist with 10+ years experience in advanced rehab.",
    },
    {
      id: 2,
      image: "/images/treatment-1.jpg", // Example treatment image
      title: "Our Specialization",
      name: "Orthopedic Rehab",
      description: "Expert care for post-surgery recovery, joint pains, and fracture rehabilitation.",
    },
    {
      id: 3,
      image: "/images/treatment-2.jpg",
      title: "Holistic Wellness",
      name: "Pain Management",
      description: "Using advanced techniques and therapies for long-term relief from chronic pain.",
    },
    {
      id: 4,
      image: "/images/treatment-3.jpg",
      title: "Patient First Care",
      name: "Personalized Sessions",
      description: "Every treatment plan is tailored specifically to your unique recovery goals.",
    },
    {
      id: 5,
      image: "/images/clinic-view.jpg",
      title: "Modern Facility",
      name: "State-of-the-Art Clinic",
      description: "Equipped with the latest technology for effective physiotherapy and wellness.",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 pt-24 pb-24 m-0"> {/* Background slight change for better card contrast */}

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold tracking-widest text-green-600 uppercase">
                About Us
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-extrabold text-black leading-tight">
                HEALTHY WING'S
                <span className="block mt-2 text-gray-800 font-semibold text-3xl md:text-4xl">
                  PHYSIOTHERAPY & HOLISTIC WELLNESS
                </span>
              </h2>
              <div className="mt-6 h-[4px] w-24 bg-green-600 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Led by <span className="font-bold text-black">Dr. Ruhul Amin Pasha</span>, 
              our clinic provides advanced physiotherapy, rehabilitation, and holistic 
              wellness programs focused on pain relief, mobility improvement, and 
              long-term recovery with personalized care.
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

          {/* RIGHT CONTENT - DOCTOR/INFO CARDS SWIPER */}
          <div className="w-full lg:pl-10">
            <Swiper
              // Swiper Configuration
              effect={'cards'} // Premium looking effect
              grabCursor={true} // Shows hand grab cursor
              centeredSlides={true}
              loop={true} // Infinite loop
              slidesPerView={'auto'}
              autoplay={{
                delay: 3000, // 3 seconds delay
                disableOnInteraction: false, // Don't stop autoplay after user swipes
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true, // Cool dynamic dots
              }}
              modules={[Autoplay, Pagination, EffectCards]}
              className="mySwiper w-full max-w-[340px] md:max-w-[400px] h-[500px]"
            >
              {doctorCards.map((card) => (
                <SwiperSlide key={card.id} className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                  {/* Card Content */}
                  <div className="relative w-full h-3/5">
                    {/* Image handling - Using next/image for optimization */}
                    {/* Make sure to add dummy images to /public folder */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">Image Loading...</div>
                    {/* <Image 
                      src={card.image} 
                      alt={card.name} 
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    /> */}
                  </div>
                  
                  <div className="p-6 md:p-8 h-2/5 flex flex-col justify-center bg-white">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">
                      {card.title}
                    </p>
                    <h3 className="text-2xl font-extrabold text-black mb-3">
                      {card.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>

    </section>
  );
}