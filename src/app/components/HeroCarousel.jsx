'use client';

import Image from 'next/image';

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden font-sans">
      {/* Image container with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/drone-photo-1.jpg"
          alt="Main Banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-40" />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex justify-center items-center h-full w-full text-white text-center px-4 sm:px-6 lg:px-10">
        <div className="pt-[80px] md:pt-[130px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-snug md:leading-[1.4]">
            Our plots are not just a home<br className="hidden sm:block" /> but a smart investment
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-[#fcfcfc]">
            Discover premium plots in prime locations with all the amenities you need for a comfortable life.
          </p>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-[#fcfcfc]">
            At Prime Lands Realty, we bring your dream home to life. Secure your perfect plot today.
          </p>
        </div>
      </div>
    </div>
  );
}
