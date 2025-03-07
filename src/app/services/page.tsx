import { FaCode, FaShoppingCart, FaLightbulb, FaChartLine, FaBullhorn, FaLaptop, FaCheckCircle, FaUsers } from "react-icons/fa";

const services = [
  { title: "Web Development", description: "Crafting high-performance websites tailored for businesses.", icon: FaCode, link: "/services/web-development" },
  { title: "eCommerce Solutions", description: "Creating seamless online shopping experiences.", icon: FaShoppingCart, link: "/services/ecommerce" },
  { title: "SEO & Digital Marketing", description: "Boosting your online presence with strategic marketing.", icon: FaBullhorn, link: "/services/seo-marketing" },
  { title: "Business Consultancy", description: "Helping businesses scale through expert advice.", icon: FaLightbulb, link: "/services/business-consulting" },
  { title: "Software Development", description: "Building cutting-edge software solutions for businesses.", icon: FaLaptop, link: "/services/software-development" },
  { title: "Strategic Leadership & Growth", description: "Empowering leaders to drive business success.", icon: FaChartLine, link: "/services/strategic-leadership" },
];

const successStories = [
  { quote: "Joseph's SEO strategies skyrocketed our traffic, bringing in 3x more leads!", client: "ABC Marketing Agency" },
  { quote: "The eCommerce store they built increased our sales by 200% in just 3 months!", client: "Kellian AutoGarage" },
  { quote: "Their consultancy helped us transition into a digital-first business model.", client: "JCRM Church" },
];

const faqs = [
  { question: "What industries do you specialize in?", answer: "We work with businesses across all industries, from startups to enterprises." },
  { question: "How long does a typical project take?", answer: "Project timelines vary, but we aim for efficiency while maintaining quality." },
  { question: "Do you offer ongoing support after project completion?", answer: "Yes! We offer maintenance and support plans to keep your systems running smoothly." },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg mt-4">Elevate your business with our top-tier digital solutions.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Explore Our Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <a key={index} href={service.link} className="block p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <service.icon className="text-blue-600 text-5xl mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-center">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{service.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-blue-600 text-5xl" />
              <h3 className="text-xl font-semibold mt-4">Proven Expertise</h3>
              <p className="mt-2 text-gray-600">Years of experience in software, digital marketing, and business consultancy.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-blue-600 text-5xl" />
              <h3 className="text-xl font-semibold mt-4">Client-Focused Approach</h3>
              <p className="mt-2 text-gray-600">We tailor solutions to meet your unique business needs.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLightbulb className="text-blue-600 text-5xl" />
              <h3 className="text-xl font-semibold mt-4">Innovative Solutions</h3>
              <p className="mt-2 text-gray-600">We integrate the latest technologies to ensure efficiency and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Client Success Stories</h2>
        <div className="mt-10 space-y-6">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 text-lg italic">{story.quote}</p>
              <p className="mt-4 font-semibold text-blue-700">- {story.client}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-blue-700">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mt-4 text-lg">Contact us today and let’s build something great together.</p>
        <a href="/contact" className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
          Get in Touch Today
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
