"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const products = [
  { src: "/products/split-ac.png", name: "Split Air Conditioner" },
  { src: "/products/1way-ac.png", name: "1 Way Air Conditioner" },
  { src: "/products/4way-ac.png", name: "4 Way Air Conditioner" },
  { src: "/products/duct-ac.png", name: "Duct Air Conditioner" },
  { src: "/products/precision-ac.png", name: "Precision AC" },
  { src: "/products/vrf-system.png", name: "VRF / VRV System" },
  { src: "/products/chiller.png", name: "Chiller Base System" },
  { src: "/products/multi-i.png", name: "Multi I home solution" },
];

const OurProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollAmount = 350;

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F7F6F2] py-20 px-6 lg:px-20 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0C1622]">
          Our products
        </h2>
        <p className="text-center md:text-right max-w-xl">
          Discover top-quality HVAC products for ultimate comfort and efficiency.
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full hover:bg-gray-200 bg-white shadow-md text-black hover:scale-110 transition"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide pb-6 snap-x snap-mandatory"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="relative min-w-[250px] sm:min-w-[300px] lg:min-w-[300px] bg-white rounded-3xl overflow-hidden transition-all duration-300 snap-start"
          >
            {/* Product Image */}
            <div className="relative h-[380px] w-[300px]">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover bg-[#F7F6F2]"
              />
            </div>

            {/* Text + Icon */}
            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center">
              <h3 className="bg-white p-2 rounded-2xl font-semibold text-md leading-snug max-w-[70%]">
                {product.name}
              </h3>

              <Link  href="/product" className="border hover:bg-white hover:text-[#16222E] bg-[#16222E] text-white p-4 rounded-full transition">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full hover:bg-gray-200 bg-white shadow-md text-black hover:scale-110 transition"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default OurProducts;