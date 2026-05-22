import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwarka Enterprise",
  description: "Smart. Sustainable. Reliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
        {/* Floating Company Brochure Button */}
        <a
          href="/about/Dwarka Enterprise Brochure.pdf"
          download
          className="fixed bottom-6 left-6 md:bottom-14 md:left-14 z-50 
                    flex items-center gap-3 bg-white text-[#16222E] 
                    px-2 py-2 rounded-full shadow-lg 
                    hover:shadow-xl transition-all"
        >
          <span className="font-medium px-2">Company Brochure</span>

          {/* Circular Download Icon */}
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#16222E]">
            <HiOutlineArrowDown className="text-white w-5 h-5" />
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919898552081"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-14 md:right-14 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </body>
    </html>
  );
}
