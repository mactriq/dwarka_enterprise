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

  const openPopup = (index: number) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  const next = () => {
    setPopupIndex((i) =>
      i === null || i === filteredProjects.length - 1 ? 0 : i + 1
    );
  };

  const prev = () => {
    setPopupIndex((i) =>
      i === null || i === 0 ? filteredProjects.length - 1 : i - 1
    );
  };

  return (
    <section className="bg-white py-6 px-6 lg:px-20 lg:py-18">
      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-6 lg:mb-18">
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
        {filteredProjects.slice(0, visibleCount).map((project, i) => {
          const location = project.location ?? "Project Location";
          const [name, city] = location.split(",");

          return (
            <div
              key={i}
              onClick={() => openPopup(i)}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              {/* Image */}
              <Image
                src={project.src}
                alt={location}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition" />

              {/* Info box */}
              <div className="absolute inset-0 flex items-center justify-center px-14">
                <div className="bg-white rounded-lg w-full px-6 py-14 text-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="font-semibold text-gray-900">
                    {name?.trim()}
                  </h3>
                  {city && (
                    <p className="text-sm text-gray-600 mt-1">
                      {city.trim()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LOAD MORE */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-6 lg:mt-18">
          <button
            onClick={() => setVisibleCount((prev) => prev + 12)}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Load more
          </button>
        </div>
      )}

      {/* POPUP */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          {/* CLOSE */}
          <button
            onClick={closePopup}
            className="absolute top-6 right-4 lg:right-6 p-2 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            <X size={32} />
          </button>

          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-6 p-2 rounded-full text-white hover:bg-white hover:text-black transition z-50"
          >
            <ChevronLeft size={32} />
          </button>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-2 md:right-6 p-2 rounded-full text-white hover:bg-white hover:text-black transition z-50"
          >
            <ChevronRight size={32} />
          </button>

          {/* IMAGE + LOCATION */}
          <div className="relative w-[80%] md:w-[70%] lg:w-[50%] h-[70vh] bg-black">
            <Image
              src={filteredProjects[popupIndex].src}
              alt={filteredProjects[popupIndex].location ?? ""}
              fill
              className="object-contain"
            />

            {/* Location text */}
            {filteredProjects[popupIndex].location && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-md text-center">
                <p className="text-sm font-semibold text-gray-900">
                  {filteredProjects[popupIndex].location}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
