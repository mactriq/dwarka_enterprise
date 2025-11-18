"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import contactData from "../data/contactInfo.json";

const iconMap: Record<string, () => React.ReactNode> = {
  map: () => <FaMapMarkerAlt className="text-[#AA2022] text-3xl mt-1" />,
  phone: () => <FaPhoneAlt className="text-[#AA2022] text-lg mt-1" />,
  email: () => <FaEnvelope className="text-[#AA2022] text-lg mt-1" />,
  clock: () => <FaClock className="text-[#AA2022] text-lg mt-1" />,
};

export default function ContactInfoSection() {
  const { mapSrc, info } = contactData;

  return (
    <section className="w-full px-6 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

        {/* Map */}
        <div className="w-full lg:w-2/3">
          <iframe
            title="Surat Office Location"
            src={mapSrc}
            width="100%"
            height="500"
            className="rounded-xl border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">
            Get in touch
          </h2>

          <div className="space-y-6">
            {info.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 ${index !== info.length - 1 ? "border-b border-gray-300 pb-4" : ""}`}
              >
                {iconMap[item.icon]?.()}
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  {Array.isArray(item.details)
                    ? item.details.map((line, i) => (
                        <p key={i} className="text-gray-700 text-sm">{line}</p>
                      ))
                    : <p className="text-gray-700 text-sm">{item.details}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}