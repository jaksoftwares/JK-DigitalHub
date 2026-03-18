"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const services = [
  { name: "Business Consultancy", path: "/services/business-consultancy" },
  { name: "Digital Transformation", path: "/services/digital-transformation" },
  { name: "Web Development", path: "/services/web-development" },
  { name: "Software Development", path: "/services/software-development" },
  { name: "SEO & Digital Marketing", path: "/services/seo-digital-marketing" },
  { name: "Strategic Leadership", path: "/services/strategic-leadership-business-growth" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-white transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 z-50">
          <Image src="/jk-logo.png" alt="Joseph Kirika" width={44} height={44} className="rounded-lg shadow-sm" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Joseph Kirika</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center h-full">
          <Link href="/" className={`font-medium transition-colors ${isActive('/') && pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Home</Link>
          <Link href="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About</Link>

          {/* Services Dropdown (Hover) */}
          <div className="relative group h-full flex items-center">
            <Link href="/services" className={`flex items-center space-x-1 font-medium transition-colors py-2 ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              <span>Services</span>
              <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
            </Link>
            
            <div className="absolute left-0 top-full -mt-2 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left border border-gray-100 overflow-hidden">
              <div className="py-2">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path} 
                    className={`block px-5 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors ${isActive(service.path) ? 'text-blue-600 bg-blue-50' : 'text-gray-700'}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className={`font-medium transition-colors ${isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Portfolio</Link>
          <Link href="/blog" className={`font-medium transition-colors ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Blog</Link>
          <Link href="/contact" className={`font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block z-50">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0">
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800 z-50 p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col space-y-6">
            <Link onClick={() => setIsOpen(false)} href="/" className={`text-xl font-semibold ${isActive('/') && pathname === '/' ? 'text-blue-600' : 'text-gray-800'}`}>Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/about" className={`text-xl font-semibold ${isActive('/about') ? 'text-blue-600' : 'text-gray-800'}`}>About</Link>
            
            {/* Mobile Services Accordion */}
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between text-xl font-semibold w-full text-left ${isActive('/services') ? 'text-blue-600' : 'text-gray-800'}`}
              >
                <span>Services</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`flex flex-col pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-96 opacity-100 mt-3 space-y-4' : 'max-h-0 opacity-0'}`}>
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    onClick={() => setIsOpen(false)} 
                    href={service.path} 
                    className={`text-base block ${isActive(service.path) ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link onClick={() => setIsOpen(false)} href="/portfolio" className={`text-xl font-semibold ${isActive('/portfolio') ? 'text-blue-600' : 'text-gray-800'}`}>Portfolio</Link>
            <Link onClick={() => setIsOpen(false)} href="/blog" className={`text-xl font-semibold ${isActive('/blog') ? 'text-blue-600' : 'text-gray-800'}`}>Blog</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact" className={`text-xl font-semibold ${isActive('/contact') ? 'text-blue-600' : 'text-gray-800'}`}>Contact</Link>
          </nav>
          
          <div className="mt-auto pt-8">
            <Link onClick={() => setIsOpen(false)} href="/contact" className="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-full font-medium shadow-lg shadow-blue-600/30 active:bg-blue-700 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
