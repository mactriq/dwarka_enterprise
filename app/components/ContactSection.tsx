"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import contactData from "../data/contactData.json";
import Link from "next/link";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { section } = contactData;
  const [activeTab, setActiveTab] = useState("sales");
  const [showPopup, setShowPopup] = useState(false);

  const [salesForm, setSalesForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSalesChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setSalesForm({ ...salesForm, [e.target.name]: e.target.value });

  // const handleCareerChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => setCareerForm({ ...careerForm, [e.target.name]: e.target.value });

  const handleCareerChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setCareerForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const showSuccess = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };


  const saveSalesToSheet = async (data: any) => {
    try {
      const res = await fetch("/api/save-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      showSuccess();
      return true;
    } catch {
      alert("Failed to save form");
      return false;
    }
  };

  const saveCareerToSheet = async () => {
    try {
      const res = await fetch("/api/save-career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Career Application",
          ...careerForm,
        }),
      });

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      showSuccess();
      return true;
    } catch {
      alert("Failed to submit career form");
      return false;
    }
  };

  const handleSalesSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true); // 🔒 lock button

  const success = await saveSalesToSheet({
    formType: "Sales Inquiry",
    ...salesForm,
  });

  if (success) {
    setSalesForm({ name: "", email: "", phone: "", message: "" });
    showSuccess(); // ✅ SUCCESS AFTER API
  }

  setIsSubmitting(false); // 🔓 unlock button
};



  const handleCareerSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true); // 🔒 lock button

  const success = await saveCareerToSheet();

  if (success) {
    setCareerForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    showSuccess(); // ✅ SUCCESS AFTER API
  }

  setIsSubmitting(false); // 🔓 unlock button
};




  return (
    <section className="w-full bg-[#FFFFFF] lg:py-20 py-6 px-6 lg:px-20 relative">
      {showPopup && (
        <div className="fixed top-14 md:top-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 shadow-lg z-50 text-center w-full">
          Your form has been submitted successfully!
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
        <div>
          <h3 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-6">
            {section.heading.text.split(section.heading.highlight)[0]}
            <span className="text-[#AA2022]">{section.heading.highlight}</span>
            {section.heading.text.split(section.heading.highlight)[1]}
          </h3>

          <img
            src={section.leftImage.src}
            alt={section.leftImage.alt}
            className="rounded-2xl w-full object-cover"
          />
        </div>

        <div
          className="rounded-2xl bg-cover bg-center lg:p-24 p-4"
          style={{ backgroundImage: `url(${section.rightBackground})` }}
        >
          <div className="bg-white rounded-xl lg:p-6 p-4">
            <div className="flex gap-3 mb-10">
              <button
                onClick={() => setActiveTab("sales")}
                className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "sales"
                    ? "bg-gray-900 text-white"
                    : "border border-gray-400 text-gray-700"
                }`}
              >
                Contact Sales
              </button>

              <button
                onClick={() => setActiveTab("career")}
                className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "career"
                    ? "bg-gray-900 text-white"
                    : "border border-gray-400 text-gray-700"
                }`}
              >
                Contact Career
              </button>
            </div>

            {activeTab === "sales" && (
              <form className="space-y-6 text-[#000000]" onSubmit={handleSalesSubmit}>
                <label>Name</label>
                <input
                  name="name"
                  value={salesForm.name}
                  onChange={handleSalesChange}
                  className="border-b w-full p-1"
                  required
                />

                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={salesForm.email}
                  onChange={handleSalesChange}
                  className="border-b w-full p-1"
                  required
                />

                <label>Phone</label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={salesForm.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setSalesForm({ ...salesForm, phone: value });
                  }}
                  className="border-b w-full p-1"
                  required
                />

                <label>Message</label>
                <textarea
                  name="message"
                  value={salesForm.message}
                  onChange={handleSalesChange}
                  className="border-b w-full p-1"
                  rows={4}
                  required
                />

                {/* <button className="cursor-pointer w-full bg-gray-900 hover:bg-white hover:text-black border text-white py-2 rounded-md">
                  Submit
                </button> */}
                <button
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-md border transition
                    ${isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-white hover:text-black"}
                  `}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

              </form>
            )}

            {activeTab === "career" && (
              <form className="space-y-6 text-[#000000]" onSubmit={handleCareerSubmit}>
                <label>Name</label>
                <input
                  name="name"
                  value={careerForm.name}
                  onChange={handleCareerChange}
                  className="border-b w-full p-1"
                  required
                />

                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={careerForm.email}
                  onChange={handleCareerChange}
                  className="border-b w-full p-1"
                  required
                />

                <label>Phone</label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={careerForm.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setCareerForm({ ...careerForm, phone: value });
                  }}
                  className="border-b w-full p-1"
                  required
                />

                <label>Address</label>
                <textarea
                  name="address"
                  value={careerForm.address}
                  onChange={handleCareerChange}
                  rows={1}
                  className="border-b w-full p-1"
                  required
                />

                <label>Send Your CV To: </label>

                <Link
                  href="mailto:info.dwarkaenterprise@gmail.com"
                  className="underline hover:text-gray-400"
                >
                  info.dwarkaenterprise@gmail.com
                </Link>

                {/* <button className="mt-6 cursor-pointer w-full bg-gray-900 hover:bg-white hover:text-black border text-white py-2 rounded-md">
                  Submit
                </button> */}
                <button
                  disabled={isSubmitting}
                  className={`mt-6 w-full py-2 rounded-md border transition
                    ${isSubmitting
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-white hover:text-black"}
                  `}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
