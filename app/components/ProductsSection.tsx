"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const productsData = [
  {
    category: "Split AC",
    brand: "LG",
    name: "Split Air Conditioner",
    image: "/products/display-product/split-AC.png",
    description:
      "A split air conditioner is an efficient cooling system that consists of two separate units: an indoor unit and an outdoor unit. It is a popular alternative to window ACs because it offers quiet operation and more flexible installation options.",
    features: [
      "Quiet operation",
      "Energy efficiency",
      "Aesthetics",
      "Installation flexibility",
      "Improved air quality",
      ],
    broucher: "/products/broucher/RAC 2025 Digital catalogue.pdf",
  },
  {
    category: "Cassette AC",
    brand: "Voltas",
    name: "1 way Cassette Air Conditioner",
    image: "/products/display-product/1-way-ac.png",
    description:
      "Bringing you an ideal cooling solution, the 1 Way Cassette is a great choice for different businesses. With quality technology and premium designs, discover how this air conditioner will keep your office comfortable.",
    features: [
      "Slim & Compact Indoor Unit",
      "4 Way Air Blow Auto Control",
      "Comfort Cooling (Direct / Indirect Wind)",
    ],
    broucher: "/products/broucher/2025 CST Leaflet.pdf",
  },
  {
    category: "Cassette AC",
    brand: "LG",
    name: "4 way Cassette Air Conditioner",
    image: "/products/display-product/4-way-ac.png",
    description:
      "The ceiling-mounted cassette provides a comfortable and aesthetically pleasing environment, making it an ideal asset for your business. The cassette-type indoor unit also purifies the air, ensuring a fresher and healthier atmosphere.",
    features: [
      "Stylish Design Panel",
      "Compact Size",
      "Convenient Panel Installation",
      "High Ceiling Mode",
      "Independent Control of Air Flow",
    ],
    broucher: "/products/broucher/2025 Light Commercial Catalogue.pdf",
  },
  {
    category: "Duct AC",
    brand: "Voltas",
    name: "Duct Air Conditioner",
    image: "/products/display-product/duct-ac.png",
    description:
      "The ceiling concealed duct is a discreet cooling and heating solution that provides optimal temperature control without affecting interior aesthetics.",
    features: [
      "Easy Service & Maintenance",
      "E.S.P. (External Static Pressure) Control",
      "Minimized Height",
      "High Energy Efficiency At Part Loads",
      "Higher Efficiency With Brushless Dc (Bldc) Motors",
      "High Energy Efficiency",
      "Long Distance Piping",
    ],
    broucher: "/products/broucher/Inverter Duct Leaflet 2024.pdf",
  },
  {
    category: "HVAC",
    brand: "General",
    name: "VRF / VRV System",
    image: "/products/display-product/vrv-system.png",
    description:
      "Latest Trend In HVAC Technology. Variable Refrigerant Flow (VRF) is a latest trend in HVAC technology invented in Japan which helps in reducing electricity consumption by regualting refrigerant flow of liquid. Hence, the machine performs efficiently according to human occupancy, oreintation, direction of sun, heat generating equipment with a lesser pay back period.",
    features: [
      "Energy efficiency",
      "Quiet Operation",
      "Heat & Cool Simultanneously",
      "Constant Comfort",
      "Requires Less Space",
      "Morden Controls",
    ],
    broucher: "/products/broucher/2025 Multi V 5 Small Catalogue.pdf",
  },
  {
    category: "HVAC",
    brand: "O.G. Heavy Duty",
    name: "Precision Air Conditioner",
    image: "/products/display-product/precision-ac.png",
    description:
      "Keep Data & server Centre cool & process fast Precision Air Conditioning System is mostly known as PACs that cools Data centres, Server rooms, IT equipment.",
    features: [
      "Precise humidity control",
      "Design for 24 x 7, 365 days continuous operation",
      "Better faster Morden control",
      "Remotely accessible",
    ],
    broucher: "/products/broucher/Carrier Inverter Package AC.pdf",
  },
  {
    category: "HVAC",
    brand: "Carrier",
    name: "Chiller Base HVAC System",
    image: "/products/display-product/chiller.png",
    description:
      "One Company, Tons of Capacity. With a wide range of types, capacities and sustainable refrigerant options, we are leader in chiller options. With non-ozone depleting refrigerant, simple installation superior efficiency & powerful controls, these units are ideal for both replacement & new construction projects. Innovative chiller solutions are designed to bring efficient, reliable cooling to all types of large commercial applications.",
    features: [
      "Longer Life Span",
      "Quiet Operation",
      "Constant Comfort",
      "Cost Effective",
      "Eco-Friendly",
    ],
    broucher: "/products/broucher/Hydrokit.pdf",
  },
  {
    category: "HVAC",
    brand: "Toshiba",
    name: "Multi I home solution",
    image: "/products/display-product/multi-i.png",
    description:
      "A versatile and efficient multi-zone HVAC system designed to power several indoor units from one outdoor unit, providing personalized comfort for every room. With quiet operation, advanced inverter technology, and a compact footprint, it offers an ideal solution for modern homes seeking reliable, energy-saving climate control.",
    features: [
      "Multi-Zone Temperature Control",
      "High Energy Efficiency with Inverter Technology",
      "Quiet Indoor & Outdoor Operation",
      "Compact, Space-Saving Design",
      "Eco-Friendly Refrigerant Options",
    ],
    broucher: "/products/broucher/SAC_Multi Home_2025_Catalogue.pdf",
  },
];

const ProductsSection = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<any>(null);

  const filteredProducts = productsData.filter((product) => {
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesBrand && matchesCategory && matchesSearch;
  });

  return (
    <section className="px-6 lg:px-20 lg:py-20 py-6">
      {/* ---------------- FILTERS ---------------- */}
      <div className="flex flex-wrap gap-4 items-center lg:mb-10 mb-6">
        {/* Brand */}
        <select
          className="border px-2 py-2 rounded-lg"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option>All</option>
          <option>LG</option>
          <option>Voltas</option>
          <option>Toshiba</option>
          <option>Carrier</option>
          <option>General</option>
          <option>O.G. Heavy Duty</option>
        </select>

        {/* Category */}
        <select
          className="border px-2 py-2 rounded-lg"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All</option>
          <option>Cassette AC</option>
          <option>Split AC</option>
          <option>Duct AC</option>
          <option>HVAC</option>
        </select>

        {/* Search */}
        {/* <input
          type="text"
          placeholder="Search"
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
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

            {/* Bottom Bar OVERLAYED */}
            <div className="absolute bottom-0 left-0 w-full px-4 bottom-4 flex justify-between items-center rounded-t-3xl">
              <h3 className="lg:text-lg text-md font-medium max-w-[75%] leading-snug text-white">
                {product.name}
              </h3>

              <button
                className="border text-[#16222E] bg-white hover:bg-[#16222E] hover:text-white p-4 rounded-full transition"
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click
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
            <div className="bg-white rounded-3xl lg:p-10 p-6 w-full max-w-7xl relative border">

            {/* Close Button */}
            <button
                className="absolute top-6 right-6 bg-[#0C1622] text-white p-2 rounded-full"
                onClick={() => setActiveProduct(null)}
            >
                <IoClose size={22} />
            </button>

            {/* 3 GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 gap-6 items-start">

                {/* ---------------- LEFT SECTION ---------------- */}
                <div className="flex flex-col h-full space-y-2">

                    {/* Category pill fits text width */}
                    <span className="px-4 py-2 bg-white border rounded-full text-sm w-fit">
                        {activeProduct.category}
                    </span>

                    <h2 className="text-3xl font-bold leading-snug">
                        {activeProduct.name}
                    </h2>

                    {/* Description pushed to bottom */}
                    <p className="text-gray-700 leading-relaxed mt-auto">
                        {activeProduct.description}
                    </p>
                </div>

                {/* ---------------- MIDDLE IMAGE SECTION ---------------- */}
                <div className="flex justify-center">
                <Image
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    width={600}
                    height={600}
                    className="w-full lg:h-[65vh] h-[30vh] object-contain bg-[#F7F6F2] rounded-2xl"
                />
                </div>

                {/* ---------------- RIGHT FEATURES + BUTTONS ---------------- */}
                <div className="flex flex-col h-full">

                    {/* Features */}
                    <ul className="list-disc pl-5 lg:space-y-2 text-gray-800">
                        {activeProduct.features.map((f: string, i: number) => (
                        <li key={i}>{f}</li>
                        ))}
                    </ul>

                    {/* Buttons at the bottom */}
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