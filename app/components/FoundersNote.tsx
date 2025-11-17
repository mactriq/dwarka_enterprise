"use client";

import Image from "next/image";
import { FC } from "react";

const FoundersNote: FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">

        {/* Left: Image (1/3 width on desktop) */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="rounded-2xl overflow-hidden w-full">
            <Image
              src="/about/founder.png"
              alt="Founder of Dwarka Enterprise"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content (2/3 width on desktop) */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Founder’s Note
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Namaste! As the founder of Dwarka Enterprise, I am privileged to lead a team passionate about delivering exceptional heating, ventilation, and air conditioning (HVAC) solutions across India. At Dwarka Enterprise, we understand that comfort isn’t just about temperature – it’s about creating healthier, more productive environments for homes and businesses.
            </p>

            <p>
              With years of experience and a commitment to quality, we’ve earned the trust of countless clients. Our team of skilled professionals works tirelessly to provide tailored HVAC solutions, whether it’s installing cutting-edge systems, conducting preventive maintenance, or ensuring swift repairs. We believe in transparency, reliability, and putting customers first.
            </p>

            <p>
              In a country like India, where climates vary widely, efficient HVAC systems are essential for comfort and well-being. We're dedicated to offering energy-efficient technologies and sustainable practices that help reduce environmental impact while maximizing performance.
            </p>

            <p>
              Thank you for choosing Dwarka Enterprise. We're honored to serve you and look forward to continuing our journey together.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-end text-right">
            <h3 className="text-lg font-semibold text-gray-900">
              Jagdishrai Jain
            </h3>
            <p className="text-gray-600 text-sm">
              Founder, Dwarka Enterprise
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FoundersNote;