'use client';

import Image from 'next/image';
import {
  MapPinIcon,
  BuildingOffice2Icon,
  Squares2X2Icon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const properties = [
  {
    title: 'N.N Nagar Pandaaravadai',
    image: '/nn-nagar/property-single-img1.jpg',
    location: 'Pandaaravadai',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '67000 Sq. Ft.',
    address: '51/1, Paapanasam, Pandaravadai, Thanjavur.',
  },
  {
    title: 'P.V Nagar Kumbakonam',
    image: '/pv-nagar/property-single-img4.jpg',
    location: 'Kumbakonam',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '176346 Sq. Ft.',
    address: '113/2A2, Swamimalai, Kumbakonam',
  },
  {
    title: 'Surya Garden Swamimali',
    image: '/suryagarden/property-single-img3.jpg',
    location: 'Swamimali',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '31881 Sq. Ft.',
    address: '51/1, Paapanasam, Pandaravadai, Thanjavur.',
  },
  {
    title: 'Tamizh Nagar Cholanmaligai',
    image: '/tamizh-nagar/property-single-img1.jpg',
    location: 'Cholanmaligai',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '104527.4 Sq. Ft.',
    address: '142/2,3,4,5 Patteeswaram, Kumbakonam',
  },
  {
    title: 'R P Nagar Ranganathapuram',
    image: '/rp-nagar/property-single-img3.jpg',
    location: 'Ranganathapuram',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '72000 Sq. Ft.',
    address: '53/3B,53/2,59/2, Ranganathapuram, Kumbakonam.',
  },
  {
    title: 'PVR Nagar Thirukarugavur',
    image: '/pvr-nagar/property-single-img5.jpg',
    location: 'Thirukarugavur',
    totalPlots: 51,
    sold: 26,
    available: 25,
    area: '67000 Sq. Ft.',
    address: '458/2A1A, Saliyamangalam, Thirukarugavur',
  },
];

export default function CurrentProperties() {
  return (
    <section id="properties" className="py-20 px-4 md:px-10 bg-orange-50">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
      Current Properties
    </h2>
    <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto font-medium">
      Discover our premium property plots across Tamil Nadu
    </p>
  </div>

  {/* Centered and spaced container */}
  <div className="w-[80vw] mx-auto px-2 sm:px-6 lg:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {properties.map((property, i) => (
        <div
          key={i}
          className="bg-white shadow-md hover:shadow-lg border-b-4 border-transparent hover:border-orange-500 transition-all duration-300"
        >
          <div className="relative h-56 w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 text-orange-500 bg-white text-xs font-semibold py-1 px-3 uppercase tracking-wide">
              {property.location}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-orange-500 uppercase tracking-wide">
              {property.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 font-medium">
              <div className="flex items-center gap-2">
                <Squares2X2Icon className="w-5 h-5 text-orange-500" />
                {property.totalPlots} Plots
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 bg-red-500 rounded-full" />
                {property.sold} Sold
              </div>
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-green-600" />
                {property.available} Available
              </div>
              <div className="flex items-center gap-2">
                <BuildingOffice2Icon className="w-5 h-5 text-orange-500" />
                {property.area}
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 mt-2">
              <MapPinIcon className="w-5 h-5 text-orange-500 mt-1" />
              {property.address}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
