"use client";

import Image from "next/image";
import founderData from "../data/founderData.json";

export default function FoundersNote() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row lg:gap-12 gap-8 items-center">

        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="rounded-2xl overflow-hidden w-full">
            <Image
              src={founderData.image}
              alt={founderData.name}
              width={500}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {founderData.title}
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            {founderData.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* Name + Designation */}
          <div className="mt-8 flex flex-col items-end text-right">
            <h3 className="text-lg font-semibold text-gray-900">
              {founderData.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {founderData.designation}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}