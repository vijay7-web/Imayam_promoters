'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinIcon,
  BuildingOffice2Icon,
  Squares2X2Icon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { propertyList } from '../data/properties'; // <- adjust path as needed

export default function CurrentProperties() {
  return (
    <section id="properties" className="py-20 px-4 md:px-10 bg-orange-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
          Current Properties
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-medium">
          Find our current properties near your city
        </p>
      </div>

      <div className="w-[85vw] mx-auto px-2 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {propertyList.map((property, i) => (
            <Link key={i} href={`/properties/${property.slug}`}>
                <div className="flex flex-col h-full cursor-pointer bg-white shadow-md hover:shadow-lg border-b-4 border-transparent hover:border-orange-500 transition-all duration-300">
                <div className="relative h-56 w-full">
                  <Image
                    src={property.archImage}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute top-3 left-3 text-orange-500 bg-white text-xs font-semibold py-1 px-3 uppercase tracking-wide">
                    {property.location}
                  </div> */}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-orange-500 uppercase tracking-wide">
                    {property.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
                    <div className="flex items-center gap-2">
                      <Squares2X2Icon className="w-5 h-5 text-orange-500" />
                      {property.totalPlots} Plots
                    </div>
                    <div className="flex items-center gap-2">
                      {/* <span className="w-5 h-5 bg-red-500 rounded-full" /> */}
                      <Squares2X2Icon className="w-5 h-5 text-green-700" />
                      {property.soldPlots} Sold
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckBadgeIcon className="w-5 h-5 text-green-600" />
                      {property.availablePlots} Available
                    </div>
                    <div className="flex items-center gap-2">
                      <BuildingOffice2Icon className="w-5 h-5 text-orange-500" />
                      {property.totalArea}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <MapPinIcon className="w-5 h-5 text-orange-500 " />
                    {property.address}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
