import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const AppointmentForm = ({
  isOpen,
  onClose,
  selectedService = "",
  title = "Book an Appointment",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    state: "",
    city: "",
    service: selectedService,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Appointment request submitted successfully!");
    onClose();
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full
                       max-w-lg sm:max-w-xl lg:max-w-2xl
                       h-auto mt-6 sm:mt-10 p-4 sm:p-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-3 sm:gap-4"
            >
              {selectedService && (
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Selected Service
                  </label>
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-800 text-sm font-medium shadow-sm break-words">
                    {selectedService}
                  </div>
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                required
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                value={formData.company}
                onChange={handleChange}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="state"
                  placeholder="State *"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="Credit Cooperative Society (State Level)">
                  Credit Cooperative Society (State Level)
                </option>
                <option value="Multi-State Credit Cooperative Society">
                  Multi-State Credit Cooperative Society
                </option>
                <option value="Microfinance Company under Section 8">
                  Microfinance Company under Section 8
                </option>
                <option value="Other Cooperative Society Registration">
                  Other Cooperative Society Registration
                </option>
                <option value="Audit and Compliance">
                  Audit and Compliance
                </option>
                <option value="Banking Business Setup">
                  Banking Business Setup
                </option>
                <option value="Training and Capacity Building">
                  Training and Capacity Building
                </option>
                <option value="Business Growth and Expansion">
                  Business Growth and Expansion
                </option>
              </select>

              <textarea
                name="message"
                rows={3}
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
              >
                Submit Appointment Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
