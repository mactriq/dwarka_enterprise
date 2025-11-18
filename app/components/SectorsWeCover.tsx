"use client";
import Image from "next/image";
import React from "react";

interface Sector {
  image: string;
  title: string;
}

const sectors: Sector[] = [
  { image: "/sectors/manufacturing.png", title: "MANUFACTURING INDUSTRIES" },
  { image: "/sectors/education.png", title: "EDUCATION INDUSTRIES" },
  { image: "/sectors/hospital.png", title: "HOSPITAL" },
  { image: "/sectors/hotel.png", title: "HOTEL AND RESORTS" },
  { image: "/sectors/community.png", title: "COMMUNITY HALL" },
  { image: "/sectors/medicine.png", title: "PHARMACEUTICAL" },
  { image: "/sectors/residential.png", title: "RESIDENTIALS" },
  { image: "/sectors/bank.png", title: "BANKS" },
  { image: "/sectors/office.png", title: "COMMERCIAL OFFICES" },
  { image: "/sectors/entertainment.png", title: "ENTERTAINMENT INDUSTRY" },
];

const SectorsWeCover = () => {
  return (
    <section className="bg-[#F7F6F2] lg:py-16 py-10 overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#0C1622] mb-10">
          Sectors we Cover
        </h2>

        {/* Inline CSS animation (self-contained) */}
        <style jsx>{`
          @keyframes marqueeScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-30%);
            }
          }
          .marquee {
            display: flex;
            width: max-content;
            animation: marqueeScroll 30s linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee gap-10">
            {/* Repeat the items twice for seamless loop */}
            {[...sectors, ...sectors].map((sector, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-[120px]"
              >
                <div className="lg:w-24 lg:h-24 w-18 h-18 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    width={88}
                    height={88}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-[#0C1622] text-center leading-tight">
                  {sector.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsWeCover;