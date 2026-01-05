import React, { useState } from "react";
import { API_BASE_URL } from "../api";

export default function ChatEnquiryButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [], // Field for selected checkboxes
  });

  const [status, setStatus] = useState(null);

  const serviceOptions = [
    "Fibreglass Flyscreens",
    "Heavy-Duty Pet Mesh Screens",
    "Custom-Made Flyscreens",
  ];

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const currentServices = prev.services;
      if (currentServices.includes(service)) {
        return { ...prev, services: currentServices.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...currentServices, service] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`${API_BASE_URL}enquiry.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", services: [] });
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("Failed to connect to server");
    }
  };

  return (
    <div className="fixed bottom-6 left-4 z-50 ">
      {/* Floating Expandable Enquiry Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="group flex items-center bg-white text-[#122632] rounded-full shadow-lg h-12 w-12 hover:w-32 transition-all duration-300 ease-in-out hover:bg-[#122632] hover:text-white overflow-hidden"
      >
        <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>

        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 font-semibold font-Marcellus">
          Enquire
        </span>
      </button>

      {/* Popup Enquiry Form */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-25 sm:h-10 md:h-12 lg:h-25"
              />
              <h2 className="text-2xl font-semibold text-[#122632] my-4 font-Marcellus">
                Enquiry Form
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4 font-Josefin">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10153C]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10153C]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10153C]"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10153C]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                {/* Service Checkboxes with Label */}
                <div className="space-y-2">
                  <label className="block font-semibold text-[#122632]">Service(s)</label>
                  {serviceOptions.map((service, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="w-4 h-4 accent-[#10153C]"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="uppercase mt-6 bg-gray-800 self-center text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
                >
                  <span className="relative uppercase z-10">
                    Submit Enquiry
                  </span>
                </button>
              </div>
            </form>

            {status === "loading" && (
              <p className="text-blue-600 mt-3 text-center">Submitting...</p>
            )}
            {status === "success" && (
              <p className="text-green-600 mt-3 text-center">
                Form submitted successfully!
              </p>
            )}
            {status && status !== "loading" && status !== "success" && (
              <p className="text-red-600 mt-3 text-center">{status}</p>
            )}
          </div>
        </div>
      )}
    </div>

  );
}
