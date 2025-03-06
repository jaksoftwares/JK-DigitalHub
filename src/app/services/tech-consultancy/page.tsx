import Image from "next/image";

export default function TechMigrationPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Tech Migration</h1>
      <p className="text-lg text-center text-gray-700">
        Guiding businesses in adopting modern digital solutions.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/images/tech-migration.jpg" 
          alt="Tech Migration" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
