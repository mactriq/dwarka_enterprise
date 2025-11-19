"use client";
import { useState } from "react";
import contactData from "../data/contactData.json";
import Link from "next/link";

export default function ContactSection() {
  const { section } = contactData;
  const [activeTab, setActiveTab] = useState<"sales" | "career">("sales");
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
    cv: null as File | null,
  });

  const handleSalesChange = (e: any) => {
    setSalesForm({ ...salesForm, [e.target.name]: e.target.value });
  };

  const handleCareerChange = (e: any) => {
    setCareerForm({ ...careerForm, [e.target.name]: e.target.value });
  };

  const handleCareerFile = (e: any) => {
    setCareerForm({
      ...careerForm,
      cv: e.target.files ? e.target.files[0] : null,
    });
  };

  const triggerSuccessPopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  // ⭐ SALES FORM SUBMIT
  const handleSalesSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        formType: "Sales Inquiry",
        ...salesForm,
      }),
    });

    if (res.ok) {
      triggerSuccessPopup();
      setSalesForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Failed to send email.");
    }
  };

  // ⭐ CAREER FORM SUBMIT (WITH ATTACHMENT)
  const handleCareerSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("formType", "Career Application");
    formData.append("name", careerForm.name);
    formData.append("email", careerForm.email);
    formData.append("phone", careerForm.phone);
    formData.append("address", careerForm.address);

    if (careerForm.cv) {
      formData.append("cv", careerForm.cv);
    }

    const res = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      triggerSuccessPopup();
      setCareerForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        cv: null,
      });
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <section className="w-full lg:py-20 py-6 px-6 lg:px-20 relative">

      {showPopup && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50">
          Your data has been submitted successfully.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">

        {/* LEFT SECTION */}
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

        {/* RIGHT FORM AREA */}
        <div
          className="rounded-2xl bg-cover bg-center lg:p-24 p-4"
          style={{ backgroundImage: `url(${section.rightBackground})` }}
        >
          <div className="bg-white rounded-xl lg:p-6 p-4">

            {/* TABS */}
            <div className="flex gap-3 mb-10">
              <button
                onClick={() => setActiveTab("sales")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "sales"
                    ? "bg-gray-900 text-white"
                    : "border border-gray-400 text-gray-700"
                }`}
              >
                Contact Sales
              </button>

              <button
                onClick={() => setActiveTab("career")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "career"
                    ? "bg-gray-900 text-white"
                    : "border border-gray-400 text-gray-700"
                }`}
              >
                Contact Career
              </button>
            </div>

            {/* SALES FORM */}
            {activeTab === "sales" && (
              <form className="space-y-4" onSubmit={handleSalesSubmit}>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" placeholder="Name" value={salesForm.name} onChange={handleSalesChange}
                  className="border-b w-full text-sm bg-transparent p-1" required />

                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" placeholder="Email" type="email" value={salesForm.email} onChange={handleSalesChange}
                  className="border-b w-full text-sm bg-transparent p-1" required />

                <label className="block text-sm font-medium text-gray-700">Phone No.</label>
                <input name="phone" placeholder="Phone" value={salesForm.phone} onChange={handleSalesChange}
                  className="border-b w-full text-sm bg-transparent p-1" />

                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" placeholder="Message" value={salesForm.message} onChange={handleSalesChange}
                  rows={5} className="border-b w-full text-sm bg-transparent p-1"></textarea>

                <button type="submit" className="cursor-pointer w-full bg-gray-900 hover:bg-white hover:text-black border text-white py-2 rounded-md">
                  Submit
                </button>
              </form>
            )}

            {/* CAREER FORM */}
            {activeTab === "career" && (
              <form className="space-y-4" onSubmit={handleCareerSubmit}>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" placeholder="Name" value={careerForm.name} onChange={handleCareerChange}
                  className="border-b w-full bg-transparent text-sm p-1" required />

                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" placeholder="Email" value={careerForm.email}
                  onChange={handleCareerChange} className="border-b w-full bg-transparent text-sm p-1" required />

                <label className="block text-sm font-medium text-gray-700">Phone No.</label>
                <input name="phone" placeholder="Phone" value={careerForm.phone}
                  onChange={handleCareerChange} className="border-b w-full bg-transparent text-sm p-1" />

                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input name="address" placeholder="Address" value={careerForm.address}
                  onChange={handleCareerChange} className="border-b w-full bg-transparent text-sm p-1" />

                <label className="block text-sm font-medium text-gray-700">Upload Your CV On:
                  <Link
                    href="mailto:dwarkaenterprise16@gmail.com"
                    className="hover:text-gray-400 underline ml-2"
                  >
                    dwarkaenterprise16@gmail.com
                  </Link>
                  </label>
                {/* <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.csv" onChange={handleCareerFile}
                  className="w-full border border-gray-300 rounded-md px-3 text-sm py-2 required" /> */}

                <button type="submit" className="cursor-pointer w-full bg-gray-900 text-white hover:bg-white hover:text-black border py-2 rounded-md">
                  Submit
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
