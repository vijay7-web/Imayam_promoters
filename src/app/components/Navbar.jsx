'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Optional: replace with SVG if not using lucide

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { name: 'HOME', href: '/' },
    { name: 'PROPERTIES', href: '/properties-all' },
    { name: 'GALLERY', href: '/#gallery' },
    { name: 'ABOUT US', href: '/#aboutus' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/Imayam-Logo-web4.jpg" alt="Logo" width={180} height={70} />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 items-center">
          {links.map(link => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-600 font-medium hover:text-orange-500 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {links.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
