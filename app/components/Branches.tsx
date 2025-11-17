import { FaMapMarkerAlt } from "react-icons/fa";

export default function Branches() {
  return (
    <section className="w-full bg-[#F7F6F2] py-16 px-6 lg:px-20 mb-20">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch justify-center">
          {/* Branch 1 */}
          <div className="bg-white rounded-2xl p-6 flex items-start gap-4 w-full lg:w-1/2">
            <FaMapMarkerAlt className="text-[#AA2022] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Branch Office: New Delhi
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                F-150A, Opp. Gate No.5, Jasola Metro Station A.F.E-II, Okhla,<br />
                New Delhi 110025
              </p>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="bg-white rounded-2xl p-6 flex items-start gap-4 w-full lg:w-1/2">
            <FaMapMarkerAlt className="text-[#AA2022] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Branch Office: Jaipur, Rajasthan
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                2/29, Mahatma Gandhi Nagar, Nr. DCM Ajmer Road,<br />
                Jaipur (Raj.) 302006
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}