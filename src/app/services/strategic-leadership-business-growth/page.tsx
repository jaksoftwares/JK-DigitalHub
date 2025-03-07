import { FaLightbulb, FaChartLine, FaUsers, FaBalanceScale, FaGlobe, FaHandshake, FaBusinessTime, FaTrophy } from "react-icons/fa";
import Image from "next/image";

const StrategicLeadership = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Strategic Leadership & Business Growth</h1>
          <p className="text-lg mt-4">
            Empowering businesses with visionary leadership and actionable growth strategies.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
              Get a Free Consultation
            </a>
            <a href="#success-stories" className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
              View Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our Leadership & Growth Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { icon: FaLightbulb, title: "Visionary Insights", desc: "Helping you craft a clear and actionable strategic vision." },
            { icon: FaChartLine, title: "Growth Acceleration", desc: "Practical business strategies to drive sustainable growth." },
            { icon: FaUsers, title: "Leadership Development", desc: "Transforming leaders for high-impact decision-making." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <item.icon className="text-green-600 text-4xl mx-auto" />
              <h3 className="font-semibold text-lg mt-4">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Our Strategic Leadership Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FaBalanceScale, title: "Business Strategy Consulting", desc: "Aligning leadership with market trends and business goals." },
              { icon: FaGlobe, title: "Global Expansion Strategies", desc: "Scaling businesses into new markets with confidence." },
              { icon: FaHandshake, title: "Partnership Development", desc: "Creating impactful business collaborations." },
              { icon: FaBusinessTime, title: "Entrepreneurial Coaching", desc: "Guiding entrepreneurs through business challenges." },
              { icon: FaChartLine, title: "Performance Optimization", desc: "Boosting efficiency and profitability." },
              { icon: FaTrophy, title: "Success Roadmaps", desc: "Custom growth strategies tailored for your business." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <service.icon className="text-green-600 text-4xl mx-auto" />
                <h3 className="font-semibold text-lg mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Business Growth Strategies */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Key Business Growth Strategies</h2>
          <p className="text-lg text-gray-600 mt-2">Essential elements for scaling your business.</p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["Market Penetration", "Customer Retention", "Revenue Diversification", "Operational Efficiency", "Brand Positioning"].map((strategy, index) => (
              <span key={index} className="bg-green-100 text-green-900 px-4 py-2 rounded-lg font-semibold shadow">
                {strategy}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              { img: "/images/success1.jpg", title: "Startup Growth from Zero to Scale" },
              { img: "/images/success2.jpg", title: "Multi-National Expansion Strategy" },
              { img: "/images/success3.jpg", title: "Entrepreneurial Coaching Success" },
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
        <h2 className="text-3xl font-bold">Coaching & Consultation Packages</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { name: "Startup Strategy", price: "$599", features: ["1-on-1 Coaching", "Growth Plan", "Market Insights"] },
            { name: "Business Accelerator", price: "$1799", features: ["Full Strategy Blueprint", "Leadership Training", "Revenue Scaling"] },
            { name: "Enterprise Leadership", price: "Custom Quote", features: ["Global Business Strategy", "Advanced Market Analysis", "Executive Coaching"] },
          ].map((plan, index) => (
            <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-3xl text-green-600 font-semibold mt-4">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Unlock Your Business Potential</h2>
        <a href="/contact" className="mt-6 bg-white text-green-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100">
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default StrategicLeadership;
