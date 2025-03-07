"use client";

import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 text-center">Privacy Policy</h1>
      <p className="text-gray-600 text-center mt-3">Last updated: March 7, 2025</p>

      {/* Introduction */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 mt-3">
          Welcome to <strong>Dovepeak Digital Solutions (DDS)</strong>. We are committed to protecting your privacy
          and ensuring that your personal data is handled securely and responsibly.
        </p>
      </section>

      {/* GDPR Compliance */}
      <section className="mt-10 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">2. Your Rights Under GDPR</h2>
        <p className="text-gray-600 mt-3">
          If you are located in the European Economic Area (EEA), you have specific rights under the General Data
          Protection Regulation (GDPR), including:
        </p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li>The right to access, update, or delete your personal information.</li>
          <li>The right to object to processing or request data portability.</li>
          <li>The right to withdraw consent at any time.</li>
          <li>The right to file a complaint with a data protection authority.</li>
        </ul>
        <p className="text-gray-600 mt-3">
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:privacy@dovepeakdigital.com" className="text-blue-600 font-semibold">
            privacy@dovepeakdigital.com
          </a>.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">3. Information We Collect</h2>
        <p className="text-gray-600 mt-3">We may collect the following types of data:</p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li><strong>Personal Data:</strong> Name, email, phone number, business details.</li>
          <li><strong>Usage Data:</strong> IP address, device information, website activity.</li>
          <li><strong>Cookies:</strong> Data collected through cookies and analytics tools.</li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">4. How We Use Your Information</h2>
        <p className="text-gray-600 mt-3">Your information is used for:</p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li>Providing and improving our services.</li>
          <li>Communicating updates and marketing materials.</li>
          <li>Ensuring compliance with legal obligations.</li>
        </ul>
      </section>

      {/* Cookies & Tracking */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">5. Cookies & Tracking</h2>
        <p className="text-gray-600 mt-3">
          We use cookies to improve user experience and analyze website traffic. You can manage your cookie
          preferences in your browser settings.
        </p>
      </section>

      {/* User Consent */}
      <section className="mt-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">6. User Consent</h2>
        <p className="text-gray-600 mt-3">
          By using our services, you agree to this Privacy Policy. If you do not agree, please refrain from using our
          website. You may withdraw consent at any time.
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
            I have read and accept the Privacy Policy.
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
        <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
        <p className="text-gray-600 mt-3">
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <ul className="list-disc pl-5 mt-3 text-gray-600">
          <li>Email: <a href="mailto:privacy@dovepeakdigital.com" className="text-blue-600">privacy@dovepeakdigital.com</a></li>
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
