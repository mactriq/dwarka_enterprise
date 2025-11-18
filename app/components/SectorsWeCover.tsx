"use client";
import Image from "next/image";
import sectors from "../data/sectors.json";

interface Sector {
  image: string;
  title: string;
}

const SectorsWeCover = () => {
  return (
    <section className="bg-[#F7F6F2] lg:py-16 py-10 overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#0C1622] mb-10">
          Sectors we Cover
        </h2>

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

        <div className="relative w-full overflow-hidden">
          <div className="marquee lg:gap-16 gap-10">
            {[...sectors, ...sectors].map((sector: Sector, index: number) => (
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