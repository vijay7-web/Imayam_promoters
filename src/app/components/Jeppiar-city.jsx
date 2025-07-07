import React from 'react';
import Image from 'next/image';

const PropertyDetails = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <section id="statistics" className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            <a href="/" className="text-blue-600 hover:underline">
              <span>Home</span>
            </a>{' '}
            |{' '}
            <a href="#" className="text-blue-600 hover:underline">
              <span>Property Details</span>
            </a>
          </p>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-orange-500 uppercase">Jeppiar city - Kumbakonam</h2>
            <p className="mt-2 text-gray-600 flex flex-wrap justify-center gap-4">
              <span><i className="fa fa-th-large text-gray-800"></i> 64 Total Plots</span>
              <span><i className="fa fa-th-large text-red-600"></i> 64 Plot Sold Out</span>
              <span><i className="fa fa-th-large text-green-600"></i> 0 Plot Available</span>
            </p>
            <h3 className="mt-2 text-lg font-medium">104527.4 Sq. Ft.</h3>
            <p className="mt-1 text-gray-700"><i className="fa fa-map-marker text-green-600"></i> 284/5, Chettymandapan Bypass, Opp to KR Gas Station, Kumbakonam – 612001</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((img) => (
            <div key={img} className="shadow rounded overflow-hidden">
              <Image
                src={`/assets/images/nn-nagar/property-single-img${img}.jpg`}
                alt={`property-${img}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Property Description</h2>
          <div className="space-y-4 text-gray-700">
            <p>Tamizh Nagar is located between Kumbakonam and Thanjavur main road, adjacent to Patteeswaram temple...</p>
            <p>All the plots are DTCP approved...</p>
            <p>The key highlights of the properties are uninterrupted power supply, 30 ft Tar road...</p>
            <p>We have dedicated Customer Relationship Managers...</p>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Address</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">Survey_No:</td><td className='text-gray-500 text-lg font-bold'>142/2,3,4,5</td><td className="text-lg font-semibold text-gray-700">Taluk:</td><td className='text-gray-500 text-lg font-bold'>Kumbakonam</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">Panchayat:</td><td className='text-gray-500 text-lg font-bold'>Cholanmaligai</td><td className="text-lg font-semibold text-gray-700">District:</td><td className='text-gray-500 text-lg font-bold'>Thanjore</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">State:</td><td className='text-gray-500 text-lg font-bold'>Tamilnadu</td><td className="text-lg font-semibold text-gray-700">PINCode:</td><td className='text-gray-500 text-lg font-bold'>612703</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Details</h3>
            <table className="w-full text-left">
              <tbody>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">Total Property Area:</td><td className='text-gray-500 text-lg font-bold'>104527.4 Sq. Ft.</td><td className="text-lg font-semibold text-gray-700">Total No. of plots:</td><td className='text-gray-500 text-lg font-bold'>64</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">No. of Plots Sold:</td><td className='text-gray-500 text-lg font-bold'>64</td><td className="text-lg font-semibold text-gray-700">No. of Plots Available:</td><td className='text-gray-500 text-lg font-bold'>0</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">Road Type:</td><td className='text-gray-500 text-lg font-bold'>30 Ft. Tar Road</td><td className="text-lg font-semibold text-gray-700">Fencing Type:</td><td className='text-gray-500 text-lg font-bold'>Fully Compounded</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">Land Mark:</td><td className='text-gray-500 text-lg font-bold'>Opposite to GRK School</td><td className="text-lg font-semibold text-gray-700">Bus Stop:</td><td className='text-gray-500 text-lg font-bold'>Cholanmaligai stop</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">30 X 50:</td><td className='text-gray-500 text-lg font-bold'>20 Plots</td><td className="text-lg font-semibold text-gray-700">30 X 40:</td><td className='text-gray-500 text-lg font-bold'>25 Plots</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-700">15 X 35:</td><td className='text-gray-500 text-lg font-bold'>19 Plots</td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Facilities</h3>
            <table className="w-full text-left mb-4">
              <tbody>
                <tr><td className="p-2 text-lg font-semibold text-gray-500">Main Road</td><td className='text-lg font-semibold text-gray-500'>Residential Area</td><td className='text-lg font-semibold text-gray-500'>Fencing</td><td className='text-lg font-semibold text-gray-500'>Tar Road</td></tr>
                <tr><td className="p-2 text-lg font-semibold text-gray-500">Ground Water</td><td className='text-lg font-semibold text-gray-500'>Power Supply</td><td className='text-lg font-semibold text-gray-500'>Near by Schools</td><td className='text-lg font-semibold text-gray-500'>Near by Colleges</td></tr>
              </tbody>
            </table>

            <h3 className="text-xl font-semibold text-orange-500 mb-4">Floor Plans</h3>
            <a href="/assets/images/layout.jpeg" download>
              <Image
                src="/assets/images/layout.jpeg"
                alt="Floor Plan"
                width={700}
                height={500}
                className="rounded shadow"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="mb-4 text-gray-700">
            Thanjavur, Cholanmaligai, 141/1C2, Periyar nagar, Kumbakonam, Tamil Nadu 612703.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3917.3821178792787!2d79.34849621480214!3d10.934480792214385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDU2JzA0LjEiTiA3OcKwMjEnMDIuNSJF!5e0!3m2!1sen!2sin!4v1687371035765!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;
