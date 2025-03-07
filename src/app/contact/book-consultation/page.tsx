"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const consultationTypes = [
  "Business Strategy Consultation",
  "Web & Software Development",
  "SEO & Digital Marketing",
  "Tech Migration & Growth Strategy",
];

export default function BookConsultation() {
  const [selectedConsultation, setSelectedConsultation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Book a Free Consultation
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Schedule a free session to discuss your business needs and explore how we can help you grow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <Input type="text" placeholder="Your Name" required />
        {/* Email */}
        <Input type="email" placeholder="Your Email" required />
        {/* Business Name */}
        <Input type="text" placeholder="Business Name (Optional)" />
        {/* Select Consultation Type */}
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

      {/* Date Picker */}
      <div className="mt-6">
        <label className="block text-gray-700 font-medium mb-2">Select a Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarDays className="w-5 h-5 mr-2 text-gray-500" />
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate || undefined}
              onSelect={setSelectedDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Message Box */}
      <div className="mt-6">
        <Textarea placeholder="Any specific details or questions?" rows={4} />
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <Button className="w-full bg-green-600 text-white py-3 font-bold hover:bg-green-700">
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}