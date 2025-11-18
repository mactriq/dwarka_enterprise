"use client";

import Image from "next/image";
import { FC } from "react";

const LegacySection: FC = () => {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative text-white rounded-2xl overflow-hidden my-14 sm:my-20">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about/legacy-bg.png"
            alt="Our Legacy - HVAC work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-20 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Our Legacy
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-100 max-w-3xl">
            At Dwarka Enterprise, our legacy is built on{" "}
            <span className="bg-white/90 text-gray-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
              trust
            </span>
            , quality, and a{" "}
            <span className="bg-white/90 text-gray-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
              commitment to excellence
            </span>
            . For over 20 years, we’ve had the privilege of serving our community,
            providing reliable heating and cooling solutions that improve lives.
            As we continue to grow and innovate, we remain dedicated to our core
            values:{" "}
            <span className="bg-white/90 text-gray-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
              Integrity
            </span>
            , customer satisfaction, and a passion for delivering exceptional
            service. Our legacy is a testament to the hard work and dedication of
            our team, and we’re honored to have shared it with our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;