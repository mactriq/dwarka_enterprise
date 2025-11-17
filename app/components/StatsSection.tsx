"use client";

import Image from "next/image";
import { FC } from "react";

const StatsSection: FC = () => {
  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "1,482+", label: "Satisfied Clients" },
            { value: "350+", label: "Finished Projects" },
            { value: "85,000+", label: "Tonnage Ac’s" },
            { value: "35,000+", label: "HP" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#F7F6F2] rounded-2xl p-12 text-center transition"
            >
              <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 hover:scale-110">
                {stat.value}
              </h3>
              <p className="text-gray-700 text-xl md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center">
          <div className="relative w-full h-96 rounded-2xl overflow-hidden">
            <Image
              src="/about/hvac-worker.png"
              alt="HVAC worker"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;