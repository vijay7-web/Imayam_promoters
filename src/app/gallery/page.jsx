'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid';

const projects = {
    'Jeppiaar City': [
        "/jeppiaar-city/IMG20250703133703.jpg",
        "/jeppiaar-city/IMG20250703145022.jpg",
        "/jeppiaar-city/IMG20250703133652.jpg",
        "/jeppiaar-city/IMG20250703133101.jpg",
        "/jeppiaar-city/IMG20250703133105.jpg"
    ],
    'Praveen City': [
        "/praveen-city/1.jpg",
        "/praveen-city/8.jpeg",
        "/praveen-city/2.jpg",
        "/praveen-city/3.jpg",
        "/praveen-city/4.jpg",
        "/praveen-city/5.jpg",
        "/praveen-city/6.jpg",
        "/praveen-city/7.jpg"
    ],
    'Anugraha Avenue': [
        "/anugraha-nagar/anugrahaarchimage.jpeg",
        "/anugraha-nagar/1.jpg",
        "/anugraha-nagar/2.jpg",
        "/anugraha-nagar/3.jpg",
        "/anugraha-nagar/4.jpg",
        "/anugraha-nagar/5.jpg"
    ],
    'Subiksha Garden': [
        "/tamizh-nagar/property-single-img1.jpg",
        "/tamizh-nagar/property-single-img2.jpg",
        "/tamizh-nagar/property-single-img3.jpg"
    ],
}

// Flatten all image arrays into one
const allImages = Object.values(projects).flat()

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            {/* <section id="statistics" className="bg-gray-100 py-4"> */}
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
                                        Gallery
                                      </h1>
                                      <p className="text-white mt-2 text-lg font-medium">
                                        Explore photos from all our projects
                                    </p>
                                    </div>
                                  </div>
                        {/* </section> */}
            <div className="w-full mx-auto my-20 px-6">
                {/* All Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                    {allImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="flex rounded-lg overflow-hidden items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div
                                key={index}
                                className="shadow rounded overflow-hidden w-full h-[250px] relative cursor-pointer flex justify-center"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    width={600}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
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
        </>
    )
}

export default GalleryPage
