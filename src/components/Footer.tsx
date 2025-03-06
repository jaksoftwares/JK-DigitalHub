"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding Section */}
        <div>
          <Image src="/logo.png" alt="JK Digital Hub" width={50} height={50} />
          <h2 className="text-xl font-semibold text-white mt-2">JK Digital Hub</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empowering businesses through digital solutions, strategic consultancy, and top-tier web services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/services/web-development" className="hover:text-blue-400">Web Development</Link></li>
            <li><Link href="/services/seo" className="hover:text-blue-400">SEO Optimization</Link></li>
            <li><Link href="/services/marketing" className="hover:text-blue-400">Digital Marketing</Link></li>
            <li><Link href="/services/consulting" className="hover:text-blue-400">Business Consulting</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>contact@jkdigitalhub.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+123 456 7890</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-blue-400"><Facebook size={24} /></Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400"><Twitter size={24} /></Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400"><Linkedin size={24} /></Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400"><Github size={24} /></Link>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <h3 className="text-lg font-semibold text-white">Subscribe to Our Newsletter</h3>
        <p className="text-sm text-gray-400 mt-1">Stay updated with the latest insights and trends.</p>
        <form className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 w-64 rounded-l-lg border border-gray-700 bg-gray-800 text-gray-300 focus:outline-none" />
          <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700">Subscribe</button>
        </form>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JK Digital Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
