'use client'

import Image from 'next/image'
import React from 'react'
import {
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: <BuildingOfficeIcon className="w-8 h-8" />,
    title: 'Buy any Property',
    description:
      'Are you looking to invest in residential, commercial in Kumbakonam? Look no further. Imayam Promoters has an extensive portfolio of properties that cater to a wide range of needs and budgets.',
  },
  {
    icon: <UserGroupIcon className="w-8 h-8" />,
    title: 'Sell your Property',
    description:
      'If you own a property in Kumbakonam and are looking to sell it, RKM Promoters is here to assist you. Our wide network and marketing expertise enable us to connect you with potential buyers.',
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8" />,
    title: 'Financial Guidance',
    description:
      'We understand that financial planning plays a crucial role in real estate transactions. Our team of experienced professionals will provide you with comprehensive financial guidance.',
  },
  {
    icon: <PhoneIcon className="w-8 h-8" />,
    title: 'Customer Support',
    description:
      'At Imayam Promoters, we prioritize providing exceptional customer support. From the moment you book an appointment with us until the final registration, our dedicated team will be by your side.',
  },
]

const WhyChooseUs = () => {
  return (
    <section id="works" className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
            Why Choose Imayam Promoters
          </h2>
          <p className="text-gray-600 text-base">
            Your trusted source for quality real estate in Kumbakonam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 p-6 rounded-xl text-center hover:scale-[1.02]"
              >
                <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-orange-100 text-orange-500 mb-4 transition-all group-hover:bg-orange-500 group-hover:text-white">
                  {React.cloneElement(item.icon, {
                    className: 'w-6 h-6 group-hover:text-white transition',
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center items-center">
            <div className="w-full h-full relative rounded-xl overflow-hidden ">
              <Image
                src="/about1.jpg"
                alt="Why Choose Imayam Promoters"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
