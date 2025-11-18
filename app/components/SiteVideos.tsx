'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

const videos = [
  { url: '/gallery/videos/video1.mp4' },
  { url: '/gallery/videos/video2.mp4' },
  { url: '/gallery/videos/video3.mp4' },
  { url: '/gallery/videos/video4.mp4' },
  { url: '/gallery/videos/video5.mp4' },
  { url: '/gallery/videos/video6.mp4' },
  { url: '/gallery/videos/video7.mp4' },
  { url: '/gallery/videos/video8.mp4' },
];

export default function SiteVideos() {
  const [current, setCurrent] = useState(0);
  const [videosPerView, setVideosPerView] = useState(4);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  // RESPONSIVE VIDEOS PER VIEW
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVideosPerView(1); // mobile
      else if (window.innerWidth < 1024) setVideosPerView(2); // tablet
      else setVideosPerView(4); // desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // INFINITE PREV
  const prev = () => {
    setCurrent((idx) =>
      idx === 0 ? videos.length - videosPerView : idx - 1
    );
  };

  // INFINITE NEXT
  const next = () => {
    setCurrent((idx) =>
      idx === videos.length - videosPerView ? 0 : idx + 1
    );
  };

  // POPUP NEXT/PREV
  const popupNext = () =>
    setPopupIndex((i) => (i === null ? null : (i + 1) % videos.length));

  const popupPrev = () =>
    setPopupIndex((i) => (i === null ? null : (i - 1 + videos.length) % videos.length));

  // CALCULATE SLIDE WIDTH
  const translateX = (current * (100 / videosPerView));

  return (
    <section className="bg-[#F7F6F2] py-20 px-6 lg:px-20">
      <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-12">
        Site Videos
      </h2>

      {/* CAROUSEL */}
      <div className="relative flex items-center">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute -left-6 md:-left-10 z-10 p-2 rounded-full hover:scale-110 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        {/* VIDEO LIST */}
        <div className="overflow-hidden w-full mb-0">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {videos.map((video, i) => (
              <div
                key={i}
                className="relative bg-black flex-shrink-0 w-full sm:w-1/2 md:w-1/4 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setPopupIndex(i)}
              >
                {/* Play Icon Overlay */}
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

          {/* CLOSE */}
          <button
            onClick={() => setPopupIndex(null)}
            className="absolute top-6 right-3 lg:right-6 p-2 rounded-full hover:bg-gray-200 transition text-white hover:text-black"
          >
            <X size={32} />
          </button>

          {/* POPUP VIDEO */}
          <div className="relative w-[92%] max-w-4xl bg-black rounded-xl overflow-hidden shadow-xl">
            <video
              src={videos[popupIndex].url}
              controls
              autoPlay
              className="w-full h-[70vh] object-contain bg-black"
            />
          </div>

          {/* POPUP PREV */}
          <button
            onClick={popupPrev}
            className="absolute left-4 md:left-8 p-2 rounded-full hover:bg-gray-200 text-white hover:text-black transition"
          >
            <ChevronLeft size={32} />
          </button>

          {/* POPUP NEXT */}
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
