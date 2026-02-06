"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "../data/testimonials.json";

export default function TestimonialsSection() {
  const original = testimonialsData.items;

  // 🔁 3x duplicate for real infinity
  const testimonials = [...original, ...original, ...original];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(350);

  // RESPONSIVE CARD WIDTH
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(window.innerWidth * 0.85);
      else if (window.innerWidth < 1024) setCardWidth(window.innerWidth * 0.48);
      else setCardWidth(window.innerWidth * 0.30);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // 🚀 START FROM MIDDLE
  useEffect(() => {
    if (scrollRef.current) {
      const middle =
        (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;
      scrollRef.current.scrollLeft = middle;
    }
  }, []);

  // ♻️ RESET SCROLL SILENTLY (CORE LOGIC)
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const threshold = cardWidth * 2;

    if (el.scrollLeft < threshold) {
      el.scrollLeft += original.length * (cardWidth + 24);
    }

    if (el.scrollLeft > max - threshold) {
      el.scrollLeft -= original.length * (cardWidth + 24);
    }
  };

  const next = () => {
    scrollRef.current?.scrollBy({
      left: cardWidth + 24,
      behavior: "smooth",
    });
  };

  const prev = () => {
    scrollRef.current?.scrollBy({
      left: -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="lg:mb-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 lg:mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {testimonialsData.heading}
          </h2>
          <p className="text-black mt-2 sm:mt-0">
            {testimonialsData.subheading}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute -left-6 md:-left-8 z-10 p-2 rounded-full bg-gray-100 shadow hover:scale-110 transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* TRACK */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-scroll no-scrollbar w-full scrollbar-hide"
          >
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{ width: cardWidth }}
                  className="bg-[#F7F6F2] flex-shrink-0 rounded-2xl p-6
                             flex flex-col justify-between"
                >
                  <p className="text-gray-700 leading-relaxed">
                    “{t.quote}”
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute -right-6 md:-right-8 z-10 p-2 rounded-full bg-gray-100 shadow hover:scale-110 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
