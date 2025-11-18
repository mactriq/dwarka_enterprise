"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import JSON
import galleryData from "../data/galleryData.json";

export default function GalleryGrid() {
  const { galleryImages } = galleryData;

  const [visibleCount, setVisibleCount] = useState(12);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const nextSlide = () => {
    setPopupIndex((i) => {
      if (i === null) return null;
      return i === galleryImages.length - 1 ? 0 : i + 1;
    });
  };

  const prevSlide = () => {
    setPopupIndex((i) => {
      if (i === null) return null;
      return i === 0 ? galleryImages.length - 1 : i - 1;
    });
  };

  return (
    <section className="lg:py-20 py-6 px-6 lg:px-20 bg-gray-50">

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.slice(0, visibleCount).map((src, i) => (
          <div
            key={i}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setPopupIndex(i)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < galleryImages.length && (
        <div className="flex justify-center lg:mt-20 mt-6">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Load more
          </button>
        </div>
      )}

      {/* POPUP */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

          {/* CLOSE */}
          <button
            onClick={() => setPopupIndex(null)}
            className="absolute top-6 lg:right-6 right-2 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          {/* PREV */}
          <button
            onClick={prevSlide}
            className="z-50 absolute left-0 md:left-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* NEXT */}
          <button
            onClick={nextSlide}
            className="z-50 absolute right-0 md:right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <ChevronRight size={32} />
          </button>

          {/* IMAGE POPUP */}
          <div className="relative w-[85%] md:w-[70%] lg:w-[50%] h-[70vh]">
            <Image
              src={galleryImages[popupIndex]}
              alt="Popup"
              fill
              className="object-contain rounded-lg"
            />
          </div>

        </div>
      )}
    </section>
  );
}