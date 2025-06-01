'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  Code,
  FileBarChart,
} from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
        >
          <Image
            src="/Joseph-Kirika.jpg"
            alt="Joseph Kirika"
            width={256}
            height={256}
            className="w-full h-full object-cover rounded-full shadow-lg border-[5px] border-blue-500"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Joseph Kirika</span>. I&apos;m a tech-savvy problem solver with a passion for building digital solutions that make real impact.
          </p>

          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            My background combines software development, business analysis, and digital consultancy. I’ve worked with individuals, startups, and institutions to bring ideas to life — from simple web apps to business-critical platforms.
          </p>

          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            I care about clean code, smart systems, and helping people bridge the gap between tech and strategy. Currently, I lead at <span className="font-semibold text-green-700">Dovepeak Digital</span>, where we drive transformation through technology and insight.
          </p>

          {/* Tags */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium shadow-sm">
              <GraduationCap size={18} /> BSc Computer Science (JKUAT)
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium shadow-sm">
              <Building2 size={18} /> Dovepeak Digital
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium shadow-sm">
              <Code size={18} /> Software & Web Dev
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium shadow-sm">
              <FileBarChart size={18} /> Business & Systems Analysis
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center md:text-left">
            <a
              href="/about"
              className="inline-block px-5 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
