import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Empowering Businesses Through Innovation & Digital Excellence
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Business Consultant | Software & Web Developer | Digital Strategist
        </p>
        <div className="mt-6 space-x-4">
          <a href="/contact" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Get Started
          </a>
          <a href="/portfolio" className="px-6 py-3 border border-white rounded-lg shadow-md hover:bg-white hover:text-blue-700">
            View Portfolio
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-600">
          I’m <span className="font-semibold text-blue-600">Joseph Kirika</span>, a tech-driven business consultant and software developer. 
          With expertise in strategic marketing, web development, and SEO, I help businesses grow and transition into the digital age.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <span className="px-4 py-2 bg-gray-200 rounded-full">🎓 BSc Computer Science (JKUAT)</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full">🏢 Director, Dovepeak Digital Solutions</span>
          <span className="px-4 py-2 bg-gray-200 rounded-full">🚀 Expert in Digital Transformation</span>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">What I Do</h2>
          <p className="mt-4 text-lg text-gray-600">I offer top-notch services to help businesses thrive in the digital world.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Business Consultancy", desc: "Helping businesses transition into tech and optimize growth strategies." },
              { title: "Web & Software Development", desc: "Creating business platforms, SaaS solutions, and web apps." },
              { title: "SEO & Digital Marketing", desc: "Optimizing businesses to rank higher and increase online visibility." },
              { title: "Tech Migration", desc: "Guiding companies through digital transformation." },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <a href="/services" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Explore Services
          </a>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Featured Work</h2>
        <p className="mt-4 text-lg text-gray-600">Some of my standout projects.</p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "JCRM Church Web App", img: "/images/jcrm.jpg" },
            { title: "Kellian AutoGarage", img: "/images/kellian.jpg" },
            { title: "JKUAT Social Robotics Lab", img: "/images/jkuat.jpg" },
            { title: "Kids Beyond Limit", img: "/images/kids.jpg" },
            { title: "Dovepeak Digital Solutions", img: "/images/dovepeak.jpg" },
          ].map((project, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <Image src={project.img} width={400} height={250} alt={project.title} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{project.title}</h3>
            </div>
          ))}
        </div>
        <a href="/portfolio" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          View Full Portfolio
        </a>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">What Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600">Real feedback from those I’ve worked with.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { quote: "Working with Joseph transformed our business. His SEO strategy alone tripled our traffic!", client: "Client Name" },
              { quote: "Dovepeak Digital Solutions built an outstanding system for our church. We are now fully online!", client: "JCRM Team" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md w-80 hover:shadow-lg transition">
                <p className="italic text-gray-600">{testimonial.quote}</p>
                <h4 className="mt-4 font-semibold text-blue-700">- {testimonial.client}</h4>
              </div>
            ))}
          </div>
          <a href="/contact" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Let’s Work Together
          </a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mt-4 text-lg">Let’s discuss how we can take your business to the next level.</p>
        <div className="mt-6 space-x-4">
          <a href="/contact/book-consultation" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Book a Free Consultation
          </a>
          <a href="/contact" className="px-6 py-3 border border-white rounded-lg shadow-md hover:bg-white hover:text-blue-700">
            Let’s Talk
          </a>
        </div>
      </section>
    </main>
  );
}
