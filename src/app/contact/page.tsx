"use client";

// import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { CalendarDays } from "lucide-react";
// import { format } from "date-fns";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// const consultationTypes = [
//   "Business Strategy Consultation",
//   "Web & Software Development",
//   "SEO & Digital Marketing",
//   "Tech Migration & Growth Strategy",
// ];

const ContactPage = () => {
//   const [selectedConsultation, setSelectedConsultation] = useState("");
//   const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200">We&apos;d love to hear from you! Reach out to us anytime.</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaPhoneAlt className="text-blue-600 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Call Us</h3>
          <p className="text-gray-700 mt-2">+123 456 7890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaEnvelope className="text-blue-600 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Email Us</h3>
          <p className="text-gray-700 mt-2">contact@yourdomain.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <FaMapMarkerAlt className="text-blue-600 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
          <p className="text-gray-700 mt-2">123 Business Street, City, Country</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Full Name</label>
              <Input type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email Address</label>
              <Input type="email" placeholder="Enter your email" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <Textarea rows={4} placeholder="Write your message..." />
            </div>
            <Button className="w-full bg-blue-600 text-white py-3 font-bold hover:bg-blue-800">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Book a Free Consultation
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Book a Free Consultation</h1>
          <p className="text-center text-gray-600 mb-6">
            Schedule a free session to discuss your business needs and explore how we can help you grow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="text" placeholder="Business Name (Optional)" />
            <Select onValueChange={setSelectedConsultation} value={selectedConsultation}>
              <SelectTrigger>
                <SelectValue placeholder="Select Consultation Type" />
              </SelectTrigger>
              <SelectContent>
                {consultationTypes.map((type, index) => (
                  <SelectItem key={index} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Select a Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarDays className="w-5 h-5 mr-2 text-gray-500" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={selectedDate || undefined} onSelect={setSelectedDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-6">
            <Textarea placeholder="Any specific details or questions?" rows={4} />
          </div>

          <div className="mt-6 text-center">
            <Button className="w-full bg-green-600 text-white py-3 font-bold hover:bg-green-700">
              Confirm Booking
            </Button>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509368!2d144.95373631531664!3d-37.816279379751594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4f5d5e3%3A0xe5f6a68a1c0b5f6b!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1649920138495!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold">Connect with Us</h2>
        <p className="text-gray-700 mt-2">Follow us on social media for updates</p>
        <div className="flex justify-center gap-6 mt-4 text-2xl">
          <FaFacebook className="text-blue-600 hover:text-blue-800" />
          <FaTwitter className="text-blue-400 hover:text-blue-600" />
          <FaLinkedin className="text-blue-700 hover:text-blue-900" />
          <FaInstagram className="text-pink-500 hover:text-pink-700" />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
