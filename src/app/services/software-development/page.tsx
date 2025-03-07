import { FaCogs, FaMobileAlt, FaCloud, FaLaptopCode, FaRocket, FaShieldAlt, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";

const SoftwareDevelopment = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Custom Software Development Solutions</h1>
          <p className="text-lg mt-4">Innovative, scalable, and secure software tailored to your business needs.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Get a Free Consultation
            </a>
            <a href="#portfolio" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View Our Projects
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our Software Development Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: FaRocket, title: "High Performance", desc: "Optimized for speed, efficiency, and seamless user experience." },
            { icon: FaShieldAlt, title: "Robust Security", desc: "Enterprise-grade security measures to protect your data." },
            { icon: FaProjectDiagram, title: "Custom Solutions", desc: "Tailored software designed to fit your unique business needs." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <item.icon className="text-blue-600 text-4xl mx-auto" />
              <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Software Development Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Software Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FaLaptopCode, title: "Custom Software", desc: "Fully tailored solutions to meet your business requirements." },
              { icon: FaMobileAlt, title: "Mobile App Development", desc: "iOS & Android apps built for performance and scalability." },
              { icon: FaCloud, title: "Cloud Solutions", desc: "Scalable cloud-based applications for businesses of all sizes." },
              { icon: FaCogs, title: "Enterprise Software", desc: "Robust enterprise-grade software for large organizations." },
              { icon: FaDatabase, title: "Database Development", desc: "Secure and optimized databases for data-driven businesses." },
              { icon: FaShieldAlt, title: "Cybersecurity Solutions", desc: "Software security, encryption, and compliance measures." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <service.icon className="text-blue-600 text-4xl mx-auto" />
                <h3 className="font-semibold text-lg mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Technology Stack</h2>
          <p className="text-lg text-gray-600 mt-2">We use modern, reliable, and scalable technologies.</p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["React.js", "Next.js", "Node.js", "Django", "Flutter", "AWS", "MongoDB", "PostgreSQL"].map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { img: "/images/project1.jpg", title: "SaaS Application" },
              { img: "/images/project2.jpg", title: "Mobile App for Business" },
              { img: "/images/project3.jpg", title: "Cloud-Based ERP System" },
            ].map((project, index) => (
              <div key={index} className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                <Image src={project.img} alt={project.title}
                width={100}
                height={60}

                className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Flexible Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { name: "Startup Package", price: "$499", features: ["Custom UI", "Basic Features", "Responsive Design"] },
            { name: "Business Package", price: "$1499", features: ["Advanced Features", "API Integration", "Secure Hosting"] },
            { name: "Enterprise Package", price: "Custom Quote", features: ["AI & ML Capabilities", "Scalable Cloud Solutions", "Dedicated Support"] },
          ].map((plan, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-3xl text-blue-600 font-semibold mt-4">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Build Your Next Software?</h2>
        <a href="/contact" className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
