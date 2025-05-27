"use client"

import { useState } from "react";
import { FaGlobe, FaShoppingCart, FaCode, FaUsers, FaStar, FaPaintBrush, FaWater, FaBook, FaLaptopCode, FaLightbulb, FaLaptop, FaChalkboardTeacher, FaHandsHelping, FaShieldAlt, FaPeopleArrows, FaUniversity, FaIdCard } from "react-icons/fa";
import Image from "next/image";


const categories = ["All", "Web Development", "eCommerce", "Software Development", "Business Consultancy"];

const projects = [
  {
    title: "AutoStore eCommerce",
    category: "eCommerce",
    description: "A powerful multi-vendor marketplace for vehicle and auto spare parts.",
    image: "/projects/autostore.png",
    link: "https://autostore-q6v3.vercel.app/",
    icon: FaShoppingCart,
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "LivingSpot",
    category: "Web Development",
    description: "A housing marketplace platform for listing and finding vacant rentals near institutions.",
    image: "/projects/livingspot.png",
    link: "https://livingspot.vercel.app/",
    icon: FaGlobe,
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "SmartTraffic AI",
    category: "Software Development",
    description: "An AI-based urban traffic management system simulation using open datasets.",
    image: "/projects/smarttraffic.png",
    link: "https://smarttraffic-ai.vercel.app/",
    icon: FaCode,
    techStack: ["Python", "AI/ML", "TensorFlow"],
  },
  {
    title: "DDS Consulting Website",
    category: "Business Consultancy",
    description: "A professional business consultancy site showcasing digital and operational services.",
    image: "/projects/ddsconsulting.png",
    link: "https://dds-consulting.vercel.app/",
    icon: FaUsers,
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
  },
  {
    title: "JKUAT Find My Lost ID",
    category: "Civic Tech",
    description: "A lost-and-found ID recovery platform with STK Push integration and claim system.",
    image: "/projects/jkuatfindid.png",
    link: "https://jkuatfindmylostid.vercel.app/",
    icon: FaIdCard,
    techStack: ["Next.js", "Express.js", "Supabase"],
  },
  {
    title: "DIT Website",
    category: "Education",
    description: "Institutional website for Dovepeak Institute of Technology with course listings and LMS roadmap.",
    image: "/projects/dit.png",
    link: "https://dit-jak-devs-projects.vercel.app/",
    icon: FaUniversity,
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "ConnectMtaani",
    category: "Community Platform",
    description: "A platform supporting community engagement and services for informal sectors.",
    image: "/projects/connectmtaani.png",
    link: "https://connectmtaani.vercel.app/",
    icon: FaPeopleArrows,
    techStack: ["Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Lapicure",
    category: "InsurTech",
    description: "A digital solution for laptop insurance, helping users protect their tech investments.",
    image: "/projects/lapicure.png",
    link: "https://lapicure.vercel.app/",
    icon: FaShieldAlt,
    techStack: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Helpicent",
    category: "Nonprofit",
    description: "A volunteer platform supporting donations for underprivileged children in Kenya.",
    image: "/projects/helpicent.png",
    link: "https://helpicent.vercel.app/",
    icon: FaHandsHelping,
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
  },
  {
    title: "HighRise School Website",
    category: "Education",
    description: "An elegant, responsive website for a private school institution.",
    image: "/projects/highrise.png",
    link: "https://highrise-school.vercel.app/",
    icon: FaChalkboardTeacher,
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "CompDock",
    category: "eCommerce",
    description: "A multi-vendor laptop eCommerce platform for selling and managing tech devices.",
    image: "/projects/compdock.png",
    link: "https://compdock.vercel.app/",
    icon: FaLaptop,
    techStack: ["Vue.js", "Django", "PostgreSQL"],
  },
  {
    title: "Jasiri",
    category: "Youth Empowerment",
    description: "A web platform to help young people pitch entrepreneurial ideas to investors and stakeholders.",
    image: "/projects/jasiri.png",
    link: "https://jasiri.vercel.app/",
    icon: FaLightbulb,
    techStack: ["Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "DDS Digital Hub",
    category: "Web Agency",
    description: "A landing page for a creative digital agency offering development and consulting services.",
    image: "/projects/dds.png",
    link: "https://dds-site.vercel.app/",
    icon: FaLaptopCode,
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "StudyRoom",
    category: "EdTech",
    description: "A custom writing platform where students can request academic assistance.",
    image: "/projects/studyroom.png",
    link: "https://studyroom-sepia.vercel.app/",
    icon: FaBook,
    techStack: ["React", "Firebase", "Node.js"],
  },
  {
    title: "Tripatite Interiors",
    category: "Portfolio",
    description: "A modern, creative website portfolio for an interior design studio.",
    image: "/projects/tripatite.png",
    link: "https://tripatiteinteriors.vercel.app/",
    icon: FaPaintBrush,
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "WaterCent",
    category: "Utility Services",
    description: "Corporate website for a water and gas supply company with service request features.",
    image: "/projects/watercent.png",
    link: "https://watercent.vercel.app/",
    icon: FaWater,
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

   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-white rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-[1.03] focus:shadow-xl focus:scale-[1.03] outline-none`}
            tabIndex={0}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            aria-label={`View project: ${project.title}`}
          >
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority={index === 0} // prioritize first image
              />
            </div>
            <div className="p-6 text-center">
              <project.icon
                className={`text-blue-600 text-5xl mx-auto mb-3 transition-transform ${
                  hoveredIndex === index ? "scale-110" : ""
                }`}
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="flex justify-center flex-wrap mt-4 gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-default select-none"
                    title={tech} // tooltip on hover
                  >
                    {tech}
                  </span>
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
