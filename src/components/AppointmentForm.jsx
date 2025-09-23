// components/AppointmentForm.jsx
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
                       h-auto max-h-[90vh] sm:max-h-[90vh] lg:max-h-[85vh]
                       overflow-y-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:gap-6"
              >
                {selectedService && (
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Selected Service
                    </label>
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-xl text-blue-800 text-sm sm:text-base font-medium shadow-sm break-words">
                      {selectedService}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-10 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300 text-base sm:text-lg shadow-md"
                  >
                    Submit Appointment Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
