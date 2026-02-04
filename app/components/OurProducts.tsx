"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Import products JSON
import productsJson from "../data/productsData.json";

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
    <section className="bg-[#F7F6F2] lg:py-20 py-16 px-6 lg:px-20 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row lg:items-center justify-between lg:mb-10 mb-6 gap-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0C1622]">
          Our products
        </h2>
        <p className="text-start md:text-right max-w-xl">
          Discover top-quality HVAC products for ultimate comfort and efficiency.
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-6 lg:bottom-[40%] bottom-[35%] -translate-y-1/2 z-20 p-2 rounded-full hover:bg-gray-200 bg-white shadow-md text-black hover:scale-110 transition"
      >
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide pb-6 snap-x snap-mandatory"
      >
        {productsJson.products.map((product, index) => (
          <div
            key={index}
            className="relative min-w-[220px] lg:min-w-[300px] bg-white rounded-3xl overflow-hidden transition-all duration-300 snap-start"
          >
            {/* Product Image */}
            <div className="relative lg:h-[380px] h-[350px] w-[300px]">
              <Image
                src={product.homeImage || product.image}
                alt={product.name}
                fill
                className="object-cover bg-[#F7F6F2]"
              />
            </div>

            {/* Text + Icon */}
            <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center">
              <h3 className="bg-white text-[#000000] p-2 rounded-2xl font-semibold text-md leading-snug max-w-[70%]">
                {product.name}
              </h3>

              <Link
                href="/product"
                className="border hover:bg-white hover:text-[#16222E] bg-[#16222E] text-white p-4 rounded-full transition"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-6 lg:bottom-[40%] bottom-[35%] -translate-y-1/2 z-20 p-2 rounded-full hover:bg-gray-200 bg-white shadow-md text-black hover:scale-110 transition"
      >
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default OurProducts;