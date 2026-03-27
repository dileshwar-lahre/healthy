"use client";

export default function HeroSection() {
  // WhatsApp Configuration
  const phoneNumber = "919770511211"; 
  const message = encodeURIComponent("Hello! I'm interested in booking a physiotherapy appointment. Found you through Stonenox.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/physiotherpy.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <div className="max-w-3xl">
          {/* Text Size remains same as original */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Feel Better Fast
          </h1>

          {/* New Text with same Size & Color */}
          <p className="mt-5 text-lg md:text-xl text-gray-200">
            Best physiotherapy clinic in Bilaspur.
          </p>

          <div className="mt-8">
            {/* WhatsApp Link - Book Now Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg inline-block"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </a>
        </div>

      </div>

      {/* Smooth White Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[80px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L60,90.7C120,85,240,75,360,69.3C480,64,600,64,720,80C840,96,960,128,1080,128C1200,128,1320,96,1380,80L1440,64V160H0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

    </section>
  );
}