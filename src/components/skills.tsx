'use client';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiSqlite,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiE,
  SiEagle,
} from 'react-icons/si';

import { FaMobileAlt, FaUsers, FaLightbulb, FaChalkboardTeacher, FaTasks } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 className="inline-block w-5 h-5 mr-2 text-orange-600" /> },
      { name: 'CSS3', icon: <SiCss3 className="inline-block w-5 h-5 mr-2 text-blue-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="inline-block w-5 h-5 mr-2 text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="inline-block w-5 h-5 mr-2 text-blue-600" /> },
      { name: 'React', icon: <SiReact className="inline-block w-5 h-5 mr-2 text-cyan-500" /> },
      { name: 'Vue.js', icon: <SiVuedotjs className="inline-block w-5 h-5 mr-2 text-green-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="inline-block w-5 h-5 mr-2 text-teal-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="inline-block w-5 h-5 mr-2 text-gray-900 dark:text-white" /> },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', icon: <SiDjango className="inline-block w-5 h-5 mr-2 text-green-800" /> },
      { name: 'Django REST Framework', icon: <SiDjango className="inline-block w-5 h-5 mr-2 text-green-700" /> },
      { name: 'Node.js', icon: <SiNodedotjs className="inline-block w-5 h-5 mr-2 text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="inline-block w-5 h-5 mr-2 text-gray-700" /> },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="inline-block w-5 h-5 mr-2 text-blue-800" /> },
      { name: 'Supabase', icon: <SiSupabase className="inline-block w-5 h-5 mr-2 text-blue-700" /> },
      { name: 'Firebase', icon: <SiFirebase className="inline-block w-5 h-5 mr-2 text-yellow-500" /> },
      { name: 'SQLite', icon: <SiSqlite className="inline-block w-5 h-5 mr-2 text-gray-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="inline-block w-5 h-5 mr-2 text-green-600" /> },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: <SiGit className="inline-block w-5 h-5 mr-2 text-orange-600" /> },
      { name: 'GitHub', icon: <SiGithub className="inline-block w-5 h-5 mr-2 text-gray-800 dark:text-white" /> },
      { name: 'Vercel', icon: <SiVercel className="inline-block w-5 h-5 mr-2 text-black dark:text-white" /> },
      { name: 'Netlify', icon: <SiNetlify className="inline-block w-5 h-5 mr-2 text-green-700" /> },
      { name: 'Figma', icon: <SiFigma className="inline-block w-5 h-5 mr-2 text-pink-600" /> },
      { name: 'Postman', icon: <SiPostman className="inline-block w-5 h-5 mr-2 text-orange-500" /> },
    ],
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'SEO Optimization', icon: <SiE className="inline-block w-5 h-5 mr-2 text-green-500" /> },
      { name: 'Mobile Responsiveness', icon: <FaMobileAlt className="inline-block w-5 h-5 mr-2 text-blue-500" /> },
      { name: 'UI/UX Design', icon: <SiFigma className="inline-block w-5 h-5 mr-2 text-pink-600" /> },
      { name: 'Agile Workflow', icon: <SiEagle className="inline-block w-5 h-5 mr-2 text-purple-600" /> },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Time Management', icon: <FaTasks className="inline-block w-5 h-5 mr-2 text-yellow-500" /> },
      { name: 'Team Collaboration', icon: <FaUsers className="inline-block w-5 h-5 mr-2 text-cyan-600" /> },
      { name: 'Problem Solving', icon: <FaLightbulb className="inline-block w-5 h-5 mr-2 text-yellow-400" /> },
      { name: 'Leadership', icon: <FaUsers className="inline-block w-5 h-5 mr-2 text-red-600" /> },
      { name: 'Presentation', icon: <FaChalkboardTeacher className="inline-block w-5 h-5 mr-2 text-indigo-600" /> },
    ],
  },
];

export default function EnhancedSkillsSection() {
  return (
    <section className="mb-24 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white flex items-center justify-center gap-4">
         Skills & Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {skillsData.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700 pb-3">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills.map(({ name, icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-5 py-2 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-300 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-default select-none"
                  title={name}
                >
                  {icon}
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
