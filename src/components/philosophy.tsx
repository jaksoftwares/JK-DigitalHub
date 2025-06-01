'use client';

import { Lightbulb, Users, Target, Compass, Heart } from 'lucide-react';

const philosophies = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: 'Innovation-Driven',
    description:
      'I believe in constantly exploring new technologies and ideas to craft solutions that are not just functional — but forward-thinking and impactful.',
    color: 'bg-yellow-500',
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: 'Purpose Over Product',
    description:
      'Every line of code, every pixel on screen must serve a purpose — to solve real problems, enhance experiences, and bring value to people.',
    color: 'bg-red-500',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'User-Centered Design',
    description:
      'I design and develop with empathy, ensuring that the end user’s needs, pain points, and goals guide every decision from wireframe to deployment.',
    color: 'bg-blue-600',
  },
  {
    icon: <Compass className="w-6 h-6 text-white" />,
    title: 'Integrity & Growth',
    description:
      'Whether collaborating with teams or clients, I lead with integrity, always open to learning, adapting, and leveling up through feedback and experience.',
    color: 'bg-green-600',
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: 'Passion-Led Craft',
    description:
      'I’m passionate about what I do — and that passion fuels the creativity, consistency, and care that goes into every solution I deliver.',
    color: 'bg-pink-600',
  },
];

export default function PhilosophySection() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">My Philosophy</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          My approach blends technology, creativity, and human-centered thinking to build solutions
          that not only function but inspire. Here’s what guides my work:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} mb-5 shadow`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
