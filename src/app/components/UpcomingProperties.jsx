'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { upcomingProperties } from '../data/upcomingProperties'; // Adjust path

export default function UpcomingProperties() {
  return (
   <section id="upcoming-properties" className="py-20 px-4 bg-yellow-50">
  <div className="text-center mb-12">
        <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
      Upcoming Properties
    </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-medium">
      Exciting projects launching soon near you
    </p>
  </div>

  <div className="flex justify-center px-2 sm:px-4">
    {upcomingProperties.slice(0, 1).map((property, i) => (
      <Link
        key={i}
        href={`/upcoming-properties-details/${property.slug}`}
        className="w-full max-w-3xl group"
      >
        <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl border-2 border-orange-300 border-dashed">
          {/* Image */}
          <div className="relative w-full h-60 sm:h-82 md:h-96">
            <Image
              src={property.archImage}
              alt={property.name}
              width={1000}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg shadow z-10 tracking-wide">
              Coming Soon
            </div>
          </div>

          {/* Details */}
          <div className="p-4 sm:p-5 bg-white space-y-3 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-600 uppercase tracking-wide">
              {property.name}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-2 text-gray-700 text-sm sm:text-base font-medium break-words px-2">
              <MapPinIcon className="w-5 h-5 text-yellow-600 shrink-0" />
              <span className="text-center">{property.address}</span>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

  );
}
