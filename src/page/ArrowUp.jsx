import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // icon library (optional)

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
  onClick={scrollToTop}
  className="fixed bottom-6 z-10 right-6 bg-white text-[#122632] p-4 rounded-full shadow-lg hover:bg-[#122632] hover:text-white transition-colors duration-300"
>
  <ArrowUp size={20} />
</button>

      )}
    </>
  );
}
