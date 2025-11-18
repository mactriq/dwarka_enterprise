'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Excellent HVAC service that keeps the air quality good and the system working reliably in our healthcare facility.',
    name: 'AMC hospital',
    location: 'Surat',
    image: '/projects/hospitals/hospital1.jpg',
  },
  {
    quote:
      'Great HVAC service that keeps our environment comfortable and safe, with quick support whenever needed.',
    name: 'Galaxy hospital',
    location: 'Bardoli',
    image: '/projects/hospitals/hospital2.jpg',
  },
  {
    quote:
      'Reliable HVAC service that keeps our hospital comfortable and running smoothly at all times.',
    name: 'Shah hospital',
    location: 'Karnal',
    image: '/projects/hospitals/hospital3.png',
  },
  {
    quote:
      'Professional HVAC maintenance team ensuring consistent performance and reliability.',
    name: 'Kilkari hospital',
    location: 'Surat',
    image: '/projects/hospitals/hospital8.png',
  },
  {
    quote:
      'Dwarka Enterprise provided us with a reliable, efficient HVAC solution that greatly improved comfort across Vidhyadeep University.',
    name: 'Vidhyadeep university',
    location: 'Kim',
    image: '/projects/education/education1.png',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // RESPONSIVE CARDS PER VIEW
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3); // desktop
    };

    handleResize(); // run on load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < testimonials.length - cardsPerView)
      setCurrent(current + 1);
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="lg:mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:mb-10 mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Testimonials</h2>
          <p className="text-black mt-2 sm:mt-0 text-base">
            What Our Customer Say About Us
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            className={`absolute -left-6 md:-left-8 z-10 p-2 rounded-full hover:bg-gray-100 text-black hover:scale-110 transition ${
              current === 0 ? 'opacity-30 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * (100 / cardsPerView)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-[#F7F6F2] flex-shrink-0 rounded-2xl p-6
                             w-full sm:w-1/2 md:w-1/4
                             transition flex flex-col justify-between"
                >
                  <p className="text-gray-700 text-base leading-relaxed mb-2">
                    “{t.quote}”
                  </p>

                  <div className="pt-4 flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-sm">{t.location}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={current >= testimonials.length - cardsPerView}
            className={`absolute -right-6 md:-right-8 z-10 p-2 rounded-full hover:bg-gray-100 text-black hover:scale-110 transition ${
              current >= testimonials.length - cardsPerView
                ? 'opacity-30 cursor-not-allowed'
                : ''
            }`}
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
