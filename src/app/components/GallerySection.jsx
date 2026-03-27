"use client";
import { Maximize2 } from "lucide-react";

export default function GallerySection() {
  const images = [
    { id: 1, src: "/images/6185914497785072796.jpg" },
    { id: 2, src: "/images/6185914497785072797.jpg" },
    { id: 3, src: "/images/6185914497785072798.jpg" },
    { id: 4, src: "/images/6185914497785072801.jpg" },
  ];

  return (
    <section id="gallery" className="bg-white py-10 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Simple Clean Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Gallery<span className="text-green-600">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-green-600 mt-2 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        {/* Phone: grid-cols-1 | Tablet: sm:grid-cols-2 | Laptop: lg:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div 
              key={img.id}
              className={`group relative rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700 
                ${index % 2 !== 0 ? "lg:translate-y-8" : "lg:-translate-y-4"}`}
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt="Clinic Gallery"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Simple Zoom Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Space adjustment for next section */}
        <div className="mt-16 border-b border-slate-50"></div>
      </div>
    </section>
  );
}