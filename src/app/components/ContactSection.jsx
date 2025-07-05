'use client'

import React from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-base">
        
        {/* Header Title */}
        <div className="md:col-span-4 text-center mb-6">
          <h2 className="text-2xl font-bold text-orange-400">
            Sales Enquiries
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            We're here to help you with all your real estate needs.
          </p>
        </div>

        {/* Contact - Phone */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-orange-400">
            <FaPhoneAlt className="text-base" />
            Phone
          </h3>
          <p className="text-gray-300 mb-1">+91 99999 11111</p>
          <p className="text-gray-300">+91 99999 22222</p>
        </div>

        {/* Contact - Email */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-orange-400">
            <FaEnvelope className="text-base" />
            Email
          </h3>
          <p className="text-gray-300">contact@imayampromoters.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-orange-400">
            <FaMapMarkerAlt className="text-base" />
            Location
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            284/5, Chettymandapan Bypass,<br />
            Opp to KR Gas Station,<br />
            Kumbakonam – 612001
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-orange-400">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Imayam Promoters. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
