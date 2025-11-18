'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import siteVideosData from '../data/siteVideos.json';

export default function SiteVideos() {
  const { videos } = siteVideosData;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 350; // SAME AS PRODUCTS SECTION

  const [videosPerView, setVideosPerView] = useState(4);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVideosPerView(1);
      else if (window.innerWidth < 1024) setVideosPerView(2);
      else setVideosPerView(4);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SMOOTH SCROLL NEXT
  const next = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  // SMOOTH SCROLL PREV
  const prev = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  // POPUP CONTROLS
  const popupNext = () =>
    setPopupIndex((i) => (i === null ? null : (i + 1) % videos.length));

  const popupPrev = () =>
    setPopupIndex((i) => (i === null ? null : (i - 1 + videos.length) % videos.length));

  return (
    <section className="bg-[#F7F6F2] py-20 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-12">
        Site Videos
      </h2>

      {/* WRAPPER */}
      <div className="relative flex items-center">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute -left-6 md:-left-10 z-10 p-2 rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        {/* VIDEO SCROLLER */}
        <div className="overflow-hidden w-full">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-scroll no-scrollbar scrollbar-hide scroll-smooth pb-4"
          >
            {videos.map((video, i) => (
              <div
                key={i}
                className="relative bg-black flex-shrink-0 w-full sm:w-1/2 md:w-1/4 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setPopupIndex(i)}
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

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute -right-6 md:-right-10 z-10 p-2 rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* POPUP */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
          <button
            onClick={() => setPopupIndex(null)}
            className="absolute top-6 right-3 lg:right-6 p-2 rounded-full hover:bg-gray-200 transition text-white hover:text-black"
          >
            <X size={32} />
          </button>

          <div className="relative w-[92%] max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl">
            <video
              src={videos[popupIndex].url}
              controls
              autoPlay
              className="w-full h-[75vh] object-contain bg-black"
            />
          </div>

          <button
            onClick={popupPrev}
            className="absolute left-4 md:left-8 p-2 rounded-full hover:bg-gray-200 text-white hover:text-black transition"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={popupNext}
            className="absolute right-4 md:right-8 p-2 rounded-full hover:bg-gray-200 text-white hover:text-black transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}