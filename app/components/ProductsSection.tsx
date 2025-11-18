"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

// Import your JSON
import productsJson from "../data/productsData.json";

const ProductsSection = () => {
  const { brands, categories, products } = productsJson;

  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<any>(null);

  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesBrand && matchesCategory && matchesSearch;
  });

  return (
    <section className="px-6 lg:px-20 lg:py-20 py-6">
      {/* ---------------- FILTERS ---------------- */}
      <div className="flex flex-wrap gap-4 items-center lg:mb-10 mb-6">
        
        {/* Dynamic Brand Filter */}
        <select
          className="border px-2 py-2 rounded-lg"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="All">All</option>
          {brands.map((brand: string, i: number) => (
            <option key={i} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        {/* Dynamic Category Filter */}
        <select
          className="border px-2 py-2 rounded-lg"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((cat: string, i: number) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search (optional, currently hidden but works) */}
        {/* 
        <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        */}
      </div>

      {/* ---------------- PRODUCT GRID ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden cursor-pointer group relative"
            onClick={() => setActiveProduct(product)}
          >
            {/* Image */}
            <div className="relative w-full lg:h-[400px] h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain bg-gradient-to-t from-[#16222E] to-[#ffffff]"
              />
            </div>

            {/* Bottom Bar OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full px-4 bottom-4 flex justify-between items-center rounded-t-3xl">
              <h3 className="lg:text-lg text-md font-medium max-w-[75%] leading-snug text-white">
                {product.name}
              </h3>

              <button
                className="border text-[#16222E] bg-white hover:bg-[#16222E] hover:text-white p-4 rounded-full transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProduct(product);
                }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------- PRODUCT POPUP ---------------- */}
      {activeProduct && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl lg:p-10 p-6 w-full max-w-7xl relative border max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-[#0C1622] text-white p-2 rounded-full"
              onClick={() => setActiveProduct(null)}
            >
              <IoClose size={22} />
            </button>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 gap-6 items-start">

              {/* LEFT SECTION */}
              <div className="flex flex-col h-full space-y-2">
                <span className="px-4 py-2 bg-white border rounded-full text-sm w-fit">
                  {activeProduct.category}
                </span>

                <h2 className="text-3xl font-bold leading-snug">
                  {activeProduct.name}
                </h2>

                <p className="text-gray-700 leading-relaxed mt-auto">
                  {activeProduct.description}
                </p>
              </div>

              {/* MIDDLE IMAGE */}
              <div className="flex justify-center">
                <Image
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  width={600}
                  height={600}
                  className="w-full lg:h-[65vh] h-[30vh] object-contain bg-[#F7F6F2] rounded-2xl"
                />
              </div>

              {/* RIGHT SECTION */}
              <div className="flex flex-col h-full">

                {/* Features */}
                <ul className="list-disc pl-5 lg:space-y-2 text-gray-800">
                  {activeProduct.features.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-col space-y-2 mt-auto pt-6">
                  <a
                    href={activeProduct.broucher}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border hover:bg-white hover:text-[#16222E] bg-[#16222E] text-white px-6 py-3 rounded-full flex items-center justify-between"
                  >
                    View Catalogue <FaArrowRight />
                  </a>

                  <Link
                    href="/contact"
                    className="border hover:bg-white hover:text-[#16222E] bg-[#16222E] text-white px-6 py-3 rounded-full flex items-center justify-between"
                  >
                    Get in Touch <FaArrowRight />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;