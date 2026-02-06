"use client";

import Image from "next/image";
import founderData from "../data/founderData.json";

export default function FoundersNote() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      {/* Section Title */}
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
        {founderData.title}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        {founderData.leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-[#F7F5EF] rounded-2xl p-6 md:p-10 flex flex-col items-center text-left"
          >
            {/* Image */}
            <div className="w-50 h-60 rounded-2xl overflow-hidden mb-6">
              <Image
                src={leader.image}
                alt={leader.name}
                width={260}
                height={260}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900">
              {leader.name}
            </h3>

            {/* Designation */}
            <p className="text-sm text-gray-600 mb-6">
              {leader.designation}
            </p>

            {/* Content */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {leader.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note from JSON */}
      {founderData.footerNote && (
        <p className="text-center text-gray-700 mt-8">
          {founderData.footerNote}
        </p>
      )}
    </section>
  );
}