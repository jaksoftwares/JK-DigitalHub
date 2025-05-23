"use client"

// import { useRouter } from "next/router";
import { useParams, useRouter } from "next/navigation";

import { FaFacebook, FaTwitter, FaLinkedin, FaCalendarAlt, FaUserCircle, FaTag, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

// Sample Blog Data (Replace this with a database or API fetch)
const blogPosts = [
  {
    slug: "scale-business-marketing",
    title: "How to Scale Your Business with Strategic Marketing",
    category: "Marketing",
    author: "John Doe",
    date: "March 5, 2025",
    content: `
      <p>Scaling a business requires a strategic approach to marketing...</p>
      <h2>1. Define Your Target Audience</h2>
      <p>Understanding your audience is crucial for marketing success...</p>
      <h2>2. Leverage Digital Advertising</h2>
      <p>Platforms like Google Ads and Facebook Ads can help you reach a larger audience...</p>
      <h2>3. Focus on SEO</h2>
      <p>Optimizing your content for search engines will drive organic traffic...</p>
      <h2>Conclusion</h2>
      <p>Implementing these marketing strategies can significantly boost your business growth.</p>
    `,
    image: "/blogs/marketing-strategy.jpg",
    relatedPosts: [
      { title: "SEO Strategies for 2025", link: "/blog/seo-strategies-2025" },
      { title: "Growth Hacking for Startups", link: "/blog/growth-hacking" },
    ],
  },
  {
    slug: "seo-strategies-2025",
    title: "SEO Strategies for 2025",
    category: "SEO",
    author: "Jane Smith",
    date: "February 20, 2025",
    content: `
      <p>SEO is evolving, and in 2025, new trends are emerging...</p>
    `,
    image: "/blogs/seo-strategies.jpg",
    relatedPosts: [
      { title: "How to Scale Your Business with Strategic Marketing", link: "/blog/scale-business-marketing" },
    ],
  },
];


const BlogPostPage = () => {
  const params = useParams(); // ✅ Use useParams instead
  const router = useRouter();
  const { slug } = params; // Get the slug from URL params
  // Find the blog post based on slug
  const blogPost = blogPosts.find((post) => post.slug === slug);

  // If post not found, show 404 message
  if (!blogPost) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">404 - Blog Post Not Found</h1>
        <p className="text-gray-700 mt-4">The blog you are looking for does not exist.</p>
        <button onClick={() => router.push("/blog")} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
          Go Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Back Button */}
      <button onClick={() => router.push("/blog")} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 px-6 py-4">
        <FaArrowLeft /> Back to Blog
      </button>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">{blogPost.title}</h1>
          <div className="mt-4 flex justify-center items-center gap-4 text-gray-200 text-sm">
            <div className="flex items-center gap-2"><FaUserCircle /> {blogPost.author}</div>
            <div className="flex items-center gap-2"><FaCalendarAlt /> {blogPost.date}</div>
            <div className="flex items-center gap-2"><FaTag /> {blogPost.category}</div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-6 py-10 max-w-3xl bg-white rounded-lg shadow-md">
        <Image src={blogPost.image} alt={blogPost.title} 
        height={64}
        width={100}
        className="w-full h-64 object-cover rounded-lg mb-6" />
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className="prose prose-lg text-gray-800"></div>

        {/* Social Sharing */}
        <div className="mt-8 flex gap-4">
          <p className="font-semibold">Share:</p>
          <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
          <FaTwitter className="text-blue-400 cursor-pointer hover:text-blue-600" size={24} />
          <FaLinkedin className="text-blue-700 cursor-pointer hover:text-blue-900" size={24} />
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
          <ul className="space-y-3">
            {blogPost.relatedPosts.map((post, index) => (
              <li key={index}>
                <a href={post.link} className="text-blue-600 hover:text-blue-800">{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
