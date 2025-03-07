"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/images/john-doe.jpg",
    feedback:
      "Dovepeak Digital Solutions transformed our business with their cutting-edge web solutions. Their professionalism and attention to detail are unmatched!",
  },
  {
    name: "Sarah Johnson",
    role: "Founder, Creative Minds",
    image: "/images/sarah-johnson.jpg",
    feedback:
      "I highly recommend DDS! The team was incredible, delivering a sleek and high-performing website that exceeded our expectations.",
  },
  {
    name: "Michael Smith",
    role: "Marketing Director, FastTrack",
    image: "/images/michael-smith.jpg",
    feedback:
      "From start to finish, working with DDS was a fantastic experience. They provided strategic insights and executed our project flawlessly!",
  },
];

export default function TestimonialsPage() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800">What Our Clients Say</h1>
      <p className="text-center text-gray-600 mt-3">Real feedback from businesses we’ve worked with.</p>

      {/* Testimonials Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={16}
                height={16}
                className="w-16 h-16 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Selector for Desktop */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg hidden md:flex items-center justify-center space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-4 h-4 rounded-full ${
              selected === index ? "bg-blue-600" : "bg-gray-400"
            } focus:outline-none`}
          />
        ))}
      </div>

      {/* Featured Testimonial for Mobile */}
      <div className="mt-12 bg-blue-50 p-8 rounded-lg md:hidden text-center">
        <Image
          src={testimonials[selected].image}
          alt={testimonials[selected].name}
          width={20}
          height={20}
          className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
        />
        <h3 className="text-lg font-semibold text-gray-800 mt-4">{testimonials[selected].name}</h3>
        <p className="text-gray-500">{testimonials[selected].role}</p>
        <p className="mt-4 text-gray-600">{testimonials[selected].feedback}</p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Want to share your experience?</h2>
        <p className="text-gray-600 mt-3">We’d love to hear from you! Leave us a review.</p>
        <a
          href="/contact"
          className="mt-5 inline-block bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Submit a Testimonial
        </a>
      </div>
    </div>
  );
}
