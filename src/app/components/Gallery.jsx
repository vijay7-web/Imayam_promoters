'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = {
  'Jeppiaar City': ["/jeppiaar-city/IMG20250703133703.jpg", "/jeppiaar-city/IMG20250703145022.jpg", "/jeppiaar-city/IMG20250703133652.jpg",  "/jeppiaar-city/IMG20250703133101.jpg", "/jeppiaar-city/IMG20250703133105.jpg"],
  'Praveen City': ["/praveen-city/1.jpg", "/praveen-city/8.jpeg", "/praveen-city/2.jpg", "/praveen-city/3.jpg", "/praveen-city/4.jpg", "/praveen-city/5.jpg", "/praveen-city/6.jpg", "/praveen-city/7.jpg"],
  'Anugraha Avenue': ["/anugraha-nagar/anugrahaarchimage.jpeg", "/anugraha-nagar/1.jpg", "/anugraha-nagar/2.jpg", "/anugraha-nagar/3.jpg", "/anugraha-nagar/4.jpg", "/anugraha-nagar/5.jpg"],
  'Subiksha Garden': ["/tamizh-nagar/property-single-img1.jpg", "/tamizh-nagar/property-single-img2.jpg","/tamizh-nagar/property-single-img3.jpg"],
}

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState('Jeppiaar City')

  return (
    <section id="gallery" className="bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
             Gallery</h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">Always upto date with our latest Projects</p>
        </div>

        {/* Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(projects).map((project) => (
            <button
              key={project}
              onClick={() => setSelectedProject(project)}
              className={`px-5 py-2.5 rounded-sm text-sm font-semibold transition-all duration-200 shadow-md ${
                selectedProject === project
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-green-700 border border-green-700 hover:bg-green-700 hover:text-white'
              }`}
            >
              {project}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects[selectedProject].map((src, index) => (
            <motion.div
              key={index}
              className="flex rounded-lg overflow-hidden items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
