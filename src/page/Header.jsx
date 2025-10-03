// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="border-b ">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link to="/">
//             <img
//               src="/logo.png" // Update with your logo path
//               alt="Logo"
//               className="h-10"
//             />
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         {/* <nav className="hidden font-Oswald md:flex gap-8 text-indigo-900 font-medium">
//           <Link to="/" className="text-[#122632] hover:text-[#0f1f2a]">
//             Home
//           </Link>
//           <Link to="/aboutus" className="text-[#122632] hover:text-[#0f1f2a]">
//             About Us
//           </Link>
//           <Link to="/services" className="text-[#122632] hover:text-[#0f1f2a]">
//             Service
//           </Link>
//           <Link to="/gallery" className="text-[#122632] hover:text-[#0f1f2a]">
//             Gallery
//           </Link>
//           <Link to="/contact" className="text-[#122632] hover:text-[#0f1f2a]">
//             Contact Us
//           </Link>
//         </nav> */}

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-indigo-900"
//           onClick={() => setIsOpen(true)}
//         >
//           <Menu size={28} />
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-between items-center px-4 py-3 border-b">
//           <Link to="/">
//             <img src="/logo.png" alt="Logo" className="h-8" />
//           </Link>
//           <button onClick={() => setIsOpen(false)}>
//             <X size={28} />
//           </button>
//         </div>

//         {/* Mobile Nav Links */}
//         <nav className="flex font-Oswald flex-col p-4 space-y-4 text-indigo-900 font-medium">
//           {/* <a href="#" className="hover:text-indigo-600">Home</a> */}
//           {/* <a href="#" className="hover:text-indigo-600">Ring</a>
//           <a href="#" className="hover:text-indigo-600">Bracelets</a>
//           <a href="#" className="hover:text-indigo-600">Earrings</a>
//           <a href="#" className="hover:text-indigo-600">Necklace</a> */}
//           {/* <a href="aboutus" className="hover:text-indigo-600">About Us</a>
//           <a href="#" className="hover:text-indigo-600">Service</a>
//           <a href="gallery" className="hover:text-indigo-600">Gallery</a>
//           <a href="contact" className="hover:text-indigo-600">ContactUs</a> */}

//           <Link to="/" className="hover:text-indigo-600">
//             Home
//           </Link>
//           <Link to="/aboutus" className="hover:text-indigo-600">
//             About Us
//           </Link>
//           <Link to="/services" className="hover:text-indigo-600">
//             Service
//           </Link>
//           <Link to="/gallery" className="hover:text-indigo-600">
//             Gallery
//           </Link>
//           <Link to="/contact" className="hover:text-indigo-600">
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//       {/* Overlay (dark background when menu open) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-[#0000006e] bg-opacity-40 z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}
//     </header>
//   );
// }


import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get current location
  const location = useLocation();
  
  // Define pages that should have default background
  const defaultBgPages = ['/contact', '/gallery', '/privacy', '/service', '/services', '/terms', '/aboutus'];
  const isDefaultBgPage = defaultBgPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Determine header background class based on page and scroll state
  const getHeaderBgClass = () => {
    if (isDefaultBgPage) {
      // For specific pages, always use default background
      return 'bg-[#122632] shadow-lg';
    } else {
      // For home page, use dynamic background
      return isScrolled
        ? 'bg-[#122632] shadow-lg backdrop-blur-sm'
        : 'bg-transparent hover:bg-[#122632]';
    }
  };

  return (
    <>
      {/* Dynamic Header with Bottom Border */}
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${getHeaderBgClass()}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group">
              <img
                src="/logo.svg"
                alt="way fly screen"
                className={`h-20 sm:h-12 md:h-16 lg:h-20 transition-all duration-300 group-hover:scale-110 ${
                  (isDefaultBgPage || isScrolled) ? 'brightness-0 invert' : 'brightness-0 invert'
                }`}
              />
            </Link>
          </div>

          {/* Menu Button - Clean Design */}
          <button
            className={`px-6 py-3 text-base md:text-lg font-medium tracking-wider rounded-md transition-all duration-300 ${
              (isDefaultBgPage || isScrolled) ? 'text-white' : 'text-white'
            }`}
            onClick={handleOpenMenu}
          >
            MENU
          </button>
        </div>

        {/* Bottom border - always visible in white */}
        <div className="w-full h-px bg-white"></div>
      </header>

      {/* Clean Sliding Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end font-Ubuntu"
          onClick={handleCloseMenu}
        >
          {/* Enhanced backdrop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60 backdrop-blur-sm" />

          <div
            className={`relative w-[320px] h-full bg-gradient-to-b from-[#1a2332] to-[#0f1419] shadow-2xl flex flex-col text-white overflow-hidden ${
              isClosing ? "animate-slideOutRight" : "animate-slideInRight"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header section */}
            <div className="relative p-6 border-b border-white/10 bg-black/20">
              <button
                onClick={handleCloseMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 hover:rotate-90 transition-all duration-300 group"
              >
                <X size={20} />
              </button>

              <div className="mt-2">
                <h2 className="text-xl font-bold tracking-wide">Navigation</h2>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/aboutus", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" }
                ].map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleCloseMenu}
                    className="block py-4 px-4 text-lg font-medium transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Footer section */}
            <div className="p-6 border-t border-white/10 bg-black/20">
              <div className="text-center text-sm text-gray-400">
                <p className="opacity-60">© 2024 Wa Fly Scr</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slideOutRight {
          animation: slideOutRight 0.3s cubic-bezier(0.7, 0, 0.84, 0);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Custom scrollbar for sidebar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 53, 0.5);
          border-radius: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 53, 0.7);
        }
      `}</style>
    </>
  );
}