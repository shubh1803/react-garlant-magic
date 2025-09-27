import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BrandShastraContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-12">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">
   <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
                    सहकार&nbsp;समृद्धी
                  </span>
</h1>

                       <h2 className="text-2xl font-semibold text-gray-700 mt-2">Contact Us</h2>
          <p className="text-gray-600 mt-4">
            We'd love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="md:col-span-2 border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
<div className="md:col-span-2 flex justify-center">
  <button
    type="submit"
    className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-gradient transition-colors duration-300 w-auto"
  >
    Send Message
  </button>
</div>


          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600 text-center">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
