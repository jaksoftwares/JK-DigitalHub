'use client';

import { Award, Star, Trophy, Rocket, BadgeCheck } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Launched Multiple Production Projects',
    description:
      'Successfully built and deployed high-impact web applications across industries including education, automotive, and interior design.',
    color: 'bg-indigo-600',
  },
  {
    icon: <Rocket className="w-6 h-6 text-white" />,
    title: 'Digital Transformation Leader',
    description:
      'Led strategic digital transformation initiatives, integrating technology to improve efficiency and brand visibility.',
    color: 'bg-blue-600',
  },
  {
    icon: <Trophy className="w-6 h-6 text-white" />,
    title: 'Recognized Developer',
    description:
      'Recognized by clients and organizations for delivering user-focused, performant, and scalable digital solutions.',
    color: 'bg-yellow-500',
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-white" />,
    title: 'Trusted Technical Consultant',
    description:
      'Provided consulting to businesses on technology adoption, operations optimization, and strategic growth through digital tools.',
    color: 'bg-green-600',
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: 'Community Impact',
    description:
      'Worked with nonprofits and educational institutions to create accessible, mission-aligned platforms that make a difference.',
    color: 'bg-pink-600',
  },
];

export default function AchievementsSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">🏆 Achievements</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          A track record of turning ideas into reality — here are some milestones that define my
          professional journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
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
