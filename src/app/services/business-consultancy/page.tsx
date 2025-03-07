import { FaChartBar, FaLightbulb, FaHandshake, FaMoneyBillWave, FaGlobe, FaUsers, FaChartLine } from "react-icons/fa";

export default function BusinessConsulting() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full bg-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Unlock Business Growth with Expert Consulting</h1>
        <p className="text-lg mt-4">Strategic insights, digital transformation, and market positioning to scale your business.</p>
        <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get a Free Consultation
        </button>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Market Insights", desc: "In-depth research for competitive advantage.", icon: <FaChartBar className="text-5xl text-green-600" /> },
            { title: "Scalable Growth", desc: "Strategies designed for business expansion.", icon: <FaChartLine className="text-5xl text-green-600" /> },
            { title: "Tech Integration", desc: "Leverage modern technology for efficiency.", icon: <FaGlobe className="text-5xl text-green-600" /> },
            { title: "ROI-Driven Strategies", desc: "Maximize profits and optimize costs.", icon: <FaMoneyBillWave className="text-5xl text-green-600" /> }
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 shadow-md rounded-lg">
              {feature.icon}
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Business Consultancy Services</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: <FaLightbulb className="text-6xl text-green-600 mx-auto" />, title: "Business Strategy Development" },
            { icon: <FaHandshake className="text-6xl text-green-600 mx-auto" />, title: "Market Positioning & Branding" },
            { icon: <FaUsers className="text-6xl text-green-600 mx-auto" />, title: "Customer Acquisition & Retention" }
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              {item.icon}
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Packages - Well Styled */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Consulting Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Startup Plan", price: "$300", desc: "Market research, business strategy, brand positioning." },
            { title: "Growth Plan", price: "$750", desc: "Advanced growth strategies, customer retention, tech integration." },
            { title: "Enterprise Plan", price: "Custom Quote", desc: "Full-scale consulting, automation, long-term strategy." }
          ].map((packageItem, index) => (
            <div key={index} className="bg-white p-8 shadow-lg rounded-lg text-center border border-green-500">
              <h3 className="text-2xl font-bold">{packageItem.title}</h3>
              <FaChartLine className="text-6xl text-green-600 mx-auto my-4" />
              <p className="text-green-600 text-3xl font-semibold">{packageItem.price}</p>
              <p className="text-gray-600 mt-2">{packageItem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies & Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Tech Startup Growth", desc: "Helped a SaaS company scale from $10k to $100k revenue in 6 months." },
            { title: "E-Commerce Expansion", desc: "Optimized an online store, boosting conversions by 45%." },
            { title: "Corporate Digitalization", desc: "Guided a company through full tech transformation, reducing costs by 30%." }
          ].map((caseStudy, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{caseStudy.title}</h3>
              <p className="text-gray-600 mt-2">{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { quote: "Joseph’s consulting helped us scale quickly and establish a strong market presence!", author: "Business Owner" },
            { quote: "With Dovepeak Digital Solutions, we transformed into a tech-driven company!", author: "Corporate Client" }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <p className="text-gray-700 italic">“{testimonial.quote}”</p>
              <p className="mt-2 font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Scale Your Business?</h2>
        <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Book a Free Consultation
        </button>
      </section>
    </div>
  );
}
