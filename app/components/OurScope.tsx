"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

// Import JSON data
import scopeData from "../data/scopeData.json";

const OurScope = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      {/* Section Heading */}
      <h2 className="text-4xl lg:text-5xl font-bold text-[#0C1622] lg:mb-10 mb-6">
        Our Scope
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 gap-0 items-start">
        {/* Left Image from JSON */}
        <div className="relative w-full lg:h-[590px] h-[300px] rounded-lg overflow-hidden">
          <Image
            src={scopeData.leftImage}
            alt="Scope Cover Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Accordion */}
        <div className="flex flex-col">
          {scopeData.items.map((item, index) => (
            <div key={index} className="border-b border-[#16222E] py-6">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#AA2022] font-bold text-3xl">
                    {item.number}
                  </span>
                  <h3 className="text-[#0C1622] font-semibold text-xl">
                    {item.title}
                  </h3>
                </div>

                {activeIndex === index ? (
                  <FiChevronUp className="text-[#0C1622]" />
                ) : (
                  <FiChevronDown className="text-[#0C1622]" />
                )}
              </button>

              {/* Smooth Animation Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out 
                ${activeIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
              >
                <p className="text-sm pl-10 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurScope;