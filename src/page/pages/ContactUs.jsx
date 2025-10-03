import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { API_BASE_URL } from "../../api";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({ ...validationErrors, [name]: "" });
    }
  };

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '');
      if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 10) {
        errors.phone = "Please enter a valid phone number (minimum 10 digits)";
      }
    }

    // City validation (optional but if provided, must be valid)
    if (formData.city.trim()) {
      if (formData.city.trim().length < 2) {
        errors.city = "City name must be at least 2 characters";
      } else if (!/^[a-zA-Z\s]+$/.test(formData.city.trim())) {
        errors.city = "City name can only contain letters and spaces";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 500) {
      errors.message = "Message must not exceed 500 characters";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Validate form
    const errors = validateForm();
    setValidationErrors(errors);

    // If there are validation errors, don't proceed
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      console.log("Submitting form to:", `${API_BASE_URL}contact.php`);
      console.log("Form data:", formData);

      const response = await fetch(`${API_BASE_URL}contact.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      let result;
      const responseText = await response.text();
      console.log("Raw response:", responseText);

      // Clean the response text - remove any non-JSON content
      let cleanResponseText = responseText.trim();

      // Try to extract JSON if there are extra characters
      const jsonMatch = cleanResponseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleanResponseText = jsonMatch[0];
      }

      console.log("Cleaned response:", cleanResponseText);

      try {
        result = JSON.parse(cleanResponseText);
        console.log("Parsed result:", result);
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        console.error("Failed to parse as JSON:", cleanResponseText);
        setError("Server returned invalid response format");
        setTimeout(() => setLoading(false), 4000);
        return;
      }

      if (response.ok && result && result.success) {
        setSuccess(result.success || "Form submitted successfully");
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
        setValidationErrors({});
      } else {
        setError(result?.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Failed to connect to server");
    }

    setTimeout(() => setLoading(false), 4000);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#e6e9f0] to-[#eef1f5] flex flex-col items-center justify-start p-6 font-Josefin">
        {/* Animated Heading */}
        <div className="text-center mb-10 group w-full max-w-6xl mt-32">
          <h2 className="text-4xl font-bold text-[#122632] relative inline-block font-Marcellus">
            Contact Us
            <span
              className="block h-1 bg-gray-900 mx-auto 
                       w-16 transition-all duration-900 
                       group-hover:w-full"
            ></span>
          </h2>
        </div>

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl p-10">
          {/* Left Section - Form */}
          <div>
            <h3 className="text-2xl text-[#122632] italic text-center">
              Request a Free Quote
            </h3>
            <h1 className="text-3xl font-bold text-[#122632] text-center mb-8 font-Marcellus">
              Contact Us – Wa Flyscreen
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-[#122632] mb-1">Name :</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#122632] focus:outline-none transition ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#122632] mb-1">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#122632] focus:outline-none transition ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-[#122632] mb-1">Phone :</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#122632] focus:outline-none transition ${
                    validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                )}
              </div>

              {/* City Field */}
              <div>
                <label className="block text-[#122632] mb-1">City :</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className={`w-full border rounded-xl p-3 focus:ring-2 focus:ring-[#122632] focus:outline-none transition ${
                    validationErrors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.city && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.city}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#122632] mb-1">Message :</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  className={`w-full border rounded-xl p-3 h-24 focus:ring-2 focus:ring-[#122632] focus:outline-none transition ${
                    validationErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {validationErrors.message && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-800 text-white py-3 rounded-xl shadow-md hover:bg-gray-700 transform transition disabled:opacity-50"
              >
                Submit Enquiry
              </button>

              {success && <p className="text-green-600 mt-2">{success}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          </div>

          {/* Right Section - Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-[#122632] text-xl font-semibold mb-3">
                Have a question?
              </h3>
              <p className="text-gray-700 mb-4">
                At Wa Flyscreen, we make it easy for you to get in touch. Whether
                you're after a quick repair, a custom-made screen, or a heavy-duty
                pet mesh solution, our friendly team is ready to help.
              </p>
            </div>

            <div>
              <h3 className="text-[#122632] text-xl font-semibold mb-3">
                Service Areas
              </h3>
              <p className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt /> Morley Drive , Eden Hill WA
              </p>
            </div>

            <div>
              <h3 className="text-[#122632] text-xl font-semibold mb-3">
                Get in Touch
              </h3>
              <p className="flex items-center gap-2 text-gray-700">
                <FaPhone /> +61 468 444 748
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope /> support@waflyscreen.com
              </p>
            </div>

            <div>
              <h3 className="text-[#122632] text-xl font-semibold mb-3">
                Follow Us
              </h3>
              <div className="flex gap-4 text-[#122632] text-2xl">
                {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 bg-white rounded-full shadow hover:scale-110 transition"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">
          <img src="/loader (1).gif" alt="Loading..." className="w-30 h-30" />
        </div>
      )}

    </>
  );
}