import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Full list of Indian states
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman & Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];


  return (
    <>
      <Navbar />

      <section className="py-20 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Send us a message and we'll get back
            to you as soon as possible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600"> info@sahakarSamriddhi.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <span>(+91) 7071340707</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-gray-600">
               Ashoka Plaza, Beed Bypass Road, Infront of Reliance Digital, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra – 431010

                </p>
              </div>
            </div>

            {/* Small Map */}
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.7842013605155!2d75.34607957468396!3d19.849081827249712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba39f8d9a1731%3A0xf1b4f462b26c8dc8!2z4KSP4KSf4KWI4KSV4KWN4KS44KS14KS-4KSy4KS-IOCkrOCkv-CknOCkqOClh-CkuCDgpLjgpYngpLLgpY3gpK_gpYLgpLbgpILgpLgg4KSq4KWA4KS14KWA4KSf4KWAIOCkj-CksuCkn-ClgOCkoeClgA!5e0!3m2!1shi!2sin!4v1758970501254!5m2!1shi!2sin"
              className="rounded-xl mt-4 border w-full h-64"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />

              {/* State Dropdown */}
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-white"
                required
              >
                <option value="">Select State</option>
                {states.map((st, idx) => (
                  <option key={idx} value={st}>
                    {st}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 h-32 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-4 px-10 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>

            {status === "success" && (
              <p className="mt-6 text-green-600 text-center font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-6 text-red-600 text-center font-medium">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
