"use client";

import { useState } from "react";
import Link from "next/link";

export default function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">Terms & Conditions</h1>
      <p className="text-gray-600 text-center mt-3">Last updated: March 7, 2025</p>

      {/* Introduction */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-3">
          Welcome to <strong>Dovepeak Digital Solutions (DDS)</strong>. By accessing and using our website, services, 
          and applications, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue use.
        </p>
      </section>

      {/* User Obligations */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">2. User Responsibilities</h2>
        <p className="text-gray-600 mt-3">By using our services, you agree that you will:</p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li>Use our services only for lawful purposes.</li>
          <li>Not engage in fraudulent, abusive, or harmful activities.</li>
          <li>Provide accurate and up-to-date information when required.</li>
          <li>Respect the intellectual property rights of DDS and third parties.</li>
        </ul>
      </section>

      {/* Intellectual Property Rights */}
      <section className="mt-10 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">3. Intellectual Property</h2>
        <p className="text-gray-600 mt-3">
          All content, trademarks, and intellectual property on this website, including text, graphics, logos, and 
          software, are the property of DDS and protected by copyright and trademark laws. Unauthorized use is strictly 
          prohibited.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">4. Limitation of Liability</h2>
        <p className="text-gray-600 mt-3">
          DDS is not responsible for any direct, indirect, incidental, or consequential damages resulting from the use of our services.
        </p>
        <p className="text-gray-600 mt-3">
          We do not guarantee uninterrupted or error-free service and are not liable for any disruptions.
        </p>
      </section>

      {/* Third-Party Links */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">5. Third-Party Services & Links</h2>
        <p className="text-gray-600 mt-3">
          Our website may contain links to third-party websites or services. We do not endorse or take responsibility for 
          the content, security, or practices of these external sites.
        </p>
      </section>

      {/* Termination of Service */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">6. Termination</h2>
        <p className="text-gray-600 mt-3">
          DDS reserves the right to terminate or suspend user access if there is a violation of these terms, fraudulent 
          activity, or misuse of our services.
        </p>
      </section>

      {/* Governing Law & Dispute Resolution */}
      <section className="mt-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">7. Governing Law & Dispute Resolution</h2>
        <p className="text-gray-600 mt-3">
          These Terms & Conditions are governed by the laws of [Your Country]. Any disputes arising shall be resolved 
          through arbitration or legal proceedings in the jurisdiction of DDS’s headquarters.
        </p>
      </section>

      {/* Updates to Terms */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">8. Changes to These Terms</h2>
        <p className="text-gray-600 mt-3">
          DDS reserves the right to update or modify these Terms & Conditions at any time. Changes will be posted on this 
          page, and continued use of our services implies acceptance.
        </p>
      </section>

      {/* User Agreement Confirmation */}
      <section className="mt-10 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">9. Acceptance of Terms</h2>
        <p className="text-gray-600 mt-3">
          By using our services, you confirm that you have read and agreed to these Terms & Conditions.
        </p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="accept"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="w-5 h-5 text-blue-600"
          />
          <label htmlFor="accept" className="ml-2 text-gray-700">
            I have read and accept the Terms & Conditions.
          </label>
        </div>
        <div className="mt-6 text-center">
          <button
            disabled={!accepted}
            className={`px-6 py-3 font-semibold rounded-lg ${
              accepted ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">10. Contact Us</h2>
        <p className="text-gray-600 mt-3">
          If you have any questions regarding these Terms & Conditions, you can contact us at:
        </p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li>Email: <a href="mailto:legal@dovepeakdigital.com" className="text-blue-600">legal@dovepeakdigital.com</a></li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Business Street, City, Country</li>
        </ul>
      </section>

      {/* Back to Home Button */}
      <div className="mt-10 text-center">
        <Link href="/" className="bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
