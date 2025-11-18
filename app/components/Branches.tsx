"use client";
import { FaMapMarkerAlt } from "react-icons/fa";
import branchesData from "../data/branches.json";

export default function Branches() {
  const { branches } = branchesData;

  return (
    <section className="w-full bg-[#F7F6F2] lg:py-16 py-6 px-6 lg:px-20 mb-20">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-16 gap-6 items-stretch justify-center">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex items-start gap-4 w-full lg:w-1/2"
            >
              <FaMapMarkerAlt className="text-[#AA2022] text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {branch.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {branch.address.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
