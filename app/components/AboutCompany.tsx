import Image from "next/image";

export default function AboutCompany() {
  return (
    <section className="bg-white lg:py-20 py-8 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-8">
        {/* LEFT SIDE: Company Info */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Company Profile
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
            <p>
              Dwarka Enterprise is a nationally recognized HVAC turnkey
              contracting and supply company, providing comprehensive climate
              control solutions across residential, healthcare, corporate,
              educational, and industrial sectors throughout India. With decades
              of experience and partnerships with multiple leading global HVAC
              brands, we deliver integrated, energy-efficient, and future-ready
              systems designed to meet the highest standards of performance and
              reliability.
            </p>
            <p>
              Our strength lies in our end-to-end capability — from design and
              engineering to execution and maintenance. Supported by a team of
              seasoned professionals and certified engineers, Dwarka Enterprise
              ensures precision, quality, and operational excellence in every
              project we undertake, regardless of scale or complexity.
            </p>
            <p>
              We are committed to advancing sustainable and intelligent HVAC
              solutions that enhance comfort while reducing energy consumption
              and environmental impact. Our projects are designed to align with
              modern green-building standards and smart infrastructure
              requirements, ensuring long-term efficiency and value.
            </p>
            <p>
              At Dwarka Enterprise, we don’t just install HVAC systems — we
              engineer comfort, reliability, and trust. Our professional ethos
              and customer-first approach have made us one of India’s most
              dependable partners for turnkey HVAC solutions, setting benchmarks
              in quality, innovation, and performance.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Bento Grid */}
        <div className="relative grid gap-4">
          {/* Top Left Image */}
          <div className="w-full flex gap-4">
          <div className="w-1/2 w-80 relative lg:h-110 h-72 rounded-xl overflow-hidden">
            <Image
              src="/about/hvac1.png"
              alt="HVAC Outdoor Units"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right Image */}
            <div className="w-1/2 relative flex flex-col gap-9">
              {/* Top Image */}
              <div className="relative w-full lg:h-64 h-50 rounded-xl overflow-hidden">
                <Image
                  src="/about/hvac2.png"
                  alt="HVAC Vent System"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Image */}
              <div className="relative w-full lg:h-32 h-12 rounded-xl overflow-hidden">
                <Image
                  src="/about/hvac-solutions.png"
                  alt="HVAC Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex gap-4">
            {/* Bottom Left Image */}
            <div className="w-1/3 relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/about/hvac3.png"
                alt="HVAC Pipes"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="w-2/3 relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/about/hvac4.png"
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