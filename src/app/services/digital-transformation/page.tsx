import { CheckCircle, Cloud, Shield, BarChart, Workflow } from "lucide-react";
import Link from "next/link";

export default function DigitalTransformation() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Empowering Businesses with Digital Transformation</h1>
        <p className="mt-4 text-lg">
          Leverage technology to streamline operations, enhance efficiency, and drive growth.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Get a Free Consultation
          </Link>
          <Link href="/portfolio" className="border border-white px-6 py-3 rounded-lg font-semibold">
            Explore Case Studies
          </Link>
        </div>
      </section>

      {/* Why Digital Transformation */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Digital Transformation Matters</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Efficiency & Automation", icon: <Workflow size={40} />, desc: "Streamline operations and reduce manual effort." },
            { title: "Cloud Integration", icon: <Cloud size={40} />, desc: "Secure cloud storage and business accessibility." },
            { title: "Data-Driven Insights", icon: <BarChart size={40} />, desc: "Make smart business decisions with analytics." },
            { title: "Competitive Edge", icon: <CheckCircle size={40} />, desc: "Stay ahead with cutting-edge technology." },
            { title: "Enhanced Security", icon: <Shield size={40} />, desc: "Protect your business from cyber threats." },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="text-blue-600">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Digital Transformation Services</h2>
          <p className="mt-4 text-gray-600">We offer tailored solutions to help businesses transition seamlessly.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Business Process Automation", desc: "Automate workflows for efficiency." },
              { title: "Cloud Migration", desc: "Move to secure cloud environments." },
              { title: "ERP & CRM Solutions", desc: "Manage operations with powerful software." },
              { title: "E-commerce Integration", desc: "Set up online stores and digital presence." },
              { title: "AI & Analytics", desc: "Data-driven automation and insights." },
              { title: "Cybersecurity & Compliance", desc: "Ensure security and regulatory compliance." },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Choose Your Plan</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Starter", price: "$499", features: ["Basic Consultation", "Website Setup", "Automation Guide"] },
            { title: "Growth", price: "$999", features: ["CRM & Analytics", "Cloud Integration", "SEO & Marketing"] },
            { title: "Enterprise", price: "Custom", features: ["Full Digital Transformation", "AI & Security", "Advanced Automations"] },
          ].map((plan, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-2">
                    <CheckCircle className="text-blue-600" size={18} /> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Digitally Transform Your Business?</h2>
        <p className="mt-4 text-lg">Take the next step in your digital journey with a tailored strategy.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
            Let’s Get Started
          </Link>
          <Link href="/contact" className="border border-white px-6 py-3 rounded-lg font-semibold">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
