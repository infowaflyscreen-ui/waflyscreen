import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";


const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();


  const newsItems = [
    {
      id: 1,
      title: "Fibreglass Flyscreen Repair & Replacement Tips",
      description:
        "Learn how to repair minor tears or replace worn-out fibreglass flyscreens. Wa Flyscreen provides professional on-site service across Perth and Peel!",
      author: "Wa Flyscreen",
      comments: 3,
      date: "01 Oct 2025",
      image: "/b1.jpeg",
    },
    {
      id: 2,
      title: "Maintaining Your Fibreglass Screens After Replacement",
      description:
        "Extend the life of your repaired or replaced fibreglass screens with simple cleaning and regular inspections. Wa Flyscreen offers mobile repairs at your convenience!",
      author: "Wa Flyscreen",
      comments: 2,
      date: "30 Sep 2025",
      image: "/b2.jpeg",
    },
    {
      id: 3,
      title: "Pet Mesh Screen Repair: Protect Your Pets and Home",
      description:
        "Keep pets safe and your home insect-free by repairing or replacing damaged pet mesh screens. Wa Flyscreen’s experts provide fast, reliable mobile service!",
      author: "Wa Flyscreen",
      comments: 4,
      date: "29 Sep 2025",
      image: "/b15.jpg",
    },
    {
      id: 4,
      title: "Aluminium Mesh Screen Replacement Guide",
      description:
        "Aluminium mesh screens provide strength and durability. Learn when to repair and when to replace them with Wa Flyscreen’s professional mobile services.",
      author: "Wa Flyscreen",
      comments: 5,
      date: "28 Sep 2025",
      image: "/b4.jpeg",
    },
    {
      id: 5,
      title: "Quick Repairs for Damaged Flyscreens",
      description:
        "Minor tears or bent frames? Wa Flyscreen can repair or replace your fibreglass, pet mesh, or aluminium mesh screens quickly and efficiently.",
      author: "Wa Flyscreen",
      comments: 3,
      date: "27 Sep 2025",
      image: "/b5.jpeg",
    },

    // New Blogs
    {
      id: 6,
      title: "One Way Mesh Screens: Installation and Benefits",
      description:
        "Discover how one way mesh screens provide security while allowing airflow. Wa Flyscreen installs high-quality one way screens at your convenience.",
      author: "Wa Flyscreen",
      comments: 2,
      date: "26 Sep 2025",
      image: "/b6.jpg",
    },
    {
      id: 7,
      title: "Choosing the Right Screen for Your Home",
      description:
        "Fibreglass, pet mesh, aluminium, or one way mesh – learn which screen suits your needs. WA Flyscreen helps you select and install the perfect option.",
      author: "Wa Flyscreen",
      comments: 3,
      date: "25 Sep 2025",
      image: "/b7.webp",
    },
    {
      id: 8,
      title: "Tips to Maintain Pet Mesh Screens",
      description:
        "Keep your pet mesh screens durable and effective with simple care tips. WA Flyscreen shares maintenance advice to extend the lifespan of your screens.",
      author: "Wa Flyscreen",
      comments: 1,
      date: "24 Sep 2025",
      image: "/b8.webp",
    },
    {
      id: 9,
      title: "Aluminium Mesh Screen: When to Repair vs Replace",
      description:
        "Not sure if your aluminium mesh screen needs repair or replacement? WA Flyscreen explains how to identify issues and provides expert mobile service.",
      author: "Wa Flyscreen",
      comments: 4,
      date: "23 Sep 2025",
      image: "/b9.jpg",
    }
  ];


  const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlideIndex = Math.max(0, newsItems.length - visibleSlides);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
    pauseAutoPlay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlideIndex : prev - 1));
    pauseAutoPlay();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlideIndex]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#122632] mb-2 sm:mb-4">
            Our Latest News
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-[#122632] mx-auto rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-[1400px] mx-auto">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
              }}
            >
              {newsItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer h-full overflow-hidden">
                    {/* Image Container */}
                    <div className="relative w-full overflow-hidden">
                      <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#122632]/95 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm shadow-lg backdrop-blur-sm">
                        {item.date}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-6">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-3 sm:mb-4 text-[#122632]/70">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{item.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>
                            {item.comments} Comment{item.comments !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2 leading-tight text-[#122632] group-hover:text-[#1a3a4a] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-[#122632]/80 mb-4 sm:mb-5 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      <button
                        onClick={() => navigate(`/blog/${item.id}`)}
                        className="inline-flex items-center gap-2 font-semibold text-[#122632] hover:text-[#1a3a4a] group/btn transition-all duration-300 text-sm sm:text-base"
                      >
                        <span>READ MORE</span>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 xl:-translate-x-7 z-10 bg-white shadow-xl rounded-full p-3 xl:p-4 group hover:bg-[#122632] transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 xl:w-7 xl:h-7 text-[#122632] group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 xl:translate-x-7 z-10 bg-white shadow-xl rounded-full p-3 xl:p-4 group hover:bg-[#122632] transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 xl:w-7 xl:h-7 text-[#122632] group-hover:text-white transition-colors" />
          </button>

          {/* Mobile/Tablet Navigation */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg rounded-full p-3 sm:p-4 hover:bg-[#122632] active:scale-90 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#122632] group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg rounded-full p-3 sm:p-4 hover:bg-[#122632] active:scale-90 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#122632] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 gap-2 flex-wrap">
            {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index
                    ? "bg-[#122632] w-8 sm:w-10"
                    : "bg-gray-300 w-2.5 sm:w-3 hover:bg-[#122632]/70 hover:w-5 sm:hover:w-6 active:scale-90"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;