"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const scopeItems = [
  {
    number: "01",
    title: "Survey & Inspection",
    description:
      "Preliminary site visit and discussion with Architect / Employer and project feasibility survey. Preparation of preliminary designs for the Employer’s / Architect’s approval for which system is more efficient and economical for the Project.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "Provide a variety of design options focused on your project requirements & Comfort. Giving Necessary provision to architect for plant room, Pump room, AHU rooms, Piping and Ducting Sizes, cable tray and its routing etc.",
  },
  {
    number: "03",
    title: "Installation",
    description:
      "With over 20 years of HVAC Installation experience, out technical expertise and project management processes ensure that every system is installed on time, per specifications, and is operating at peak performance from the start.",
  },
  {
    number: "04",
    title: "Maintenance Contracts",
    description:
      "To help our customers manage their HVAC maintenance costs in a more predictable fashion, Balaji offers Maintenance Contracts (AMC). AMCs operate under an estimated budget for maintenance work for a specific scope of work for specific period of time that is often defined through a collaborative effort between our customer and Balaji.",
  },
  {
    number: "05",
    title: "Service & Maintenance",
    description:
      "Whether it is scheduled preventative maintenance, break-fix, or emergency maintenance, Balaji’s “self-performing” expert field technicians are ready to respond to your needs, 24/7.",
  },
  {
    number: "06",
    title: "Remodels",
    description:
      "Our highly-trained Energy Optimization team will identify and execute significant cost - saving opportunities for your systems. Not Just Replace We Recreate the new opportunity for customers.",
  },
];

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
        {/* Left Image */}
        <div className="relative w-full lg:h-[590px] h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/about/survey.png"
            alt="HVAC Installation"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Accordion */}
        <div className="flex flex-col">
          {scopeItems.map((item, index) => (
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