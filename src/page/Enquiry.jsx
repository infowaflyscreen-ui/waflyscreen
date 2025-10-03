import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EnquiryPopup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  return (
    <div className="w-full overflow-x-hidden bg-gradient-to-br ">
      {/* Sticky Enquiry Button */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsPopupOpen(true)}
          className={`bg-[#001856] text-white px-3 py-1 sm:px-2 sm:py-2 rounded-r-lg shadow-lg hover:bg-[#001856] transition-all flex items-center relative
            ${/iPhone|iPad|iPod/i.test(navigator.userAgent) ? "pl-5" : "pl-1"}
          `}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          <span className="text-sm font-semibold whitespace-nowrap  ">
            Enquiry Now
          </span>
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4  "
          onClick={() => setIsPopupOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modalb
          >
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <div className="flex flex-col items-center justify-center text-center">
              <img src="/logo.png" alt="Logo" className="h-8 sm:h-14" />
              <h2 className="text-2xl font-semibold text-[#10153C] mb-4 font-Italiana">
                Enquiry Form
              </h2>
            </div>

            <form className="space-y-4">
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

              <div className="text-center font-Ubuntu">
                <Link to="/coming_soon">
                  <button
                    type="button"
                    className="relative h-12 w-40 rounded-sm overflow-hidden border border-[#001856] bg-white text-[#001856] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#001856] before:duration-300 before:ease-out hover:bg-[#001856] hover:text-white hover:shadow-[#001856] hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
                  >
                    <span className="relative uppercase z-10">
                      Submit Enquiry
                    </span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}