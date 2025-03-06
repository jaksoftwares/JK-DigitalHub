import Image from "next/image";

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Web & Software Development</h1>
      <p className="text-lg text-center text-gray-700">
        Building custom business platforms, SaaS solutions, and web applications.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/images/web-development.jpg" 
          alt="Web Development" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
