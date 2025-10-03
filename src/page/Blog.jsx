import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, MessageCircle, User } from 'lucide-react';

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const navigate = useNavigate();

  const newsItems = [
    {
      id: 1,
      title: "Construction of 32 units wit...",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Maitri",
      comments: 2,
      date: "15 Sep",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Mays Hill",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Nimaxee",
      comments: 2,
      date: "15 Sep",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Another Project",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Megascale",
      comments: 2,
      date: "15 Sep",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Construction of 32 units wit...",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Bindu",
      comments: 2,
      date: "15 Sep",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Urban Development",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Alex",
      comments: 3,
      date: "14 Sep",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Smart City Initiative",
      description: "Great things coming soon. We are a small and growing consulting firm with big ideas. Go to Home",
      author: "Sarah",
      comments: 5,
      date: "13 Sep",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=500&fit=crop"
    }
  ];

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlideIndex = Math.max(0, newsItems.length - visibleSlides);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlideIndex : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const currentMaxIndex = Math.max(0, newsItems.length - visibleSlides);
        return prev + 1 > currentMaxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleSlides, newsItems.length]);

  return (
    <div className="max-w-[1250px] mx-auto px-4 py-12 text-[#122632] font-Josefin">
      {/* Header */}
      <div className="text-center mb-12 font-Marcellus">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Our Latest News</h1>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Slides */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
              width: `${(newsItems.length / visibleSlides) * 100}%`
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
              >
                <div
                  onClick={() => navigate("/services")}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-[#122632] text-white px-2 py-1 md:px-3 md:py-2 rounded-lg font-semibold text-xs md:text-sm text-center">
                      <div className="text-sm md:text-lg font-bold">{item.date.split(' ')[0]}</div>
                      <div className="text-xs">{item.date.split(' ')[1]}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between text-sm mb-3 text-[#122632]/70">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>{item.comments} Comment{item.comments !== 1 ? 's' : ''}</span>
                      </div>
                    </div>

                    <h3
                      className="text-lg md:text-xl font-bold mb-3 group-hover:text-[#122632] transition-colors overflow-hidden"
                      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-[#122632]/80 mb-4 leading-relaxed overflow-hidden"
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}
                    >
                      {item.description}
                    </p>

                    <button className="inline-flex items-center gap-2 font-semibold text-[#122632] hover:gap-3 transition-all duration-300">
                      <span>READ MORE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 group hover:bg-[#122632]"
        >
          <ChevronLeft className="w-6 h-6 text-[#122632] group-hover:text-white transition-colors duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 group hover:bg-[#122632]"
        >
          <ChevronRight className="w-6 h-6 text-[#122632] group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Mobile Buttons Below */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white shadow-lg rounded-full p-3"
          >
            <ChevronLeft className="w-6 h-6 text-[#122632]" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white shadow-lg rounded-full p-3"
          >
            <ChevronRight className="w-6 h-6 text-[#122632]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-6 gap-2">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#122632] w-8' : 'bg-gray-300 w-3 hover:bg-[#122632]'}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;