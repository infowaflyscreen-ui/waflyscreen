import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 400); // match new smooth animation
  };

  const slides = [
    {
      id: 1,
      title: "Durable Flyscreens",
      subtitle: "Rust-Free | Easy to Clean | Long-Lasting",
      button: "Enquire Now",
      image: "/d1.png",
    },
    {
      id: 2,
      title: "Premium Mesh Collection",
      subtitle: "Strong | Stylish | Seamless Fit",
      button: "Enquire Now",
      image: "/d2.png",
    },
    {
      id: 3,
      title: "Perfect for Every Home",
      subtitle: "Keep Bugs Out, Let Fresh Air In",
      button: "Enquire Now",
      image: "/d3.png",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Slide Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                <h1 className="text-white text-4xl md:text-6xl font-semibold  font-Marcellus">
                  {slide.title}
                </h1>
                <h2 className="text-white font-Josefin text-2xl md:text-3xl mt-6 font-Ubuntu">
                  {slide.subtitle}
                </h2>

                <Link to="/contact">
                  <button
                    type="button"
                    className="relative mt-6 h-12 w-44 flex items-center justify-center uppercase font-Ubuntu 
             bg-gray-800 text-white rounded-md shadow-2xl 
             hover:bg-gray-700 transition-all duration-200"
                  >
                    {slide.button}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Controllers */}
        <button
          ref={prevRef}
          className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          ref={nextRef}
          className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white transition"
        >
          <ChevronRight size={28} />
        </button>
      </Swiper>

      {/* Top Bar */}
      {/* <div className="absolute top-6 left-0 right-0 flex items-center justify-center z-30 px-6">
        <button
          onClick={() => setMenuOpen(true)}
          className="absolute left-6 flex items-center gap-2 text-white px-3 py-2 rounded-full shadow-lg hover:bg-black/40 transition"
        >
          <span className="text-sm font-semibold tracking-wide font-Ubuntu">
            MENU
          </span>
          <Menu size={22} />
        </button>
      </div> */}

      {/* Sidebar Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex justify-start font-Ubuntu"
          onClick={handleCloseMenu}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div
            className={`relative w-[220px] h-full bg-[#122632] shadow-2xl p-6 flex flex-col space-y-6 text-white text-lg ${isClosing ? "animate-slideOut" : "animate-slideIn"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseMenu}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/20"
            >
              <X size={22} />
            </button>

            <Link to="/" onClick={handleCloseMenu} className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/aboutus" onClick={handleCloseMenu} className="hover:text-gray-300 transition">
              About Us
            </Link>
            <Link to="/services" onClick={handleCloseMenu} className="hover:text-gray-300 transition">
              Services
            </Link>
            <Link to="/gallery" onClick={handleCloseMenu} className="hover:text-gray-300 transition">
              Gallery
            </Link>
            <Link to="/contact" onClick={handleCloseMenu} className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Smooth Slide Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
        .animate-slideOut {
          animation: slideOut 0.4s ease forwards;
        }
          .swiper-pagination-bullet {
  background: #aaa !important; 
  opacity: 1 !important;
}

/* Active dot */
.swiper-pagination-bullet-active {
  background: #10153C !important;
}
      `}</style>
    </section>
  );
}
