import Image from "next/image";
import aboutCompanyData from "../data/aboutCompanyData.json";

export default function AboutCompany() {
  const { title, description, images } = aboutCompanyData;

  return (
    <section className="bg-white lg:py-20 py-8 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">

        {/* LEFT SIDE: Company Info */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            {description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Bento Grid */}
        <div className="relative grid lg:gap-4 gap-0">

          {/* Top Section */}
          <div className="w-full flex gap-4">

            {/* Top Left Image */}
            <div className="w-1/2 w-80 relative lg:h-110 h-72 rounded-xl overflow-hidden">
              <Image
                src={images.topLeft}
                alt="HVAC Outdoor Units"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Images */}
            <div className="w-1/2 relative flex flex-col gap-9">

              <div className="relative w-full lg:h-64 h-50 rounded-xl overflow-hidden">
                <Image
                  src={images.topRightTop}
                  alt="HVAC Vent System"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-full lg:h-32 h-20 rounded-xl bg-white">
                <Image
                  src={images.topRightBottom}
                  alt="HVAC Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full flex gap-4">

            <div className="w-1/3 relative h-64 rounded-xl overflow-hidden">
              <Image
                src={images.bottomLeft}
                alt="HVAC Pipes"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-2/3 relative h-64 rounded-xl overflow-hidden">
              <Image
                src={images.bottomRight}
                alt="HVAC Air Ducts"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}