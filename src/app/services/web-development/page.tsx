import { FaCode, FaPaintBrush, FaLaptopCode, FaMobileAlt, FaRocket, FaCogs, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const WebDevelopment = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Custom Web Development & Design Solutions</h1>
          <p className="text-lg mt-4">Build a stunning, fast, and fully optimized website tailored for your business.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Get Started
            </a>
            <a href="#portfolio" className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our Web Development Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaRocket className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">High Performance</h3>
            <p className="mt-2 text-gray-600">Optimized for speed, SEO, and smooth user experience.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaPaintBrush className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Custom Design</h3>
            <p className="mt-2 text-gray-600">Unique, creative, and brand-focused designs.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaLaptopCode className="text-indigo-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Latest Technologies</h3>
            <p className="mt-2 text-gray-600">Built with modern frameworks like Next.js & React.</p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FaCode, title: "Custom Websites", desc: "Tailored web solutions for businesses, startups, and enterprises." },
              { icon: FaMobileAlt, title: "Responsive Design", desc: "Mobile-friendly, adaptable layouts for all screen sizes." },
              { icon: FaRocket, title: "Performance Optimization", desc: "Fast-loading, SEO-friendly sites that rank well on Google." },
              { icon: FaShoppingCart, title: "E-Commerce Solutions", desc: "Secure, high-performance online stores with seamless payment integrations." },
              { icon: FaCogs, title: "Web Apps & Portals", desc: "Advanced web applications with seamless functionality." },
              { icon: FaPaintBrush, title: "UI/UX Design", desc: "Intuitive and engaging designs that enhance user experience." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <service.icon className="text-indigo-600 text-4xl mx-auto" />
                <h3 className="font-semibold text-lg mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Portfolio */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Featured Work</h2>
          <p className="text-lg text-gray-600 mt-2">Check out some of our best projects.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { img: "/images/portfolio1.jpg", title: "E-Commerce Store" },
              { img: "/images/portfolio2.jpg", title: "Corporate Website" },
              { img: "/images/portfolio3.jpg", title: "Startup Landing Page" },
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
            { name: "Basic Website", price: "$299", features: ["5 Pages", "Responsive Design", "SEO Optimization"] },
            { name: "Business Website", price: "$799", features: ["10+ Pages", "CMS Integration", "Performance Optimization"] },
            { name: "E-Commerce Store", price: "$1499", features: ["Online Store", "Payment Integration", "Advanced Features"] },
          ].map((plan, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-3xl text-indigo-600 font-semibold mt-4">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg mt-4">Let’s build a high-performing, beautifully designed website for your business.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Request a Free Quote
            </a>
            <a href="/portfolio" className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
