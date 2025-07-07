'use client';

import Image from 'next/image';

export default function HeroCarousel() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden font-sans">
      {/* Image container with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/drone-photo-1.jpg"
          alt="Main Banner"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Blue overlay ONLY on image */}
        <div className="absolute inset-0 bg-gray-900 opacity-40" />
      </div>

      {/* Text content stays unaffected */}
      <div className="relative z-10 flex justify-center  h-full w-full text-white text-center p-10">
        <div className="pt-[130px]">
          <h2 className="text-[60px] font-extrabold uppercase tracking-[2.4px] leading-[1.4]">
            Our plots are not just a home<br /> but a smart investment
          </h2>
          <p className="text-[18px] text-[#fcfcfc] mt-[25px]">
            Discover premium plots in prime locations with all the amenities you need for a comfortable life.
          </p>
          <p className="text-[18px] text-[#fcfcfc] mt-[25px]">
            At Prime Lands Realty, we bring your dream home to life. Secure your perfect plot today.
          </p>
        </div>
      </div>
    </div>
  );
}
