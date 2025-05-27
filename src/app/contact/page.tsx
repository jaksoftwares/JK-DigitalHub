"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200">
            We&apos;d love to hear from you! Reach out to us anytime.
          </p>
        </div>
      </section>

     {/* Contact Form + Info Combined */}
<section className="bg-white py-16">
  <div className="container mx-auto px-6">
    <div className="bg-gray-100 p-10 rounded-xl shadow-md flex flex-col lg:flex-row gap-10">
      {/* Form */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <Input type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <Input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <Textarea rows={4} placeholder="Write your message..." />
          </div>
          <Button className="w-full bg-blue-600 text-white py-3 font-bold hover:bg-blue-700 transition">
            Send Message
          </Button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/3 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-700">Call Us</p>
            <p className="text-gray-600">+254 714703374</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-700">Email Us</p>
            <p className="text-gray-600">josephamuyunzu1978@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-700">Visit Us</p>
            <p className="text-gray-600">off-thika road Juja</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Map */}
      <section className="container mx-auto px-6 py-16">
        <div className="h-[400px] rounded-xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0782087455714!2d37.010848175738786!3d-1.10361193545534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f475f31591ec5%3A0x372bedd06ee6a9ee!2sCk%20plaza!5e0!3m2!1sen!2ske!4v1748353472561!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Connect with Us</h2>
        <p className="text-gray-600 mt-2">Follow us on social media for the latest updates</p>
        <div className="flex justify-center gap-6 mt-6 text-3xl">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="text-blue-600 hover:text-blue-800 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-blue-400 hover:text-blue-600 transition" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin className="text-blue-700 hover:text-blue-900 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-pink-500 hover:text-pink-700 transition" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
