import React, { useState } from "react";

function Getaqoute() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    message: "",
    image: null,
  });
  const [status, setStatus] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      setForm((prev) => ({ ...prev, image: file }));
      setImagePreview(file ? URL.createObjectURL(file) : null);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("suburb", form.suburb);
      formData.append("message", form.message);
      if (form.image) formData.append("image", form.image);

      const res = await fetch(`${API_BASE_URL}getaquote.php`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Network error");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", suburb: "", message: "", image: null });
      setImagePreview(null);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="getAQuoteForm"
      className="py-16 px-6 bg-gray-50  font-Josefin scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 font-Marcellus">Get a Quote</h2>
        <p className="text-gray-600 mb-12">
          Share your project details and we’ll send you a customized quote.
        </p>

        <div className="bg-white shadow-lg rounded-3xl p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                required
              />
            </div>

            {/* Phone & Suburb */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
              <input
                type="text"
                name="suburb"
                value={form.suburb}
                onChange={handleChange}
                placeholder="Suburb"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col items-center">
              <label
                htmlFor="image"
                className="cursor-pointer w-full border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-gray-800 transition"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-48 object-cover rounded-lg mb-2"
                  />
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mb-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-6a4 4 0 00-4-4H7a4 4 0 00-4 4v6z"
                      />
                    </svg>
                    <span>Click to upload an image</span>
                  </>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              {imagePreview && (
                <button
                  type="button"
                  onClick={() => {
                    setForm((prev) => ({ ...prev, image: null }));
                    setImagePreview(null);
                  }}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove Image
                </button>
              )}
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-gray-800 text-white w-full py-4 rounded-xl font-semibold hover:bg-gray-700 active:scale-95 transform transition-all duration-200 disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Get a Quote"}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <p className="text-green-600 mt-4">Thank you! We’ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Getaqoute;
