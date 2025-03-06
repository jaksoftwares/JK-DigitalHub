"use client";
import { FaLaptopCode, FaChartLine, FaLightbulb, FaCogs } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Expert Digital Solutions to Elevate Your Business 🚀</h1>
        <p className="mt-4 text-lg">
          From business consultancy to advanced web development and SEO strategies, I help businesses thrive in the digital era.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="bg-white text-blue-700 px-6 py-3 font-semibold rounded-md">
            Get a Free Consultation
          </Button>
          <Button className="bg-indigo-600 px-6 py-3 font-semibold rounded-md">
            Explore My Work
          </Button>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">What I Offer</h2>
        <p className="text-center text-gray-600 mt-2">Innovative solutions tailored to your business needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Business Consultancy */}
          <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <FaLightbulb className="text-blue-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Business Consultancy</h3>
            <p className="text-gray-600 mt-2">
              Helping businesses transition into tech-driven growth with strategic planning and leadership.
            </p>
            <Button className="mt-4 bg-blue-600 px-4 py-2">Learn More</Button>
          </div>

          {/* Web & Software Development */}
          <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <FaLaptopCode className="text-indigo-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Web & Software Development</h3>
            <p className="text-gray-600 mt-2">
              Custom websites, SaaS platforms, and scalable business applications built with modern technologies.
            </p>
            <Button className="mt-4 bg-indigo-600 px-4 py-2">View Projects</Button>
          </div>

          {/* SEO & Digital Marketing */}
          <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <FaChartLine className="text-green-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">SEO & Digital Marketing</h3>
            <p className="text-gray-600 mt-2">
              Proven SEO strategies, digital campaigns, and branding techniques to boost your online presence.
            </p>
            <Button className="mt-4 bg-green-600 px-4 py-2">See How It Works</Button>
          </div>

          {/* Strategic Leadership & Tech Migration */}
          <div className="p-6 border rounded-lg shadow-lg text-center hover:shadow-xl transition">
            <FaCogs className="text-red-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Strategic Leadership & Tech Migration</h3>
            <p className="text-gray-600 mt-2">
              Helping businesses adopt new technologies and leadership strategies for digital success.
            </p>
            <Button className="mt-4 bg-red-600 px-4 py-2">Talk to an Expert</Button>
          </div>
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Me?</h2>
          <p className="text-gray-600 mt-2">Your success is my priority, and here’s why I stand out.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">🏆 Industry Expertise</h3>
              <p className="text-gray-600 mt-2">
                Over X years in software, business strategy, and digital transformation.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">🔍 Proven Results</h3>
              <p className="text-gray-600 mt-2">
                Successfully worked with JCRM, Kellian AutoGarage, Kids Beyond Limit, and more.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">📊 Data-Driven Strategies</h3>
              <p className="text-gray-600 mt-2">
                Market analysis & insights to develop actionable digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Take Your Business to the Next Level?</h2>
        <p className="mt-4 text-lg">Let&apos;s discuss your needs and build something amazing together.</p>
        <div className="mt-6">
          <Button className="bg-white text-blue-700 px-6 py-3 font-semibold rounded-md">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
