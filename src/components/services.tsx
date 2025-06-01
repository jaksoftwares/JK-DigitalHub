'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code,
  Search,
  RefreshCw,
  BarChart2,
  Globe,
  Layout,
  UserCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Business Consultancy',
    desc: 'Tailored advice to help businesses align operations with tech trends and unlock opportunities.',
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: 'bg-blue-600',
    link: '/services/business-consultancy',
  },
  {
    title: 'Strategic Leadership & Growth',
    desc: 'Empowering businesses to scale through executive strategy, planning, and visionary leadership.',
    icon: <BarChart2 className="w-8 h-8 text-white" />,
    color: 'bg-indigo-600',
    link: '/services/strategic-leadership-business-growth',
  },
  {
    title: 'Digital Transformation',
    desc: 'Helping companies modernize workflows and systems for agility, automation, and innovation.',
    icon: <RefreshCw className="w-8 h-8 text-white" />,
    color: 'bg-yellow-500',
    link: '/services/digital-transformation',
  },
  {
    title: 'Web Development',
    desc: 'Crafting modern, responsive, and high-performance websites that drive user engagement.',
    icon: <Globe className="w-8 h-8 text-white" />,
    color: 'bg-purple-600',
    link: '/services/web-development',
  },
  {
    title: 'Software Development',
    desc: 'Building reliable software and SaaS platforms tailored to solve real-world problems.',
    icon: <Code className="w-8 h-8 text-white" />,
    color: 'bg-pink-600',
    link: '/services/software-development',
  },
  {
    title: 'SEO & Digital Marketing',
    desc: 'Improving search rankings and driving traffic through SEO, campaigns, and analytics.',
    icon: <Search className="w-8 h-8 text-white" />,
    color: 'bg-green-600',
    link: '/services/seo-digital-marketing',
  },
  {
    title: 'UI/UX Design & Prototyping',
    desc: 'Designing clean, intuitive user experiences and prototypes that drive retention.',
    icon: <Layout className="w-8 h-8 text-white" />,
    color: 'bg-orange-500',
    link: '/services/ui-ux-design',
  },
  {
    title: 'Technical Mentorship & Training',
    desc: 'Mentoring teams and individuals in coding, strategy, and digital leadership.',
    icon: <UserCheck className="w-8 h-8 text-white" />,
    color: 'bg-teal-600',
    link: '/services/mentorship-training',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-4xl font-extrabold text-gray-900">What I Do</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          I offer top-notch services to help businesses thrive in the digital world.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="cursor-pointer" passHref>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center rounded-full w-12 h-12 ${service.color} mb-5 shadow-lg`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <a
          href="/services"
          className="mt-14 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}
