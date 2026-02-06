"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

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
        <div className="hidden md:flex items-center justify-center space-x-8">
          <Link
            href="/about"
            className={`transition ${
              isActive("/about")
                ? "text-[#AA2022] font-semibold"
                : "text-white hover:text-gray-400"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/product"
            className={`transition ${
              isActive("/product")
                ? "text-[#AA2022] font-semibold"
                : "text-white hover:text-gray-400"
            }`}
          >
            Products
          </Link>

          <Link
            href="/project"
            className={`transition ${
              isActive("/project")
                ? "text-[#AA2022] font-semibold"
                : "text-white hover:text-gray-400"
            }`}
          >
            Projects
          </Link>

          <Link
            href="/gallery"
            className={`transition ${
              isActive("/gallery")
                ? "text-[#AA2022] font-semibold"
                : "text-white hover:text-gray-400"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className={`transition ${
              isActive("/contact")
                ? "text-[#AA2022] font-semibold"
                : "text-white hover:text-gray-400"
            }`}
          >
            Contact Us
          </Link>

          <a
            href="tel:+919376639399"
            className="flex items-center gap-2 cursor-pointer text-white border border-white font-medium px-4 py-3 rounded-md hover:border-[#AA2022] hover:bg-[#AA2022] transition"
          >
            <FaPhoneAlt className="text-lg" />
            <span>+91 9376639399</span>
          </a>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="Company Logo"
              width={100}
              height={35}
              className="object-contain"
            />
          </Link>

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
            className={`transition ${
              isActive("/about")
                ? "text-[#AA2022] font-semibold"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/product"
            className={`transition ${
              isActive("/product")
                ? "text-[#AA2022] font-semibold"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/project"
            className={`transition ${
              isActive("/project")
                ? "text-[#AA2022] font-semibold"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          <Link
            href="/gallery"
            className={`transition ${
              isActive("/gallery")
                ? "text-[#AA2022] font-semibold"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className={`transition ${
              isActive("/contact")
                ? "text-[#AA2022] font-semibold"
                : "text-black hover:text-gray-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <a
            href="tel:+919376639399"
            className="flex items-center gap-2 border border-black text-gray-600 hover:text-white hover:bg-[#AA2022] font-medium px-4 py-3 rounded-md transition"
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