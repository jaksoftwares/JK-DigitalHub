"use client"

import { useState } from "react";
import { FaSearch,  FaUserCircle, FaCalendarAlt, FaArrowRight, FaShareAlt, FaCommentAlt } from "react-icons/fa";
import Image from "next/image";

const blogPosts = [
  {
    title: "How to Scale Your Business with Strategic Marketing",
    category: "Marketing",
    author: "John Doe",
    date: "March 5, 2025",
    excerpt: "Learn the best marketing strategies to take your business to the next level...",
    image: "/blogs/marketing-strategy.jpg",
    link: "/blog/scale-your-business",
  },
  {
    title: "The Future of AI in Web Development",
    category: "Technology",
    author: "Jane Smith",
    date: "February 28, 2025",
    excerpt: "Discover how AI is transforming the web development landscape...",
    image: "/blogs/ai-web-dev.jpg",
    link: "/blog/ai-in-web-development",
  },
  {
    title: "Building High-Performance eCommerce Platforms",
    category: "eCommerce",
    author: "Michael Johnson",
    date: "March 2, 2025",
    excerpt: "Key insights into creating fast, scalable, and user-friendly eCommerce websites...",
    image: "/blogs/ecommerce-performance.jpg",
    link: "/blog/high-performance-ecommerce",
  },
];

const popularPosts = [
  {
    title: "SEO Strategies for 2025",
    link: "/blog/seo-strategies-2025",
  },
  {
    title: "How AI is Revolutionizing Customer Service",
    link: "/blog/ai-customer-service",
  },
  {
    title: "Growth Hacking for Startups",
    link: "/blog/growth-hacking",
  },
];

const recentComments = [
  {
    user: "Alice Johnson",
    comment: "Great insights on digital marketing!",
    link: "/blog/scale-your-business",
  },
  {
    user: "David Smith",
    comment: "AI in web dev is truly the future!",
    link: "/blog/ai-in-web-development",
  },
];

const categories = ["All", "Marketing", "Technology", "eCommerce", "Business Growth", "SEO"];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => 
    (selectedCategory === "All" || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
          <p className="text-lg mt-4">Insights, tips, and strategies for business and tech growth.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8">
        {/* Blog Posts */}
        <div className="lg:w-3/4">
          {/* Search & Categories */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div className="flex gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-500 hover:text-white transition`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 text-gray-400" />
            </div>
          </div>

          {/* Featured Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <a key={index} href={post.link} className="block bg-white shadow-lg rounded-lg hover:shadow-xl transition">
                <Image src={post.image} alt={post.title} 
                width={100}
                height={48}
                className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <p className="text-sm text-blue-600 font-semibold">{post.category}</p>
                  <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mt-4">
                    <FaUserCircle className="mr-2" /> {post.author} &nbsp; | &nbsp;
                    <FaCalendarAlt className="mr-2" /> {post.date}
                  </div>
                  <div className="flex justify-between mt-4">
                    <p className="text-blue-600 font-semibold flex items-center">
                      Read More <FaArrowRight className="ml-2" />
                    </p>
                    <FaShareAlt className="text-gray-500 hover:text-blue-600 cursor-pointer" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 space-y-6">
          {/* Popular Posts */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Popular Posts</h3>
            {popularPosts.map((post, index) => (
              <a key={index} href={post.link} className="block text-blue-600 hover:text-blue-800 mt-2">
                {post.title}
              </a>
            ))}
          </div>

          {/* Recent Comments */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Recent Comments</h3>
            {recentComments.map((comment, index) => (
              <a key={index} href={comment.link} className="block text-gray-600 hover:text-gray-800 mt-2">
                <FaCommentAlt className="inline-block mr-2 text-blue-500" /> {comment.user}: <em>{comment.comment}</em>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogPage;
