// components/PropertyDetails.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import FloorPlan from './FloorPlan';

const PropertyDetails = ({ property }) => {
      const [selectedImage, setSelectedImage] = useState(null);

    if (!property) return null;

    const {
        name, address, location, images, video, totalPlots, soldPlots, availablePlots, totalArea,
        surveyNo, taluk, district, pincode, panchayat, roadType, fencing,
        landmark, busStop, plotSizes, facilities, floorPlan, mapEmbedUrl,
    } = property;

    return (
        <>
            {/* Breadcrumb Section */}
            <section id="statistics" className="bg-gray-100 py-4">
                <div className="relative w-full h-[30vh] overflow-hidden font-sans">
                        <Image
                          src={'/drone-photo-1.jpg'}
                          alt={'cover-image'}
                          width={600}
                          height={400}
                          className="w-full h-auto opacity-1/12"
                        />
                        <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
                          <h1 className="text-3xl font-semibold tracking-[2.4px] leading-[1.4] text-white uppercase tracking-wider mb-5">
                            Property Details
                          </h1>
                        </div>
                      </div>
            </section>

            {/* Property Overview */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold text-orange-500 uppercase">{name}</h2>
                    <p className="mt-2 text-gray-600 flex flex-wrap justify-center gap-8">
                        <span className="bg-gray-100 px-3 py-2 rounded font-bold text-gray-600"><i className="fa fa-th-large"></i> {totalPlots} Total Plots</span>
                        <span className="bg-gray-100 px-3 py-2 rounded font-bold text-gray-600"><i className="fa fa-th-large text-red-600"></i> {soldPlots} Plots Sold Out</span>
                        <span className="bg-gray-100 px-3 py-2 rounded font-bold text-gray-600"><i className="fa fa-th-large text-green-600"></i> {availablePlots} Plots Available</span>
                    </p>
                    <h3 className="mt-2 text-lg font-semibold font-semibold text-green-800 px-2 py-1 rounded">{totalArea}</h3>
                    <p className="mt-1 text-gray-700"><i className="fa fa-map-marker text-green-600"></i> {address}</p>
                </div>
            </section>

            {/* Gallery Section */}
             <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="shadow rounded overflow-hidden w-full h-[250px] relative cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image src={img} alt={`property-${idx}`} fill className="object-cover" />
                    </div>
                    ))}
                <div className="shadow rounded overflow-hidden w-full h-[250px] relative cursor-pointer">
                    <a
                    href={video} // replace with your link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block shadow rounded overflow-hidden"
                    >
                    <div className="relative">
                        <Image
                        src="/jeppiaar-city/IMG20250703133703.jpg" // Replace with your local/public YouTube thumbnail
                        alt="Video Thumbnail"
                        width={600}
                        height={400}
                        className="w-full h-[250px] object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-white opacity-90"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        </div>
                    </div>
                    </a>
                    </div>
                </div>

                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                        <button
                        className="absolute top-4 right-4 text-white hover:text-red-400"
                        onClick={() => setSelectedImage(null)}
                        >
                        <XMarkIcon className="w-8 h-8" />
                        </button>
                    <div className="relative max-w-4xl w-full p-4">
                        <Image
                        src={selectedImage}
                        alt="Preview"
                        width={1200}
                        height={800}
                        className="w-full h-auto max-h-[90vh] object-contain rounded shadow-lg"
                        />
                    </div>
                    </div>
                )}
                </section>

            {/* Description Section */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">Property Description</h2>
                    <div className="space-y-4 font-semibold text-gray-700">
                        <p>{name} is located in {location}.</p>
                        <p>All the plots are DTCP approved...</p>
                        <p>The key highlights of the properties are {facilities.join(", ")}.</p>
                        <p>We have dedicated Customer Relationship Managers...</p>
                    </div>

                    {/* Address Info */}
                    <div className="mt-10">
                    <h3 className="text-xl font-semibold text-orange-500 mb-4">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="flex items-center justify-between border-b border-gray-350 py-2">
                        <span className="font-semibold mr-30">Survey No.</span>
                        <span className="font-bold text-gray-500">{surveyNo}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-350  py-2">
                        <span className="font-semibold">Taluk</span>
                        <span className="font-bold text-gray-500">{taluk}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-350  py-2">
                        <span className="font-semibold">Panchayat</span>
                        <span className="font-bold text-gray-500">{panchayat}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-350  py-2">
                        <span className="font-semibold">District</span>
                        <span className="font-bold text-gray-500">{district}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-350  py-2">
                        <span className="font-semibold">PINCode</span>
                        <span className="font-bold text-gray-500">{pincode}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-350  py-2">
                        <span className="font-semibold">State</span>
                        <span className="font-bold text-gray-500">Tamil Nadu</span>
                        </div>
                    </div>
                    </div>

                    {/* Details Section */}
                    <div className="mt-10">
                    <h3 className="text-xl font-semibold text-orange-500 mb-4">Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        {[
                        ['Total Property Area', totalArea],
                        ['Total Plots', totalPlots],
                        ['Plots Sold', soldPlots],
                        ['Available Plots', totalPlots - soldPlots],
                        ['Road Type', roadType],
                        ['Fencing', fencing],
                        ['Landmark', landmark],
                        ['Bus Stop', busStop],
                        ['30 X 50', plotSizes["30 X 50"]],
                        ['30 X 40', plotSizes["30 X 40"]],
                        ].map(([label, value], index) => (
                        <div key={index} className="flex items-center justify-between border-b border-gray-350  py-2">
                            <span className="font-semibold">{label}</span>
                            <span className="font-bold text-gray-500">{value}</span>
                        </div>
                        ))}
                        {plotSizes["15 X 35"]?.length > 0 && (
                        <div className="flex items-center justify-between border-b border-gray-350 py-2">
                            <span className="font-semibold">15 X 35:</span>
                            <span className="font-bold text-gray-500">{plotSizes["15 X 35"]}</span>
                        </div>
                        )}
                    </div>
                    </div>
                    {/* <div className="mt-10">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">Facilities</h3>
                        <table className="w-full text-left">
                            <tbody>
                            {facilities?.length > 0 &&
                                facilities.reduce((rows, key, index) => {
                                if (index % 4 === 0) rows.push([]);
                                rows[rows.length - 1].push(key);
                                return rows;
                                }, []).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((facility, colIndex) => (
                                    <td key={colIndex} className="py-2 px-4 font-bold text-gray-500">
                                        {facility}
                                    </td>
                                    ))}
                                    {row.length < 4 &&
                                    Array.from({ length: 4 - row.length }).map((_, i) => (
                                        <td key={`empty-${i}`} className="py-2 px-4"></td>
                                    ))}
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                    <div className="mt-10">
  <h3 className="text-xl font-semibold text-orange-500 mb-4">Facilities</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
    {facilities?.map((facility, index) => (
      <div key={index} className="bg-gray-100 px-3 py-2 rounded font-bold text-gray-600">
        {facility}
      </div>
    ))}
  </div>
</div>

                    <FloorPlan floorPlan={floorPlan}/>
                    </div>
            </section >

            {/* Map Section */}
            < section className="py-10 bg-gray-100" >
                <div className="container mx-auto px-4">
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="mb-4 text-gray-700">{location}</p>
                    <iframe
                        src={mapEmbedUrl}
                        className="w-full h-96 border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section >
        </>
    );
};

export default PropertyDetails;
