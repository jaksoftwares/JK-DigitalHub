"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    category: "General",
    questions: [
      { question: "What services do you offer?", answer: "We provide business consultancy, software & web development, SEO & digital marketing, and strategic leadership guidance." },
      { question: "Who is this service for?", answer: "Our services are designed for businesses, entrepreneurs, and organizations looking to grow, optimize, and transition into the digital space." },
    ],
  },
  {
    category: "Services",
    questions: [
      { question: "Do you provide custom web development?", answer: "Yes! We build tailor-made web solutions to fit your business needs, including SaaS platforms, eCommerce stores, and company websites." },
      { question: "What industries do you specialize in?", answer: "We work with various industries, including finance, eCommerce, healthcare, education, real estate, and more." },
    ],
  },
  {
    category: "Pricing",
    questions: [
      { question: "Do you offer flexible pricing?", answer: "Yes! We offer different pricing plans based on project scope, complexity, and features required." },
      { question: "Are there any hidden costs?", answer: "No, we maintain transparency in pricing. All costs are discussed upfront before project commencement." },
    ],
  },
  {
    category: "Consultation & Support",
    questions: [
      { question: "How do I book a consultation?", answer: "You can book a free consultation through our contact page by selecting your preferred date and time." },
      { question: "Do you provide ongoing support after project completion?", answer: "Yes! We offer ongoing support, maintenance, and optimization services to ensure long-term success." },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-3">Find answers to the most common questions about our services and processes.</p>
      </div>

      {/* FAQ Sections */}
      <div className="mt-10 space-y-8">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.category}</h2>
            <div className="space-y-4">
              {section.questions.map((faq, index) => {
                const currentIndex = sectionIndex * 10 + index;
                return (
                  <div
                    key={currentIndex}
                    className="bg-white shadow-md rounded-lg p-5 cursor-pointer transition-all duration-300"
                    onClick={() => toggleFAQ(currentIndex)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === currentIndex ? "rotate-180" : ""}`} />
                    </div>
                    {openIndex === currentIndex && <p className="mt-3 text-gray-600">{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center bg-gray-100 p-6 rounded-lg">
        <HelpCircle className="w-12 h-12 text-blue-600 mx-auto" />
        <h3 className="text-2xl font-bold mt-4">Still Have Questions?</h3>
        <p className="text-gray-600 mt-2">Feel free to reach out, and we&apos;ll be happy to assist you.</p>
        <Button className="mt-4 bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700">
          <MessageCircle className="w-5 h-5 mr-2" /> Contact Us
        </Button>
      </div>
    </div>
  );
}
