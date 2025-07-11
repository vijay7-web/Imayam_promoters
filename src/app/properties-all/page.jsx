'use client';
import Image from 'next/image';
import Link from 'next/link';
import { propertyList } from '../data/allProperties';



export default function CurrentProperties() {
  return (
    <section id="properties" className="">
      <section id="statistics" className="bg-gray-100 py-4">
        <div className="relative w-full h-[30vh] overflow-hidden font-sans">
          <Image
            src={'/drone-photo-1.jpg'}
            alt={'cover-image'}
            width={600}
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
            <h1 className="text-3xl font-semibold tracking-[2.4px] leading-[1.4] text-white uppercase tracking-wider mb-5">
              Properties
            </h1>
            <p className="text-white font-medium text-base">Find our current properties near your city</p>
          </div>
        </div>
      </section>
      <div className='py-10 px-4 md:px-10 bg-blue-50'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyList.map((property, index) => (
            <Link key={index} href={`/property-details/${property.slug}`}>
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={property.archImage}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2">
                    <button className="bg-indigo-900 text-white text-xs font-semibold px-3 py-1 rounded uppercase">
                      Layout Location: {property.location}
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-blue-900 uppercase mb-3">{property.name}</h3>
                  <div className="flex flex-wrap gap-4 font-semibold text-gray-700 mb-2">
                    <span>{property.totalPlots} Plots</span>
                    <span className="text-red-600">{property.soldPlots} Sold Out</span>
                    <span>{property.totalPlots - property.soldPlots} Available</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{property.totalArea} of total property.</p>
                  <p className="text-sm text-gray-700">{property.address}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
