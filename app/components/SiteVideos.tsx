'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import siteVideosData from '../data/siteVideos.json';

export default function SiteVideos() {
  const original = siteVideosData.videos;

  // 🔁 Duplicate for infinite illusion
  const videos = [...original, ...original, ...original];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(320);

  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  // RESPONSIVE CARD WIDTH
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(window.innerWidth * 0.85);
      else if (window.innerWidth < 1024) setCardWidth(window.innerWidth * 0.48);
      else setCardWidth(window.innerWidth * 0.24);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // 🚀 START FROM CENTER
  useEffect(() => {
    if (scrollRef.current) {
      const middle =
        (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2;
      scrollRef.current.scrollLeft = middle;
    }
  }, []);

  // ♻️ INFINITE RESET LOGIC
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
      behavior: 'smooth',
    });
  };

  const prev = () => {
    scrollRef.current?.scrollBy({
      left: -(cardWidth + 24),
      behavior: 'smooth',
    });
  };

  // POPUP CONTROLS (ORIGINAL INDEX)
  const popupNext = () =>
    setPopupIndex((i) =>
      i === null ? null : (i + 1) % original.length
    );

  const popupPrev = () =>
    setPopupIndex((i) =>
      i === null ? null : (i - 1 + original.length) % original.length
    );

  return (
    <section className="bg-[#F7F6F2] py-20 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-12">
        Site Videos
      </h2>

      {/* WRAPPER */}
      <div className="relative flex items-center">

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute -left-6 md:-left-10 z-10 p-2 rounded-full bg-gray-100 shadow hover:scale-110 transition"
        >
          <ChevronLeft size={32} />
        </button>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-scroll scrollbar-hide w-full"
        >
          <div className="flex gap-6 pb-4">
            {videos.map((video, i) => (
              <div
                key={i}
                style={{ width: cardWidth }}
                className="relative bg-black flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setPopupIndex(i % original.length)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition">
                  <Play size={32} className="text-white opacity-90" />
                </div>

                <video
                  src={video.url}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute -right-6 md:-right-10 z-10 p-2 rounded-full bg-gray-100 shadow hover:scale-110 transition"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* POPUP */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <button
            onClick={() => setPopupIndex(null)}
            className="absolute top-6 right-4 p-2 rounded-full text-white hover:bg-gray-200 hover:text-black transition"
          >
            <X size={32} />
          </button>

          <div className="relative w-[92%] max-w-4xl bg-black rounded-xl overflow-hidden">
            <video
              src={original[popupIndex].url}
              controls
              autoPlay
              className="w-full h-[75vh] object-contain bg-black"
            />
          </div>

          <button
            onClick={popupPrev}
            className="absolute left-4 md:left-8 p-2 rounded-full text-white hover:bg-gray-200 hover:text-black transition"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={popupNext}
            className="absolute right-4 md:right-8 p-2 rounded-full text-white hover:bg-gray-200 hover:text-black transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
