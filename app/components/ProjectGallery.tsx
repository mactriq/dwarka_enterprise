'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Hospitals', 'Industries', 'Education', 'Corporate & Government', 'Other'];

const projects = [
  { src: '/projects/hospitals/hospital1.jpg', category: 'Hospitals' },
  { src: '/projects/hospitals/hospital2.jpg', category: 'Hospitals' },
  { src: '/projects/industries/industry1.jpg', category: 'Industries' },
  { src: '/projects/education/education6.jpg', category: 'Education' },
  { src: '/projects/hospitals/hospital10.png', category: 'Hospitals' },
  { src: '/projects/industries/industry5.jpg', category: 'Industries' },
  { src: '/projects/industries/industry2.png', category: 'Industries' },
  { src: '/projects/hospitals/hospital5.png', category: 'Hospitals' },
  { src: '/projects/education/education1.png', category: 'Education' },
  { src: '/projects/industries/industry4.png', category: 'Industries' },
  { src: '/projects/corporate/corporate10.png', category: 'Corporate & Government' },
  { src: '/projects/hospitals/hospital9.png', category: 'Hospitals' },
  { src: '/projects/education/education2.png', category: 'Education' },
  { src: '/projects/hospitals/hospital6.jpg', category: 'Hospitals' },
  { src: '/projects/corporate/corporate1.jpg', category: 'Corporate & Government' },
  { src: '/projects/corporate/corporate2.jpg', category: 'Corporate & Government' },
  { src: '/projects/corporate/corporate3.jpg', category: 'Corporate & Government' },
  { src: '/projects/education/education5.jpg', category: 'Education' },
  { src: '/projects/hospitals/hospital7.png', category: 'Hospitals' },
  { src: '/projects/corporate/corporate9.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry3.jpg', category: 'Industries' },
  { src: '/projects/hospitals/hospital3.png', category: 'Hospitals' },
  { src: '/projects/other/other3.jpg', category: 'Other' },
  { src: '/projects/education/education3.jpg', category: 'Education' },
  { src: '/projects/other/other10.png', category: 'Other' },
  { src: '/projects/corporate/corporate4.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry6.jpg', category: 'Industries' },
  { src: '/projects/other/other4.png', category: 'Other' },
  { src: '/projects/hospitals/hospital4.png', category: 'Hospitals' },
  { src: '/projects/corporate/corporate5.png', category: 'Corporate & Government' },
  { src: '/projects/other/other5.png', category: 'Other' },
  { src: '/projects/hospitals/hospital8.png', category: 'Hospitals' },
  { src: '/projects/education/education4.png', category: 'Education' },
  { src: '/projects/other/other6.png', category: 'Other' },
  { src: '/projects/other/other1a.png', category: 'Other' },
  { src: '/projects/industries/industry7.png', category: 'Industries' },
  { src: '/projects/corporate/corporate6.png', category: 'Corporate & Government' },
  { src: '/projects/other/other7.png', category: 'Other' },
  { src: '/projects/corporate/corporate7.jpg', category: 'Corporate & Government' },
  { src: '/projects/industries/industry8.png', category: 'Industries' },
  { src: '/projects/other/other8.png', category: 'Other' },
  { src: '/projects/corporate/corporate8.png', category: 'Corporate & Government' },
  { src: '/projects/education/education7.jpg', category: 'Education' },
  { src: '/projects/other/other9.png', category: 'Other' },
  { src: '/projects/other/other2.png', category: 'Other' },
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  // popup
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory]);

  const openPopup = (index: number) => {
    setPopupIndex(index);
  };

  const closePopup = () => {
    setPopupIndex(null);
  };

  const next = () => {
    setPopupIndex((i) => {
      if (i === null) return 0;
      return i === filteredProjects.length - 1 ? 0 : i + 1;
    });
  };

  const prev = () => {
    setPopupIndex((i) => {
      if (i === null) return 0;
      return i === 0 ? filteredProjects.length - 1 : i - 1;
    });
  };

  return (
    <section className="py-18 px-6 lg:px-20">
      <div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-3 mb-18">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 rounded-lg text-sm font-medium border transition ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, i) => (
            <div
              key={i}
              onClick={() => openPopup(i)}
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <Image
                src={project.src}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Show More */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-18">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Show more
            </button>
          </div>
        )}
      </div>

      {/* POPUP */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
            onClick={closePopup}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
            onClick={prev}>
            <ChevronLeft size={32} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 md:right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
            onClick={next}>
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%] h-[70vh]">
            <Image
              src={filteredProjects[popupIndex].src}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}