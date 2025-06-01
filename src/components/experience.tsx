'use client';

export default function WorkExperience() {
  const experiences = [
    {
      role: "Business Consultant / Developer",
      company: "Kellian Autogarage",
      period: "January 2025 to Present",
      website: "#", // Replace with actual URL
      responsibilities: [
        "Designed and launched the company’s official website, spearheading its digital transformation initiative.",
        "Provided strategic business consulting across operations, human resources, and marketing to drive growth and efficiency.",
        "Enhanced brand visibility and streamlined internal workflows by implementing effective digital tools.",
      ],
    },
    {
      role: "Web Developer",
      company: "Kids Beyond Limits",
      period: "August 2024 to January 2025",
      website: "#", // Replace with actual URL
      responsibilities: [
        "Developed a fully responsive, accessible website tailored for a children’s nonprofit organization.",
        "Integrated a backend Content Management System (CMS) to enable seamless content updates.",
        "Improved search engine optimization (SEO) and optimized site performance to ensure fast load times.",
      ],
    },
    {
      role: "Web Developer (Contract)",
      company: "JKUAT – Department of Computing",
      period: "May 2024 to August 2024",
      website: "#", // Replace with actual URL
      responsibilities: [
        "Redeveloped the Computing Department’s main website and created a dedicated sub-site for the Social Robotics Lab.",
        "Delivered intuitive UI/UX designs that enhanced user engagement for students and staff.",
        "Ensured a fast, fully responsive website compatible across all devices.",
      ],
    },
    {
      role: "Developer",
      company: "JKUAT Social Robotics",
      period: "Dates not specified",
      website: "#", // Add URL if any
      responsibilities: [
        "Contributed to developing innovative robotics applications and software for research projects.",
      ],
    },
    {
      role: "Developer and Consultant",
      company: "Tripatite Interiors",
      period: "January 2025 to Present",
      website: "#", // Add URL if any
      responsibilities: [
        "Providing development and consulting services tailored to interior design business needs.",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map(({ role, company, period, website, responsibilities }, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{role}</h3>
                  <p className="text-blue-600 font-medium">{company}</p>
                </div>
                <div className="mt-3 sm:mt-0 text-gray-500 italic">{period}</div>
              </div>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 text-blue-600 hover:underline font-semibold"
              >
                Visit Site
              </a>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
