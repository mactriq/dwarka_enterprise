"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HVACSolutions = () => {
  const brands = [
    { src: "/brands/lg.png", alt: "LG" },
    { src: "/brands/voltas.png", alt: "Voltas" },
    { src: "/brands/toshiba.png", alt: "Toshiba" },
    { src: "/brands/carrier.png", alt: "Carrier" },
    { src: "/brands/general.png", alt: "General" },
    { src: "/brands/og.png", alt: "OG" },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/about/hvac-solutions.png"
              alt="HVAC Solutions"
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Image with Button */}
        <div className="relative lg:w-1/2 w-full flex justify-center">
          <Image
            src="/about/hvac-team.jpeg"
            alt="HVAC Team"
            width={800}
            height={400}
            className="rounded-xl object-cover"
          />
          <Link href="/about" className="absolute bottom-4 right-4 bg-white text-[#16222E] hover:bg-[#16222E] hover:text-white font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition">
            Know More →
          </Link>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="mt-6">
        <p className="text-[#0C1622] text-sm md:text-base mb-6 leading-relaxed mx-auto">
          Dwarka Enterprise is a nationally recognized HVAC turnkey contracting and
          supply company, providing comprehensive climate control solutions across
          residential, healthcare, corporate, educational, and industrial sectors
          throughout India. With decades of experience and partnerships with multiple
          leading global HVAC brands, we deliver integrated, energy-efficient, and
          future-ready systems designed to meet the highest standards of performance
          and reliability.
        </p>
        {/* Marquee for mobile only */}
        <div className="border-t border-b border-[#16222E] py-4 overflow-hidden sm:hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[140px] mx-4"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Original desktop/tablet layout (unchanged) */}
        <div className="border-t border-b border-[#16222E] py-4 hidden sm:flex flex-wrap justify-between gap-6 items-center w-full">
          {brands.map((brand, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 flex items-center justify-center min-w-[120px]">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </div>

              {index !== brands.length - 1 && (
                <div className="w-px h-16 bg-[#16222E]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>

    </section>
  );
};

export default HVACSolutions;