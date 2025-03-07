"use client"

import { useState } from "react";
import { FaGlobe, FaShoppingCart, FaCode, FaUsers, FaStar } from "react-icons/fa";
import Image from "next/image";

const categories = ["All", "Web Development", "eCommerce", "Software Development", "Business Consultancy"];

const projects = [
  {
    title: "AutoStore eCommerce",
    category: "eCommerce",
    description: "A powerful multi-vendor marketplace for vehicle and auto spare parts.",
    image: "/projects/autostore.png",
    link: "/portfolio/autostore",
    icon: FaShoppingCart,
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "LivingSpot",
    category: "Web Development",
    description: "A marketplace app for vacant houses near institutions.",
    image: "/projects/livingspot.png",
    link: "/portfolio/livingspot",
    icon: FaGlobe,
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "SmartTraffic AI",
    category: "Software Development",
    description: "AI-powered traffic management system for urban planning.",
    image: "/projects/smarttraffic.png",
    link: "/portfolio/smarttraffic",
    icon: FaCode,
    techStack: ["Python", "AI/ML", "TensorFlow"],
  },
  {
    title: "DDS Consulting Website",
    category: "Business Consultancy",
    description: "A well-presented business consultancy website with a professional touch.",
    image: "/projects/ddsconsulting.png",
    link: "/portfolio/dds-consulting",
    icon: FaUsers,
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  },
];

const testimonials = [
  {
    quote: "Dovepeak Digital Solutions transformed our online presence and increased conversions!",
    client: "John K., CEO of TechWave",
    rating: 5,
  },
  {
    quote: "Their eCommerce solution helped us scale our sales significantly.",
    client: "Sarah M., Founder of AutoSpare Hub",
    rating: 5,
  },
  {
    quote: "The team provided an outstanding software solution that optimized our processes.",
    client: "Michael B., COO of SmartTech",
    rating: 5,
  },
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
          <p className="text-lg mt-4">Discover the projects that define our excellence.</p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="container mx-auto px-6 py-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              } hover:bg-blue-500 hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredProjects.map((project, index) => (
            <a key={index} href={project.link} className="block bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <Image src={project.image} alt={project.title}
              width={100}
              height={48}              
              className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6 text-center">
                <project.icon className="text-blue-600 text-5xl mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                {/* Tech Stack */}
                <div className="flex justify-center mt-4 space-x-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-10 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <p className="text-gray-800 text-lg italic">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-blue-700">- {testimonial.client}</p>
                <div className="flex justify-center mt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s Build Something Amazing</h2>
        <p className="mt-4 text-lg">Contact us today and bring your vision to life.</p>
        <a href="/contact" className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
          Start Your Project
        </a>
      </section>
    </div>
  );
};

export default PortfolioPage;
