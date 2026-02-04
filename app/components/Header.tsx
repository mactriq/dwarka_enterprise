"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#16222E] shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-20">
        {/* Logo (Desktop) */}
        <Link href="/" className="hidden md:flex items-center">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="text-white hidden md:flex items-center justify-center space-x-8">
          <Link href="/about" className="hover:text-gray-400 transition">
            About Us
          </Link>
          <Link href="/product" className="hover:text-gray-400 transition">
            Products
          </Link>
          <Link href="/project" className="hover:text-gray-400 transition">
            Projects
          </Link>
          <Link href="/gallery" className="hover:text-gray-400 transition">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact Us
          </Link>

          <a
            href="tel:+919376639399"
            className="flex items-center gap-2 cursor-pointer text-white border border-white font-medium px-4 py-3 rounded-md hover:border-[#AA2022] hover:text-white hover:bg-[#AA2022] transition"
          >
            <FaPhoneAlt className="text-lg" />
            <span>+91 9376639399</span>
          </a>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Company Logo"
              width={100}
              height={35}
              className="object-contain"
            />
          </Link>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f9f7f2] px-6 py-6 space-y-4 flex flex-col items-start">
          <Link
            href="/about"
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/product"
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/project"
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/gallery"
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="text-black hover:text-gray-600 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <a
            href="tel:+919376639399"
            className="flex items-center gap-2 cursor-pointer border border-black text-gray-600 hover:text-white hover:bg-[#AA2022] font-medium px-4 py-3 rounded-md hover:bg-[#8a1b1c] transition w-auto"
            onClick={() => setIsOpen(false)}
          >
            <FaPhoneAlt className="text-lg" />
            <span>+91 9376639399</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
