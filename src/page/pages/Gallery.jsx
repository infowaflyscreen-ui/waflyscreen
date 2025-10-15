import React from "react";

export default function App() {
    const items = [
  { src: "/g1.jpeg", label: "Blinds" },
  { src: "/g2.jpeg", label: "Curtains" },
  { src: "/g3.jpeg", label: "Roller Blinds" },
  { src: "/g4.jpeg", label: "Doors" },
  { src: "/g5.jpeg", label: "Windows" },
  { src: "/g6.jpeg", label: "Shades" },
  // { src: "/g7.jpeg", label: "Screens" },
  // { src: "/m9.jpg", label: "Screens" },
  // { src: "/1020.jpg", label: "Screens" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      {/* Heading */}
      <div className="text-center mb-10 group mt-30">
        <h1 className="text-4xl font-bold text-gray-800 relative inline-block font-Marcellus">
          Our Products
          <span
            className="
              block h-1 bg-gray-900 mx-auto 
              w-16 transition-all duration-900 
              group-hover:w-full
            "
          ></span>
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-lg h-80"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-end">
              <p className="text-white text-xl font-semibold p-4 font-Josefin">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
