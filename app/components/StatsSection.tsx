"use client";

import Image from "next/image";
import statsData from "../data/statsData.json";

export default function StatsSection() {
  return (
    <section className="bg-white lg:py-10 px-6 lg:px-20">
      <div className="grid md:grid-cols-2 lg:gap-12 gap-6 items-center">

        {/* LEFT — Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {statsData.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F7F6F2] rounded-2xl lg:p-12 p-6 text-center transition"
            >
              <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900 lg:mb-4 mb-2 hover:scale-110">
                {stat.value}
              </h3>
              <p className="text-gray-700 text-md md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center">
          <div className="relative w-full lg:h-96 h-62 rounded-2xl overflow-hidden">
            <Image
              src={statsData.image}
              alt="Stats Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
