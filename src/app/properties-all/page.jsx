'use client';
import Image from 'next/image';
import { propertyList } from '../data/properties';

// const properties = [
//   {
//     title: 'N.N Nagar Pandaaravadai',
//     image: '/nn-nagar/property-single-img1.jpg',
//     location: 'Pandaaravadai',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '67000 Sq. Ft.',
//     address: '51/1, Paapanasam, Pandaravadai, Thanjavur.',
//   },
//   {
//     title: 'P.V Nagar Kumbakonam',
//     image: '/pv-nagar/property-single-img4.jpg',
//     location: 'Kumbakonam',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '176346 Sq. Ft.',
//     address: '113/2A2, Swamimalai, Kumbakonam',
//   },
//   {
//     title: 'Surya Garden Swamimali',
//     image: '/suryagarden/property-single-img3.jpg',
//     location: 'Swamimali',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '31881 Sq. Ft.',
//     address: '51/1, Paapanasam, Pandaravadai, Thanjavur.',
//   },
//   {
//     title: 'Tamizh Nagar Cholanmaligai',
//     image: '/tamizh-nagar/property-single-img1.jpg',
//     location: 'Cholanmaligai',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '104527.4 Sq. Ft.',
//     address: '142/2,3,4,5 Patteeswaram, Kumbakonam',
//   },
//   {
//     title: 'R P Nagar Ranganathapuram',
//     image: '/rp-nagar/property-single-img3.jpg',
//     location: 'Ranganathapuram',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '72000 Sq. Ft.',
//     address: '53/3B,53/2,59/2, Ranganathapuram, Kumbakonam.',
//   },
//   {
//     title: 'PVR Nagar Thirukarugavur',
//     image: '/pvr-nagar/property-single-img5.jpg',
//     location: 'Thirukarugavur',
//     totalPlots: 51,
//     sold: 26,
//     available: 25,
//     area: '67000 Sq. Ft.',
//     address: '458/2A1A, Saliyamangalam, Thirukarugavur',
//   },
// ];

export default function CurrentProperties() {
  return (
    <section id="properties" className="">
      <div className="relative w-full h-[30vh] overflow-hidden font-sans">
        <Image
          src={'/pvr-nagar/property-single-img5.jpg'}
          alt={'cover-image'}
          width={600}
          height={400}
          className="w-full h-auto blur-sm"
        />
        <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
          <h1 className="text-3xl font-normal text-gray-200 uppercase tracking-wider mb-5">
            Properties
          </h1>
        </div>
      </div>
      <div className='py-10 px-4 md:px-10 bg-blue-50'>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-900 uppercase mb-2">Current Properties</h2>
          <p className="text-gray-600 font-medium text-base">Find our current properties near your city</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyList.map((property, index) => (
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
                <h3 className="text-lg font-bold text-blue-900 uppercase mb-3">{property.title}</h3>
                <div className="flex flex-wrap gap-4 font-semibold text-gray-700 mb-2">
                  <span>{property.totalPlots} Plots</span>
                  <span className="text-red-600">{property.soldPlots} Sold Out</span>
                  <span>{property.availablePlots} Available</span>
                </div>
                <p className="text-sm text-gray-700 mb-1">{property.totalArea} of total property.</p>
                <p className="text-sm text-gray-700">{property.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
