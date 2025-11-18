"use client";

import Link from "next/link";
import aboutSectionData from "../data/aboutSectionData.json";

export default function AboutSection() {
  return (
    <section className="w-full">

      {aboutSectionData.sections.map((item, index) => (
        <div
          key={index}
          className="relative group bg-cover bg-center py-20 px-6 lg:px-20 text-white border-b last:border-b-0"
          style={{ backgroundImage: `url('${item.background}')` }}
        >
          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-black/40
            group-hover:bg-[#16222E] group-hover:bg-opacity-95
            transition-all duration-300"
          ></div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col md:max-w-3xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            <Link
              href={item.buttonLink}
              className="w-auto self-start md:self-auto border border-white text-white hover:text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
            >
              {item.buttonText}
            </Link>
          </div>
        </div>
      ))}

    </section>
  );
}