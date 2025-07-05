'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = {
  'Jeppiar City': ['/img1.jpg', '/banner-background.jpg', '/img3.jpg'],
  'Praveen City': ['/img4.jpg', '/img5.jpg', '/img6.jpg'],
  'Anugraha Avenue': ['/img1.jpg', '/img5.jpg'],
  'Subiksha Garden': ['/img2.jpg', '/img4.jpg'],
}

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState('Jeppiar City')

  return (
    <section id="gallery" className="bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
             Gallery</h2>
          <p className="text-gray-500 mt-2 text-lg font-medium">Explore our beautiful completed and ongoing sites</p>
        </div>

        {/* Project Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(projects).map((project) => (
            <button
              key={project}
              onClick={() => setSelectedProject(project)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-md ${
                selectedProject === project
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-teal-700 border border-teal-400 hover:bg-teal-100'
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
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
