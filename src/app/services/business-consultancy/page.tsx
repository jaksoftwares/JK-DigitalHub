import Image from "next/image";

export default function BusinessConsultancyPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Business Consultancy</h1>
      <p className="text-lg text-center text-gray-700">
        Helping businesses transition into tech and optimize growth strategies.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/images/business-consulting.jpg" 
          alt="Business Consulting" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
