'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ArrowDownTrayIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import jsPDF from 'jspdf';

export default function FloorPlan({ floorPlan }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = floorPlan;
    link.download = 'floor-plan.jpg';
    link.click();
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF('landscape');
    pdf.addImage(floorPlan, 'JPEG', 10, 10, 270, 150);
    pdf.save('floor-plan.pdf');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    floorPlan && (
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-orange-500 mb-4">Floor Plan</h3>

        <div className="flex flex-col md:flex-row gap-4 relative">
          {/* Download button for mobile - top */}
          <div className="md:hidden">
            <div className="flex justify-start">
              <div className="relative">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center font-semibold gap-2 bg-white text-green-700 hover:bg-green-700 hover:text-white px-4 py-2 rounded shadow transition"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  Download
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {openDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded border overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        handleDownloadImage();
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Download as Image
                    </button>
                    <button
                      onClick={() => {
                        handleDownloadPDF();
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white"
                    >
                      Download as PDF
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Image */}
          <Image
            src={floorPlan}
            alt="Floor Plan"
            width={1000}
            height={600}
            className="object-cover rounded w-full"
          />

          {/* Download button for desktop - side */}
          <div className="hidden sm:block">
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center font-semibold gap-2 bg-white text-green-700 hover:bg-green-700 hover:text-white px-4 py-2 rounded shadow transition"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              {openDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded border overflow-hidden"
                >
                  <button
                    onClick={() => {
                      handleDownloadImage();
                      setOpenDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white"
                  >
                    Download as Image
                  </button>
                  <button
                    onClick={() => {
                      handleDownloadPDF();
                      setOpenDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-green-700 hover:text-white"
                  >
                    Download as PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
