'use client';

import { useEffect, useState } from 'react';

const slides = [
  { id: 1, image: '/banner-background.jpg' },
  { id: 2, image: '/tamizh-nagar/property-single-img1.jpg' },
  { id: 3, image: '/rp-nagar/property-single-img3.jpg' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
        <h1 className="text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-5">
          Our plots are not just a home but a smart investment
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Discover premium plots in prime locations with all the amenities you need for a comfortable life.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-2">
          At Prime Lands Realty, we bring your dream home to life. Secure your perfect plot today.
        </p>
      </div>
    </div>
  );
}
