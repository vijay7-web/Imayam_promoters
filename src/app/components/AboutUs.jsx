'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Counter Component
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0)
  const frame = useRef()

  useEffect(() => {
    const end = parseInt(target.replace(/\D/g, ''))
    const duration = 1500
    const startTime = performance.now()

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        frame.current = requestAnimationFrame(updateCounter)
      }
    }

    frame.current = requestAnimationFrame(updateCounter)

    return () => cancelAnimationFrame(frame.current)
  }, [target])

  return (
    <div>
      <p className="text-green-700 text-3xl font-bold">{count}+</p>
      <p className="font-semibold mt-1">{label}</p>
    </div>
  )
}

// AboutUs Component
const AboutUs = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="aboutus" className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-thin text-orange-500 text-center uppercase tracking-tight mb-2">
          ABOUT US
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We value your trust than money!
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Text Section */}
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Imayam Promoters is one of the prominent real estate promoters in and around Thanjavur, Thiruvarur, Mannargudi district alongside the delta region in Tamil Nadu. In 2014, we started our journey as a land mediator where we acted as a bridge between land sellers and promoters on a commission basis.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Later in 2016, we started our own promotions company where we promoted land for some of the top real estate companies. After years of continuous effort and hard work, we entered a new chapter as a real estate marketing and promotions company under the name RKM Promoters.
              <span
                className="text-orange-600 font-semibold cursor-pointer hover:underline ml-1"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? '' : 'read more →'}
              </span>
            </p>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                showMore ? 'max-h-[500px] mt-4' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed mb-4">
                In 2020, we rebranded ourselves as Imayam Promoters, expanding our services to include end-to-end real estate solutions—from site development to customer support. Our core value remains customer trust, and we strive to build communities where families can live with peace and prosperity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are proud to have successfully delivered projects in multiple regions, always ensuring legal transparency, clear documentation, and customer satisfaction. Our mission is to make property ownership accessible and stress-free for everyone.
                <span
                className="text-orange-600 font-semibold cursor-pointer hover:underline ml-1"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? 'show less ←' : ''}
              </span>
              </p>
            </div>

            {/* Counter Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-center">
              <Counter target="50+" label="Total Property" />
              <Counter target="2000+" label="Total Plots" />
              <Counter target="1500+" label="Happy Families" />
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:sticky md:top-32 h-fit">
            <div className="shadow-lg rounded-md overflow-hidden">
              <Image
                src="/about.jpg"
                alt="About"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
