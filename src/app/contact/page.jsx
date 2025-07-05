'use client'

import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] py-16 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10 tracking-tight">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 bg-white p-8 rounded-md w-full">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 text-center mb-2 border-b border-gray-300 pb-2">Imayam Group</h3>
            <div className="text-gray-600 space-y-5 ml-40 mt-5">
              <div className="flex items-start gap-4">
                <FaPhone className="text-orange-500 text-xl mt-1" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="text-orange-500 text-xl mt-1" />
                <span>+91 88888 88888</span>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-orange-500 text-xl mt-1" />
                <span>info@imayampromoters.com</span>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                <span>
                  P5M8+74P, MDR 581, Illalur RF, <br />
                  Illalur, Tamil Nadu 603110
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-12 w-full h-[400px] rounded-md overflow-hidden border border-gray-200">
          <iframe
            title="Imayam Group Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4257605476885!2d80.046681!3d12.748998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f52b88b0e2df%3A0x204a30ddf99865a1!2sImayam%20Group!5e0!3m2!1sen!2sin!4v1720122348654!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
