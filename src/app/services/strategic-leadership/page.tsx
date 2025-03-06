import Image from "next/image";

export default function StrategicLeadershipPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Strategic Leadership</h1>
      <p className="text-lg text-center text-gray-700">
        Providing leadership for business transformation and growth.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/images/leadership.jpg" 
          alt="Strategic Leadership" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
