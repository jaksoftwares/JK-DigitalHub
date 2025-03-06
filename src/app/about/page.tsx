// app/about/page.tsx

"use client"

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center text-white py-24 px-6 text-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">Meet Joseph Kirika</h1>
          <p className="text-lg">
            Innovator, Business Consultant & Tech Strategist, driving business
            growth through technology, strategy, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Video Introduction Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">A Message from Me</h2>
        <p className="text-lg mb-6">
          Learn more about my journey, expertise, and how I can help your business thrive.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-3xl aspect-video shadow-lg rounded-lg overflow-hidden"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Introduction Video"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Expertise & Specialization */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Expertise & Specialization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Business Consultancy", desc: "Helping businesses transition into tech-driven models, optimize workflows, and implement growth strategies." },
              { title: "Software & Web Development", desc: "Building SaaS platforms, business automation tools, and AI-driven applications." },
              { title: "SEO & Digital Marketing", desc: "Driving online visibility and lead generation through SEO, strategic content, and digital marketing." },
              { title: "Strategic Leadership & Tech Migration", desc: "Guiding companies through digital transformation and adopting innovative solutions." },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <p className="text-gray-700 mt-2">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Timeline Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Professional Journey</h2>
          <div className="relative border-l-4 border-blue-600 pl-6 space-y-8">
            {[
              { year: "2018", title: "Graduated from JKUAT", desc: "Earned a BSc in Computer Science, specializing in software development and AI." },
              { year: "2019", title: "Founded Dovepeak Digital Solutions", desc: "Started my consultancy and digital solutions firm to help businesses scale." },
              { year: "2020", title: "Developed JCRM Church Web App", desc: "Built a complete digital system for church management & an online store." },
              { year: "2021", title: "Worked with JKUAT Robotics Lab", desc: "Engaged in AI & automation projects at the university research lab." },
              { year: "2022", title: "Launched StudyThrive", desc: "Built an AI-powered academic assistance platform for students and professionals." },
              { year: "2023", title: "Expanded into SaaS Development", desc: "Launched multiple SaaS products to help businesses automate operations." },
              { year: "2024", title: "Pioneered AI-driven Smart Traffic System", desc: "Developing AI-powered solutions for modern traffic management." },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <span className="text-blue-600 font-bold">{event.year}</span>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="mt-2 text-gray-700">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Certifications & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Certified Digital Marketing Expert", org: "Google Digital Garage" },
            { title: "AWS Certified Cloud Practitioner", org: "Amazon Web Services" },
            { title: "Best Tech Startup Founder Award", org: "National Business Awards 2023" },
            { title: "SEO & Growth Hacking Masterclass", org: "HubSpot Academy" },
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-700">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </section>

        {/* Mission, Vision, and Impact */}
        <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Mission, Vision & Impact</h2>
        <p className="text-lg text-gray-700">
          **Mission:** To empower businesses and entrepreneurs through innovative digital solutions.  
          **Vision:** To be a global leader in tech-driven business transformation.  
          **Impact:** Helping businesses scale through digital strategy, automation, and AI-driven solutions.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect & Innovate</h2>
        <p className="text-lg">Reach out for consultations, collaborations, or to discuss your next big project.</p>
        <div className="mt-6 space-x-4">
          <a href="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200">
            Get in Touch
          </a>
          <a href="https://calendly.com/YOUR_BOOKING_LINK" target="_blank" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600">
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
