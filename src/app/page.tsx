
"use client";
import Image from "next/image";
import {  Briefcase,  Code,  Search,  RefreshCw, FileBarChart,} from "lucide-react";
import { GraduationCap, Building2 } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";


import { useState } from "react";
import { Quote } from "lucide-react"; 
const testimonials = [
  {
    quote: "Working with Joseph transformed our church’s operations. The JCRM Church Web App is user-friendly and reliable.",
    client: "Apostle Arthur - JCRM Team",
    avatar: "/apostle-arthur.jpg",
  },
  {
    quote: "The Kellian AutoGarage platform Joseph developed helped us streamline bookings and customer management.",
    client: "Douglas Akhonya - Kellian AutoGarage",
    avatar: "/douglas-akhonya.jpg",
  },
  {
    quote: "Joseph’s work on the JKUAT Social Robotics Lab site greatly improved our outreach and student engagement.",
    client: "Eunice Njeri - JKUAT Social Robotics Lab",
    avatar: "/eunice-njeri.jpg",
  },
  {
    quote: "The Kids Beyond Limit project was expertly handled, with a smooth, vibrant website that resonates with our community.",
    client: "Victor Siero - Kids Beyond Limit",
    avatar: "/victor-siero.jpg",
  },
];


 

export default function Home() {
   const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
            <section
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-white px-6
                    bg-[url('/hero.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-700/70 z-0" />
        <div className="relative z-10 max-w-4xl text-justify md:text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Empowering Businesses Through Innovation & Digital Excellence
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Business Consultant | Software & Web Developer | Digital Strategist
          </p>
          <div className="mt-6 space-x-4 text-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="px-6 py-3 border border-white rounded-lg shadow-md hover:bg-white hover:text-blue-700"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

        <section className="container mx-auto py-20 px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64"
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
            <div className="flex-1 text-justify max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Hi, I’m <span className="font-semibold text-blue-600">Joseph Kirika</span>. I&apos;m a tech-savvy problem solver with a passion for building digital solutions that make real impact.
              </p>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                My background combines software development, business analysis, and digital consultancy. I’ve worked with individuals, startups, and institutions to bring ideas to life — from simple web apps to business-critical platforms.
              </p>
              <p className="mt-3 text-lg text-gray-700 leading-relaxed">
                I care about clean code, smart systems, and helping people bridge the gap between tech and strategy. Currently, I lead at <span className="font-semibold text-green-700">Dovepeak Digital</span>, where we drive transformation through technology and insight.
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                <span className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium shadow-sm">
                  <GraduationCap size={18} /> BSc Computer Science (JKUAT)
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium shadow-sm">
                  <Building2 size={18} /> Dovepeak Digital
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium shadow-sm">
                  <Code size={18} /> Software & Web Dev
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium shadow-sm">
                  <FileBarChart size={18} /> Business & Systems Analysis
                </span>
              </div>

              {/* Simple CTA */}
              <div className="mt-10 text-center md:text-left">
                <a
                  href="/about"
                  className="inline-block px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-600 hover:text-white transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Overview */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="container mx-auto text-center max-w-7xl">
            <h2 className="text-4xl font-extrabold text-gray-900">What I Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              I offer top-notch services to help businesses thrive in the digital world.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: "Business Consultancy",
                  desc: "Helping businesses transition into tech and optimize growth strategies.",
                  icon: <Briefcase className="w-8 h-8 text-white" />,
                  color: "bg-blue-600",
                },
                {
                  title: "Web & Software Development",
                  desc: "Creating business platforms, SaaS solutions, and web apps.",
                  icon: <Code className="w-8 h-8 text-white" />,
                  color: "bg-purple-600",
                },
                {
                  title: "SEO & Digital Marketing",
                  desc: "Optimizing businesses to rank higher and increase online visibility.",
                  icon: <Search className="w-8 h-8 text-white" />,
                  color: "bg-green-600",
                },
                {
                  title: "Tech Migration",
                  desc: "Guiding companies through digital transformation.",
                  icon: <RefreshCw className="w-8 h-8 text-white" />,
                  color: "bg-yellow-500",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`inline-flex items-center justify-center rounded-full w-12 h-12 ${service.color} mb-5 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="/services"
              className="mt-14 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Explore Services
            </a>
          </div>
        </section>

            {/* Portfolio Showcase */}
      <section className="container mx-auto py-20 px-6 text-center max-w-7xl">
        <h2 className="text-4xl font-extrabold text-gray-900">Featured Work</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600">
          Some of my standout projects.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "JCRM Church Web App", img: "/placeholder.png" },
            { title: "Kellian AutoGarage", img: "/kellian.png" },
            { title: "JKUAT Social Robotics Lab", img: "/socialrobotics.png" },
            { title: "Kids Beyond Limit", img: "/kidsbeyond.png" },
            { title: "Dovepeak Digital Solutions", img: "/dds.png" },
            { title: "Autostore", img: "/autostore.png" },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.img}
                  width={400}
                  height={250}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl transform transition-transform duration-300 hover:scale-105"
                  priority={index < 3} 
                />
              </div>
              <h3 className="mt-4 px-4 pb-4 text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        <a
          href="/portfolio"
          className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
        >
          View Full Portfolio
        </a>
      </section>


  
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">What Clients Say</h2>
        <p className="mt-4 text-lg text-gray-600 mb-12">Real feedback from those I’ve worked with.</p>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg mx-4 select-none"
            >
              <Quote className="mx-auto mb-4 w-10 h-10 text-blue-600 opacity-70" />
              <p className="text-gray-700 italic text-lg leading-relaxed">{testimonials[current].quote}</p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                {testimonials[current].avatar && (
                 <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].client}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-600 shadow-lg"
                  />

                )}
                <h4 className="text-blue-700 font-semibold text-xl">- {testimonials[current].client}</h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition"
          >
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <a
          href="/contact"
          className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Let’s Work Together
        </a>
      </div>
    </section>


     {/* Call to Action */}
<section className="bg-blue-700 text-white py-24 px-6 text-center relative overflow-hidden">
  {/* Decorative Blobs */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-4xl font-extrabold tracking-tight">Ready to Transform Your Business?</h2>
    <p className="mt-4 text-lg text-blue-100">Let’s discuss how we can take your brand to the next level — together.</p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      <a
        href="/contact/book-consultation"
        className="px-8 py-3 bg-white text-blue-700 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
      >
        Book a Free Consultation
      </a>
      <a
        href="/contact"
        className="px-8 py-3 border border-white text-white text-lg font-medium rounded-lg hover:bg-white hover:text-blue-700 transition duration-300"
      >
        Let’s Talk
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
