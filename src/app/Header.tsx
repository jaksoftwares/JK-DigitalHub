"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle (Optional)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isSticky ? "shadow-lg bg-white dark:bg-gray-900" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="JK Digital Hub" width={40} height={40} />
          <span className="text-2xl font-bold text-blue-600 dark:text-white">JK Digital Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">About</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-blue-600 transition"
            >
              <span>Services</span>
              <ChevronDown size={18} />
            </button>
            {servicesDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-lg p-2">
                <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Web Development</Link>
                <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">SEO</Link>
                <Link href="/services/marketing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Marketing</Link>
              </div>
            )}
          </div>

          <Link href="/portfolio" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Portfolio</Link>
          <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Blog</Link>
          <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Contact</Link>

          {/* Call-to-Action Button */}
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Hire Me
          </Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-4 text-gray-800 dark:text-gray-200">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 dark:text-gray-200">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Services</Link>
            <Link href="/portfolio" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Portfolio</Link>
            <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Blog</Link>
            <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">Contact</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              Hire Me
            </Link>
            <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 mt-2">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
