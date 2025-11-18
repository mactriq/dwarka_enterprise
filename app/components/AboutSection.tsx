"use client";

import { FC } from "react";
import Link from "next/link";

const AboutSection: FC = () => {
  return (
    <section className="w-full">

      {/* ---------------------- VISION ---------------------- */}
      <div
        className="relative group bg-cover bg-center py-20 px-6 lg:px-20 text-white border-b"
        style={{ backgroundImage: "url('/about/our-vision.png')" }}
      >
        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/40
          group-hover:bg-[#16222E] group-hover:bg-opacity-95
          transition-all duration-300"></div>

        {/* CONTENT */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To be India’s top HVAC partner, driving innovation, sustainability,
              and comfort for a brighter, greener future.
            </p>
          </div>

          <Link
            href="/product"
            className="w-auto self-start md:self-auto border border-white text-white hover:text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
          >
            Explore Our Products →
          </Link>
        </div>
      </div>

      {/* ---------------------- MISSION ---------------------- */}
      <div
        className="relative group bg-cover bg-center py-20 px-6 lg:px-20 text-white border-b"
        style={{ backgroundImage: "url('/about/our-mission.png')" }}
      >
        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/40
          group-hover:bg-[#16222E] group-hover:bg-opacity-95
          transition-all duration-300"></div>

        {/* CONTENT */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Delivering excellence in HVAC solutions, we create healthier,
              efficient indoor spaces, exceeding client expectations across India.
            </p>
          </div>

          <Link
            href="/project"
            className="w-auto self-start md:self-auto border border-white text-white hover:text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
          >
            See Our Projects →
          </Link>
        </div>
      </div>

      {/* ---------------------- CORE VALUES ---------------------- */}
      <div
        className="relative group bg-cover bg-center py-20 px-6 lg:px-20 text-white"
        style={{ backgroundImage: "url('/about/core-values.png')" }}
      >
        {/* HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/50
          group-hover:bg-[#16222E] group-hover:bg-opacity-95
          transition-all duration-300"></div>

        {/* CONTENT */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-2">Core Values</h2>
            <p className="text-lg leading-relaxed">
              Excellence, Innovation, Customer Focus, Integrity, Sustainability,
              Safety, Teamwork, Adaptability, Community Engagement.
            </p>
          </div>

          <Link
            href="/contact"
            className="w-auto self-start md:self-auto border border-white text-white hover:text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
          >
            Get in Touch →
          </Link>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;