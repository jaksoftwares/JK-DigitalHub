import Image from "next/image";

export default function SEODigitalMarketingPage() {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">SEO & Digital Marketing</h1>
      <p className="text-lg text-center text-gray-700">
        Helping businesses rank higher and increase online visibility.
      </p>
      <div className="mt-6 flex justify-center">
        <Image 
          src="/images/seo.jpg" 
          alt="SEO Optimization" 
          width={800} 
          height={500} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
