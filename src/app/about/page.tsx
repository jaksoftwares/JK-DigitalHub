// app/about/page.tsx (or pages/about.tsx)
'use client';

import AboutSection from '@/components/about';
import ServicesSection from '@/components/services';
import SkillsSection from '@/components/skills';
import WorkExperience from '@/components/experience';
import PhilosophySection from '@/components/philosophy';
import AchievementsSection from '@/components/achievements';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 px-4 py-10 md:px-20">

      <AboutSection />
      
      <ServicesSection />

      <SkillsSection />


      <WorkExperience />

      <PhilosophySection />

      <AchievementsSection />

      {/* TESTIMONIALS SECTION */}

 

    </div>
  );
}
