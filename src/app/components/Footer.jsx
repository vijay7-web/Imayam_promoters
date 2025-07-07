// components/Footer.tsx

'use client';

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2e2e2e] text-white py-10 text-[16px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Sales Enquiries */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <FaPhoneAlt className="text-white mr-2 text-xl" />
              <span className="font-semibold text-gray-300 text-sm">Sales Enquiries</span>
            </div>
            <p className="text-gray-300 text-base">+91 88808 88495</p>
            <p className="text-gray-300 text-base">+91 95858 83387</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <FaEnvelope className="text-white mr-2 text-xl" />
              <span className="font-semibold text-gray-300 text-sm">Email</span>
            </div>
            <p className="text-gray-300 text-base">admin@imayampromoters.com</p>
          </div>

          {/* Office Location */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <FaMapMarkerAlt className="text-white mr-2 text-xl" />
              <span className="font-semibold text-gray-300 text-sm">Office</span>
            </div>
            <p className="text-gray-300 text-base">
              No 22 E/1, Asian Resort, Gandhi Nagar, Srinagar Colony,<br />
              Kumbakonam - 612001
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            {/* <span className="font-semibold text-gray-300 text-sm mb-2">Follow Us</span> */}
            <div className="flex space-x-5 mt-1 justify-center md:justify-start">
              <a href="#" className="text-white text-2xl hover:text-orange-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white text-2xl hover:text-orange-500">
                <FaTwitter />
              </a>
              <a href="#" className="text-white text-2xl hover:text-orange-500">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white text-2xl hover:text-orange-500">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-500 mt-8 pt-4 text-center text-gray-300 text-base">
          Imayam Promoters © 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
