import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Pages that get default background
  const defaultBgPages = [
    "/contact",
    "/gallery",
    "/privacy",
    "/service",
    "/services",
    "/terms",
    "/aboutus",
  ];

  // Check if current page is default bg page OR any blog page
  const isDefaultBgPage =
    defaultBgPages.includes(location.pathname) || location.pathname.startsWith("/blog/");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMenu = () => setMenuOpen(true);
  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // Smooth scroll to Get a Quote form
  const handleScrollToQuote = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("getAQuoteForm");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getHeaderBgClass = () => {
    if (isDefaultBgPage) return "bg-[#122632] shadow-lg";
    return isScrolled
      ? "bg-[#122632] shadow-lg backdrop-blur-sm"
      : "bg-transparent hover:bg-[#122632]";
  };

  return (
    <>
      {/* Header */}
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
                  isDefaultBgPage || isScrolled
                    ? "brightness-0 invert"
                    : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Get a Quote Button */}
            {location.pathname === "/" ? (
              <button
                onClick={handleScrollToQuote}
                className={`px-6 py-3 text-base md:text-lg font-medium tracking-wider rounded-md transition-all duration-300 ${
                  isDefaultBgPage || isScrolled
                    ? "text-white border border-white/20 hover:border-white"
                    : "text-white border border-white/20 hover:border-white"
                }`}
              >
                Get a Quote
              </button>
            ) : (
              <Link
                to="/get-a-quote"
                className={`px-6 py-3 text-base md:text-lg font-medium tracking-wider rounded-md transition-all duration-300 ${
                  isDefaultBgPage || isScrolled
                    ? "text-white border border-white/20 hover:border-white"
                    : "text-white border border-white/20 hover:border-white"
                }`}
              >
                Get a Quote
              </Link>
            )}

            {/* MENU Button */}
            <button
              className={`px-6 py-3 text-base md:text-lg font-medium tracking-wider rounded-md transition-all duration-300 ${
                isDefaultBgPage || isScrolled ? "text-white" : "text-white"
              }`}
              onClick={handleOpenMenu}
            >
              MENU
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="w-full h-px bg-white"></div>
      </header>

      {/* Sliding Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end font-Ubuntu"
          onClick={handleCloseMenu}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60 backdrop-blur-sm" />

          <div
            className={`relative w-[320px] h-full bg-gradient-to-b from-[#1a2332] to-[#0f1419] shadow-2xl flex flex-col text-white overflow-hidden ${
              isClosing ? "animate-slideOutRight" : "animate-slideInRight"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
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

            <nav className="flex-1 p-6">
              <div className="space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/aboutus", label: "About Us" },
                  { to: "/services", label: "Services" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
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

            <div className="p-6 border-t border-white/10 bg-black/20 text-center text-sm text-gray-400 opacity-60">
              © 2024 Wa Fly Scr
            </div>
          </div>
        </div>
      )}

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
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-slideOutRight {
          animation: slideOutRight 0.3s cubic-bezier(0.7, 0, 0.84, 0);
        }
      `}</style>
    </>
  );
}
