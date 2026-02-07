import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <footer className="bg-[#16222E] text-white py-18 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-10">
        {/* Left Section - Logo + Text */}
        <div className="space-y-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo2.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <p className="max-w-sm leading-relaxed">
            Providing reliable HVAC solutions with excellence and commitment, every step of the way.
          </p>
        </div>

        {/* Right Section - Links + Services + Socials */}
        <div className="flex flex-col md:flex-row md:justify-end lg:gap-20 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-gray-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contacts</h3>
              <ul className="space-y-2">

                {/* Phone numbers */}
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-white/80"/>
                  <Link href="tel:+919898552074" className="hover:text-gray-300">
                    +91 9898552074
                  </Link>
                </li>

                {/* Email */}
                <li className="flex items-center gap-2">
                  <MdEmail className="text-white/80" />
                  <Link
                    href="mailto:info.dwarkaenterprise@gmail.com"
                    className="hover:text-gray-300"
                  >
                    info.dwarkaenterprise@gmail.com
                  </Link>
                </li>

                {/* Social Icons */}
                <div className="flex md:flex-row gap-4 items-center md:items-start">
                  <Link href="https://facebook.com" target="_blank">
                    <SiFacebook className="w-5 h-5 hover:text-gray-300" />
                  </Link>
                  <Link href="https://www.instagram.com/dwarka.enterprise?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                    <SiInstagram className="w-5 h-5 hover:text-gray-300" />
                  </Link>
                  <Link href="https://youtube.com" target="_blank">
                    <SiYoutube className="w-5 h-5 hover:text-gray-300" />
                  </Link>
                </div>

              </ul>
          </div>
        </div>

      </div>
    </footer>
    <p className="bg-[#16222E] border-t border-gray-400 text-center text-sm text-gray-400 py-8">
        © 2025 Dwarka Enterprises. All Rights Reserved.
    </p>
    </>
  );
};

export default Footer;