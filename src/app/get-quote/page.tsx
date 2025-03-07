"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

const services = [
  "Business Consultancy",
  "Web & Software Development",
  "SEO & Digital Marketing",
  "Strategic Leadership & Business Growth",
  "E-commerce Solutions",
];

export default function GetQuote() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Get a Quote
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Fill out the form below, and we’ll get back to you with a customized quote for your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <Input type="text" placeholder="Your Name" required />
        {/* Email */}
        <Input type="email" placeholder="Your Email" required />
        {/* Business Name */}
        <Input type="text" placeholder="Business Name (Optional)" />
        {/* Select Service */}
        <Select onValueChange={setSelectedService} value={selectedService}>
          <SelectTrigger>
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service, index) => (
              <SelectItem key={index} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Project Description */}
      <div className="mt-6">
        <Textarea placeholder="Describe your project in detail..." rows={4} required />
      </div>

      {/* Budget Range */}
      <div className="mt-6">
        <Input type="text" placeholder="Estimated Budget (Optional)" />
      </div>

      {/* File Upload */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Attach File (Optional)</label>
        <div className="flex items-center border p-3 rounded-lg cursor-pointer hover:bg-gray-100">
          <Upload className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-gray-500">Upload File</span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <Button className="w-full bg-blue-600 text-white py-3 font-bold hover:bg-blue-700">
          Submit Quote Request
        </Button>
      </div>
    </div>
  );
}