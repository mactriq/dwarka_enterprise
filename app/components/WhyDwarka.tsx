"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import JSON Data
import whyDwarkaData from "../data/whyDwarka.json";

const WhyDwarka = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-6 lg:py-14 py-6">
      <div className="bg-[#0C1622] text-white rounded-3xl px-6 md:px-10 lg:px-14 py-16 relative overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold">
            {whyDwarkaData.heading}
          </h2>

          <Link
            href={whyDwarkaData.buttonLink}
            className="border border-white text-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
          >
            {whyDwarkaData.buttonText}
          </Link>
        </div>

        {/* Scrollable Cards */}
        <div className="relative">

          {/* Cards Wrapper */}
          <div
            ref={scrollRef}
            className="
              flex md:grid 
              md:grid-cols-3 lg:grid-cols-6 
              gap-4 
              overflow-x-auto md:overflow-visible
              no-scrollbar scroll-smooth 
              snap-x snap-mandatory
            "
          >
            {whyDwarkaData.cards.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-[240px] sm:min-w-[260px] 
                  md:min-w-0 
                  bg-white text-[#0C1622] 
                  rounded-2xl p-5 shadow-md 
                  snap-start
                "
              >
                <div className="flex flex-col gap-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />

                  <h3 className="font-semibold text-lg border-b border-gray-200 pb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#0C1622]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyDwarka;