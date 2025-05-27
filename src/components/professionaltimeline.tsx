import { motion } from "framer-motion";

{/* Professional Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Professional Timeline</h2>
          <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
            {[
              {
                year: "2018",
                title: "Graduated from JKUAT",
                desc: "BSc in Computer Science, with a focus on AI and software engineering.",
              },
              {
                year: "2019",
                title: "Founded Dovepeak Digital Solutions",
                desc: "A digital transformation firm serving startups and SMEs.",
              },
              {
                year: "2020",
                title: "Developed JCRM Platform",
                desc: "Created a comprehensive church management & eCommerce platform.",
              },
              {
                year: "2022",
                title: "Launched StudyThrive",
                desc: "AI-powered academic support platform for students and professionals.",
              },
              {
                year: "2024",
                title: "Pioneered SmartTraffic AI",
                desc: "AI system to optimize traffic and reduce urban congestion through data intelligence.",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow"
              >
                <span className="text-blue-600 font-bold">{event.year}</span>
                <h3 className="text-xl font-semibold mt-1">{event.title}</h3>
                <p className="mt-2 text-gray-700">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
