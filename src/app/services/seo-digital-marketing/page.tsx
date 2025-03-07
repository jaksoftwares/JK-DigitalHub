import { FaSearch, FaChartLine, FaBullhorn, FaFileAlt, FaRocket, FaCrown } from "react-icons/fa";

const SeoDigitalMarketing = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Boost Your Business with Powerful SEO & Digital Marketing</h1>
          <p className="text-lg mt-4">We drive traffic, increase engagement, and maximize conversions.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Get Started
            </a>
            <a href="#results" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              See Results
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our SEO & Digital Marketing Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaRocket className="text-blue-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Proven Results</h3>
            <p className="mt-2 text-gray-600">We have successfully increased rankings and engagement for businesses worldwide.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaSearch className="text-blue-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Targeted Strategies</h3>
            <p className="mt-2 text-gray-600">Custom SEO and marketing plans that fit your unique business goals.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaChartLine className="text-blue-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Data-Driven Growth</h3>
            <p className="mt-2 text-gray-600">We use analytics, A/B testing, and performance tracking for the best results.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <FaBullhorn className="text-blue-600 text-4xl mx-auto" />
            <h3 className="font-semibold text-lg mt-4">Industry Expertise</h3>
            <p className="mt-2 text-gray-600">Years of experience in SEO, PPC, and content marketing.</p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our SEO & Digital Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FaSearch, title: "SEO Optimization", desc: "Boost your rankings with keyword optimization, on-page & off-page SEO." },
              { icon: FaFileAlt, title: "Content Marketing", desc: "Engaging blogs, articles, and content strategies to attract your audience." },
              { icon: FaBullhorn, title: "Social Media Marketing", desc: "Manage and grow your presence on Facebook, Instagram, and LinkedIn." },
              { icon: FaChartLine, title: "PPC Advertising", desc: "Run high-converting ads on Google and social media platforms." },
              { icon: FaRocket, title: "Growth Strategy", desc: "A/B testing, analytics, and data-driven marketing for maximum impact." },
              { icon: FaCrown, title: "Brand Authority", desc: "Establish your business as an industry leader with expert SEO tactics." },
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

      {/* Pricing Plans */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Affordable Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { name: "Starter Plan", price: "$99/month", features: ["SEO Audit", "Basic Keyword Research", "Social Media Setup"] },
            { name: "Growth Plan", price: "$249/month", features: ["Advanced SEO", "Monthly Blog Posts", "Social Media Marketing"] },
            { name: "Premium Plan", price: "$499/month", features: ["Full SEO", "PPC Ads", "Content Strategy", "24/7 Support"] },
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
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">Ready to Boost Your Business?</h2>
          <p className="text-lg mt-4">Let’s increase your visibility and revenue with our expert SEO & digital marketing services.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Book a Free Consultation
            </a>
            <a href="/services" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoDigitalMarketing;
