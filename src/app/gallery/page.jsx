'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const projects = {
    'Jeppiaar City': [
        "/jeppiaar-city/IMG20250703145032.jpg", "/jeppiaar-city/IMG20250703133703.jpg", "/images/jeppiaar-city/1.webp", "/images/jeppiaar-city/2.JPG", "/images/jeppiaar-city/3.JPG",  "/images/jeppiaar-city/4.jpg", "/images/jeppiaar-city/5.jpg", "/images/jeppiaar-city/6.jpg"
    ],
    'Praveen City': [
        "/images/praveen-city/1.jpg", "/images/praveen-city/2.jpg", "/images/praveen-city/3.jpg", "/images/praveen-city/4.jpg", "/images/praveen-city/5.jpg"
    ],
    'Anugraha Avenue': [
        "/images/anugraha-nagar/1.jpg", "/images/anugraha-nagar/2.jpg", "/images/anugraha-nagar/3.jpg", "/images/anugraha-nagar/4.jpg", "/images/anugraha-nagar/5.jpg"
    ],
    'Subiksha Garden': [
        "/tamizh-nagar/property-single-img1.jpg", "/tamizh-nagar/property-single-img2.jpg","/tamizh-nagar/property-single-img3.jpg"
    ],
}

// Flatten all image arrays into one
const allImages = Object.values(projects).flat()

const GalleryPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(null)

    return (
        <>
            {/* Cover */}
            <div className="relative w-full h-[30vh] overflow-hidden font-sans">
                <Image
                    src={'/drone-photo-1.jpg'}
                    alt={'cover-image'}
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 text-white text-center z-20 p-10 rounded-xl">
                    <h1 className="text-3xl font-semibold tracking-[2.4px] leading-[1.4] text-white uppercase tracking-wider mb-5">
                        Gallery
                    </h1>
                    <p className="text-white mt-2 text-lg font-medium">
                        Explore photos from all our projects
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="w-full mx-auto my-20 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {allImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <div
                                className="relative cursor-pointer w-full h-[220px] sm:h-[260px] md:h-[280px] group"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out rounded"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Carousel Modal */}
            {selectedIndex !== null && (
                                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center px-2">
                                    {/* Close button */}
                                    <button
                                        className="absolute top-3 right-3 text-white hover:text-red-500"
                                        onClick={() => setSelectedIndex(null)}
                                    >
                                        <XMarkIcon className="w-8 h-8" />
                                    </button>
            
                                    {/* Image container with centered image */}
                                    <div className="relative flex flex-col items-center justify-center w-full max-w-full lg:max-w-[90vw] p-2 sm:p-4">
                                        {/* Image preview */}
                                        <div
                                            className="w-full max-h-[90vh] overflow-auto touch-pan-y flex justify-center"
                                            style={{
                                                WebkitOverflowScrolling: "touch",
                                                touchAction: "pinch-zoom",
                                            }}
                                        >
                                            <Image
                                                src={allImages[selectedIndex]}
                                                alt={`Preview ${selectedIndex + 1}`}
                                                width={1920}
                                                height={1080}
                                                className="max-h-[90vh] h-auto w-auto object-contain rounded-lg shadow-xl border border-gray-700"
                                                priority
                                            />
                                        </div>
            
                                        <div className="text-white mt-3 text-xs sm:text-sm">
                                            Image {selectedIndex + 1} of {allImages.length}
                                        </div>
            
                                        {/* Prev and Next buttons */}
                                        <button
                                            className={`absolute left-2 lg:-left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl transition-opacity duration-300 ${selectedIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-400"
                                                }`}
                                            onClick={() => selectedIndex > 0 && setSelectedIndex(selectedIndex - 1)}
                                            disabled={selectedIndex === 0}
                                        >
                                            ‹
                                        </button>
            
                                        <button
                                            className={`absolute right-2 lg:-right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl transition-opacity duration-300 ${selectedIndex === allImages.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:text-gray-400"
                                                }`}
                                            onClick={() => selectedIndex < allImages.length - 1 && setSelectedIndex(selectedIndex + 1)}
                                            disabled={selectedIndex === allImages.length - 1}
                                        >
                                            ›
                                        </button>
                                    </div>
            
                                </div>
                            )}
        </>
    )
}

export default GalleryPage
