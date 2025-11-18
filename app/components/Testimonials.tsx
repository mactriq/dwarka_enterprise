"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "../data/testimonials.json";

export default function TestimonialsSection() {
  const testimonials = testimonialsData.items;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 350;

  const [cardsPerView, setCardsPerView] = useState(3);

  // RESPONSIVE CARDS PER VIEW
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3); // desktop
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // NEW SMOOTH SCROLL CONTROLS
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
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="lg:mb-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:mb-10 mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {testimonialsData.heading}
          </h2>
          <p className="text-black mt-2 sm:mt-0 text-base">
            {testimonialsData.subheading}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-6 md:-left-8 z-10 p-2 rounded-full hover:bg-gray-100 text-black hover:scale-110 transition"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          {/* SCROLLABLE TRACK */}
          <div
            ref={scrollRef}
            className="overflow-x-scroll no-scrollbar scrollbar-hide w-full scroll-smooth"
          >
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#F7F6F2] flex-shrink-0 rounded-2xl p-6
                             w-[80%] sm:w-[48%] md:w-[30%]
                             transition flex flex-col justify-between"
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-2">
                    “{t.quote}”
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-6 md:-right-8 z-10 p-2 rounded-full hover:bg-gray-100 text-black hover:scale-110 transition"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}