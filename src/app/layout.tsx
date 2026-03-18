import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph Kirika | Empowering Businesses with Digital Solutions",
  description: "Providing software solutions, business consultancy, web development, SEO, marketing, and technical solutions for business growth.",
  openGraph: {
    images: ["/joseph.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/joseph.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
