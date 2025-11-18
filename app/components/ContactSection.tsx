'use client';
import { useState } from 'react';
import contactData from '../data/contactData.json';

export default function ContactSection() {
  const { section } = contactData;
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <section className="w-full lg:py-20 py-6 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-6 items-center">

        {/* Left Content */}
        <div>
          <h3 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-6 lg:leading-[5rem] leading-[3rem]">
            {section.heading.text.split(section.heading.highlight)[0]}
            <span className="text-[#AA2022]">{section.heading.highlight}</span>
            {section.heading.text.split(section.heading.highlight)[1]}
          </h3>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={section.leftImage.src}
              alt={section.leftImage.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Background Section */}
        <div
          className="h-full bg-cover bg-center rounded-2xl lg:p-24 p-4 flex items-center justify-center"
          style={{ backgroundImage: `url(${section.rightBackground})` }}
        >
          <div className="bg-white rounded-xl lg:p-6 p-4 w-full">
                {/* Tabs */}
                <div className="flex gap-3 mb-10">
                <button
                    onClick={() => setActiveTab('sales')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'sales'
                        ? 'bg-gray-900 text-white'
                        : 'border border-gray-400 text-gray-700'
                    }`}
                >
                    Contact Sales
                </button>
                <button
                    onClick={() => setActiveTab('career')}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'career'
                        ? 'bg-gray-900 text-white'
                        : 'border border-gray-400 text-gray-700'
                    }`}
                >
                    Contact Career
                </button>
                </div>

                {/* Conditional Form */}
                {activeTab === 'sales' ? (
                // Contact Sales Form
                <form className="space-y-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="enter your name"
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="enter your email"
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone no.
                    </label>
                    <input
                        type="tel"
                        placeholder="enter your phone no."
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        placeholder="enter your message"
                        rows={4}
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    ></textarea>
                    </div>
                    <button
                    type="submit"
                    className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                    Submit
                    </button>
                </form>
                ) : (
                // Contact Career Form
                <form className="space-y-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="enter your name"
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="enter your email"
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Phone no.
                    </label>
                    <input
                        type="tel"
                        placeholder="enter your phone no."
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <input
                        type="text"
                        placeholder="enter your address"
                        className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-gray-800 bg-transparent py-2"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Upload your CV
                    </label>
                    <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="mt-2 w-full text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                    </div>
                    <button
                    type="submit"
                    className="mt-4 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
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
