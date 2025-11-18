"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import hvacSolutions from "../data/hvacSolutions.json";

const HVACSolutions = () => {
  const { leftImage, rightImage, description, brands, button } = hvacSolutions;

  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Image */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={leftImage}
              alt="HVAC Solutions"
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Image + Button */}
        <div className="relative lg:w-1/2 w-full flex justify-center">
          <Image
            src={rightImage}
            alt="HVAC Team"
            width={800}
            height={400}
            className="rounded-xl object-cover"
          />

          <Link
            href={button.link}
            className="absolute bottom-4 right-4 bg-white text-[#16222E] hover:bg-[#16222E] hover:text-white font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2 transition"
          >
            {button.text}
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <p className="text-[#0C1622] text-sm md:text-base mb-6 leading-relaxed mx-auto">
          {description}
        </p>

        {/* Mobile Marquee */}
        <div className="border-t border-b border-[#16222E] py-4 overflow-hidden sm:hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex items-center justify-center min-w-[140px] mx-4">
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

        {/* Desktop Brand Section */}
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

        {/* Animation */}
        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
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