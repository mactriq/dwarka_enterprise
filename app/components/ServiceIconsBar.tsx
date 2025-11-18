"use client";
import Image from "next/image";

const services = [
  { icon: "/contact/icons/maintenance.png", label: "Maintenance" },
  { icon: "/contact/icons/installation.png", label: "Installation" },
  { icon: "/contact/icons/renovation.png", label: "Renovation" },
  { icon: "/contact/icons/cooling.png", label: "Cooling" },
  { icon: "/contact/icons/safety.png", label: "Safety" },
];

export default function ServiceIconsBar() {
  return (
    <section className="w-full px-6 lg:px-20">
      <div className="border-t border-b border-[#16222E] py-4">

        {/* ----- DESKTOP VIEW (unchanged) ----- */}
        <div className="hidden md:flex items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center w-full"
            >
              <div className="flex items-center gap-3 justify-center mx-auto">
              <Image
                src={service.icon}
                alt={service.label}
                width={38}
                height={38}
              />
              <span className="text-lg font-semibold text-gray-900">
                {service.label}
              </span>
              </div>
              {index < services.length - 1 && (
                <div className="hidden md:block h-12 border-l border-[#16222E]"></div>
              )}
            </div>
          ))}
        </div>

        {/* ----- MOBILE MARQUEE VIEW ----- */}
        <div className="md:hidden overflow-hidden whitespace-nowrap marquee-container">
          <div className="flex items-center gap-10 marquee">
            {[...services, ...services].map((service, index) => (
              <div key={index} className="flex items-center gap-3 shrink-0">
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={34}
                  height={34}
                />
                <span className="text-base font-semibold text-gray-900">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
        }
        .marquee {
          animation: marquee-scroll 18s linear infinite;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}