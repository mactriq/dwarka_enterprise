"use client";
import { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const whyData = [
  {
    icon: "/about/icons/expertise.png",
    title: "Expertise",
    desc: "Our seasoned engineers provide HVAC solutions for optimal performance.",
  },
  {
    icon: "/about/icons/quality.png",
    title: "Quality Assurance",
    desc: "Partnering with LG ensures industry-leading products and standards.",
  },
  {
    icon: "/about/icons/customer.png",
    title: "Customer-Centric",
    desc: "We prioritize your unique needs and exceed expectations.",
  },
  {
    icon: "/about/icons/sustainability.png",
    title: "Sustainability",
    desc: "We reduce your carbon footprint and operational costs.",
  },
  {
    icon: "/about/icons/innovation.png",
    title: "Innovation",
    desc: "Stay ahead with cutting-edge, energy-efficient technology.",
  },
  {
    icon: "/about/icons/safety.png",
    title: "Safety",
    desc: "Our rigorous safety protocols and adaptability guarantee satisfaction.",
  },
];

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
    <section className="px-6 py-16">
      <div className="bg-[#0C1622] text-white rounded-3xl px-6 md:px-10 lg:px-14 py-16 relative overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Dwarka</h2>
          <Link
            href="/about"
            className="border border-white text-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white transition whitespace-nowrap"
          >
            Know More →
          </Link>
        </div>

        {/* Scroll Buttons (Mobile Only) */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full 
          md:hidden"
        >
          <FiChevronLeft size={28} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full 
          md:hidden"
        >
          <FiChevronRight size={28} />
        </button>

        {/* Cards Section */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 
              gap-4 
              overflow-x-auto md:overflow-visible 
              no-scrollbar scroll-smooth
            "
          >
            {whyData.map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white text-[#0C1622] rounded-2xl p-5 shadow-md"
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