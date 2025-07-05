'use client';
import Image from 'next/image';

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
    <section id="properties" className="py-10 px-4 md:px-10 bg-blue-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-900 uppercase mb-2">Current Properties</h2>
        <p className="text-gray-600 font-medium text-base">Find our current properties near your city</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200"
          >
            <div className="relative">
              <Image
                src={property.image}
                alt={property.title}
                width={600}
                height={400}
                className="w-full h-auto"
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
                <span className="text-red-600">{property.sold} Sold Out</span>
                <span>{property.available} Available</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">{property.area} of total property.</p>
              <p className="text-sm text-gray-700">{property.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
