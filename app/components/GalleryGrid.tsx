'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  '/gallery/work1.jpeg',
  '/gallery/work2.png',
  '/gallery/work3.jpeg',
  '/gallery/work4.jpeg',
  '/gallery/work5.jpeg',
  '/gallery/work6.jpeg',
  '/gallery/work7.jpeg',
  '/gallery/work8.jpeg',
  '/gallery/work9.jpeg',
  '/gallery/work10.jpeg',
  '/gallery/work11.jpeg',
  '/gallery/work12.jpeg',
  '/gallery/work13.jpeg',
  '/gallery/work14.jpeg',
  '/gallery/work15.jpeg',
  '/gallery/work16.jpeg',
];

export default function GalleryGrid() {
  const [visibleCount, setVisibleCount] = useState(12);

  // POPUP STATE
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  // NEXT slide (loop)
  const nextSlide = () => {
    setPopupIndex(i => {
      if (i === null) return null;
      return i === galleryImages.length - 1 ? 0 : i + 1;
    });
  };

  // PREV slide (loop)
  const prevSlide = () => {
    setPopupIndex(i => {
      if (i === null) return null;
      return i === 0 ? galleryImages.length - 1 : i - 1;
    });
  };

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50">

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

      {/* SHOW MORE BUTTON */}
      {visibleCount < galleryImages.length && (
        <div className="flex justify-center mt-20">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Show more
          </button>
        </div>
      )}

      {/* POPUP OVERLAY */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setPopupIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
          >
            <ChevronRight size={32} />
          </button>

          {/* POPUP IMAGE */}
          <div className="relative w-full max-w-4xl aspect-[4/3]">
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