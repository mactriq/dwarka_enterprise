import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="w-full px-6 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Map */}
        <div className="w-full lg:w-2/3">
          <iframe
            title="Surat Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12828.90202749764!2d72.81425495383084!3d21.171517284128555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e1563ff5b05%3A0xa704782ac916a0e8!2sNavjivan%20Industrial%20Society!5e0!3m2!1sen!2sin!4v1763021226580!5m2!1sen!2sin"
            width="100%"
            height="500"
            className="rounded-xl border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8">Get in touch</h2>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4 border-b border-gray-300 pb-4">
              <FaMapMarkerAlt className="text-[#AA2022] text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">
                  Corporate Office: Surat, Gujarat
                </h3>
                <p className="text-gray-700 text-sm">
                  1st Floor, Block No 2/30 Survey No 36-1, 37-1 Navijvan Ind Co. Op
                  Service Soc Ltd Khatodra Brts Road, Khatodra Surat-395002
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 border-b border-gray-300 pb-4">
              <FaPhoneAlt className="text-[#AA2022] text-lg mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Phone no.</h3>
                <p className="text-gray-700 text-sm">+91 9376639399, 6351292442</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 border-b border-gray-300 pb-4">
              <FaEnvelope className="text-[#AA2022] text-lg mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700 text-sm">
                  dwarkaenterprise16@gmail.com
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <FaClock className="text-[#AA2022] text-lg mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Working Hours</h3>
                <p className="text-gray-700 text-sm">9:30AM to 8PM</p>
                <p className="text-gray-700 text-sm">Monday – Saturday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
