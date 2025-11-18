"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import galleryData from "../data/projectGallery.json";

export default function ProjectGallery() {
  const { categories, projects } = galleryData;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
    <section className="lg:py-18 py-6 px-6 lg:px-20">
      <div>
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-start gap-3 lg:mb-18 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-3 rounded-lg text-sm font-medium border transition ${
                selectedCategory === category
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
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

        {/* LOAD MORE */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center lg:mt-18 mt-6">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {/* POPUP */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 lg:right-6 right-2 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition"
            onClick={closePopup}
          >
            <X size={32} />
          </button>

          {/* PREV */}
          <button
            className="absolute left-0 md:left-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition z-50"
            onClick={prev}
          >
            <ChevronLeft size={32} />
          </button>

          {/* NEXT */}
          <button
            className="absolute right-0 md:right-6 p-2 rounded-full hover:bg-gray-100 hover:text-black text-white hover:scale-110 transition z-50"
            onClick={next}
          >
            <ChevronRight size={32} />
          </button>

          {/* IMAGE */}
          <div className="relative w-[80%] md:w-[70%] lg:w-[50%] h-[70vh]">
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
