"use client";

import Image from "next/image";
import legacyData from "../data/legacyData.json";

export default function LegacySection() {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative text-white rounded-2xl overflow-hidden my-14 sm:my-20">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={legacyData.backgroundImage}
            alt="Our Legacy Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-20 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {legacyData.title}
          </h2>

          {/* Paragraphs with Highlighted Words */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-100 max-w-3xl">
            {legacyData.paragraph[0].split(" ").map((word, i) => {
              const cleanWord = word.replace(/[^a-zA-Z]/g, "");
              return legacyData.highlightWords.includes(cleanWord) ? (
                <span
                  key={i}
                  className="bg-white/90 text-gray-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mx-1"
                >
                  {word.replace(",", "")}
                </span>
              ) : (
                word + " "
              );
            })}

            {legacyData.paragraph[1].split(" ").map((word, i) => {
              const cleanWord = word.replace(/[^a-zA-Z]/g, "");
              return legacyData.highlightWords.includes(cleanWord) ? (
                <span
                  key={i}
                  className="bg-white/90 text-gray-900 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full mx-1"
                >
                  {word.replace(",", "")}
                </span>
              ) : (
                word + " "
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
