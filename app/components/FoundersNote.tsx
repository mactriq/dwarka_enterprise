"use client";

import Image from "next/image";
import founderData from "../data/founderData.json";

export default function FoundersNote() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
        {founderData.title}
      </h2>

      <div className="space-y-20">
        {founderData.leaders.map((leader, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            {/* Left: Leadership Images */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                {/* Founder */}
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-2xl overflow-hidden w-full h-full">
                    <Image
                      src={leader.founderimage}
                      alt={leader.name1}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {leader.name1}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {leader.designation1}
                  </p>
                </div>

                {/* Managing Director */}
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-2xl overflow-hidden w-full h-full">
                    <Image
                      src={leader.directorimage}
                      alt={leader.name2}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {leader.name2}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {leader.designation2}
                  </p>
                </div>

              </div>
            </div>

            {/* Right: Founder Note Content */}
            <div className="w-full lg:w-3/5">
              {leader.paragraphs?.length > 0 && (
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                  {leader.paragraphs.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}