// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight, MessageCircle, User } from "lucide-react";

// const NewsSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const navigate = useNavigate();

//   const newsItems = [
//     {
//       id: 1,
//       title: "Why Fibreglass Flyscreens Are Essential",
//       description: "Keep insects out while enjoying airflow and light with durable fibreglass flyscreens. Contact Wa Flyscreen for professional installation in Perth and Peel!",
//       author: "Wa Flyscreen",
//       comments: 3,
//       date: "01 Oct 2025",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Top 5 Benefits of Fibreglass Flyscreens",
//       description: "Discover the durability, airflow, and cost-effective benefits of fibreglass flyscreens. Get a custom fit with Wa Flyscreen’s mobile service!",
//       author: "Wa Flyscreen",
//       comments: 2,
//       date: "30 Sep 2025",
//       image: "/b1.png"
//     },
//     {
//       id: 3,
//       title: "Maintaining Your Fibreglass Flyscreens",
//       description: "Extend the life of your flyscreens with simple cleaning and regular inspections. Wa Flyscreen offers mobile repairs across Perth and Peel!",
//       author: "Wa Flyscreen",
//       comments: 4,
//       date: "29 Sep 2025",
//       image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 4,
//       title: "Heavy-Duty Pet Mesh Screens for Pet Owners",
//       description: "Protect your home and pets with scratch-resistant pet mesh screens. Contact Wa Flyscreen for durable, custom solutions!",
//       author: "Wa Flyscreen",
//       comments: 5,
//       date: "28 Sep 2025",
//       image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?w=1200&h=800&fit=crop"
//     },
//     {
//       id: 5,
//       title: "Pet Mesh Screens for Safety and Comfort",
//       description: "Keep pets safe and your home insect-free with heavy-duty pet mesh screens. Book Wa Flyscreen’s mobile installation today!",
//       author: "Wa Flyscreen",
//       comments: 3,
//       date: "27 Sep 2025",
//       image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=1200&h=800&fit=crop"
//     }
//   ];

//   const maxSlideIndex = newsItems.length - 1;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlideIndex : prev - 1));
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, maxSlideIndex]);

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#122632] font-Josefin">
//       {/* Header */}
//       <div className="text-center mb-12 font-Marcellus">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Latest News</h1>
//       </div>

//       {/* Slider Container */}
//       <div className="relative">
//         <div className="overflow-hidden rounded-2xl">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * 100}%)`,
//               width: `${newsItems.length * 100}%`
//             }}
//           >
//             {newsItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex-shrink-0 w-full px-2 sm:px-3"
//               >
//                 <div
//                   onClick={() => navigate("/services")}
//                   className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
//                 >
//                   {/* Responsive Image */}
//                   <div className="relative w-full aspect-[4/3] max-h-[300px] sm:max-h-[400px] overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent" />
//                     <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#122632]/90 text-white px-2.5 py-1 rounded-lg font-semibold text-xs sm:text-sm">
//                       {item.date}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 sm:p-5">
//                     <div className="flex items-center justify-between text-xs sm:text-sm mb-3 text-[#122632]/70">
//                       <div className="flex items-center gap-2">
//                         <User className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span>{item.author}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span>
//                           {item.comments} Comment{item.comments !== 1 ? "s" : ""}
//                         </span>
//                       </div>
//                     </div>

//                     <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
//                     <p className="text-sm sm:text-base text-[#122632]/80 mb-3 leading-relaxed line-clamp-3">
//                       {item.description}
//                     </p>

//                     <button className="inline-flex items-center gap-2 font-semibold text-[#122632] hover:gap-3 transition-all duration-300 text-sm sm:text-base">
//                       <span>READ MORE</span>
//                       <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Buttons */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 sm:p-4 transition-all duration-300 group hover:bg-[#122632]"
//         >
//           <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#122632] group-hover:text-white transition-colors duration-300" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 sm:p-4 transition-all duration-300 group hover:bg-[#122632]"
//         >
//           <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#122632] group-hover:text-white transition-colors duration-300" />
//         </button>

//         {/* Mobile Buttons */}
//         <div className="flex justify-center gap-6 mt-6 md:hidden">
//           <button className="bg-white/90 shadow-lg rounded-full p-3 sm:p-4 hover:bg-[#122632] transition-all duration-300" onClick={prevSlide}>
//             <ChevronLeft className="w-6 h-6 text-[#122632] hover:text-white" />
//           </button>
//           <button className="bg-white/90 shadow-lg rounded-full p-3 sm:p-4 hover:bg-[#122632] transition-all duration-300" onClick={nextSlide}>
//             <ChevronRight className="w-6 h-6 text-[#122632] hover:text-white" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center items-center mt-6 gap-2 sm:gap-3">
//           {newsItems.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "bg-[#122632] w-7 sm:w-8"
//                   : "bg-gray-300 w-2.5 sm:w-3 hover:bg-[#122632]/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsSlider;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ChevronLeft, ChevronRight, MessageCircle, User } from "lucide-react";

// const NewsSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const navigate = useNavigate();

//   const newsItems = [
//     {
//       id: 1,
//       title: "Why Fibreglass Flyscreens Are Essential",
//       description:
//         "Keep insects out while enjoying airflow and light with durable fibreglass flyscreens. Contact Wa Flyscreen for professional installation in Perth and Peel!",
//       author: "Wa Flyscreen",
//       comments: 3,
//       date: "01 Oct 2025",
//       image: "/b2.png",
//     },
//     {
//       id: 2,
//       title: "Top 5 Benefits of Fibreglass Flyscreens",
//       description:
//         "Discover the durability, airflow, and cost-effective benefits of fibreglass flyscreens. Get a custom fit with Wa Flyscreen’s mobile service!",
//       author: "Wa Flyscreen",
//       comments: 2,
//       date: "30 Sep 2025",
//       image: "/b1.png",
//     },
//     {
//       id: 3,
//       title: "Maintaining Your Fibreglass Flyscreens",
//       description:
//         "Extend the life of your flyscreens with simple cleaning and regular inspections. Wa Flyscreen offers mobile repairs across Perth and Peel!",
//       author: "Wa Flyscreen",
//       comments: 4,
//       date: "29 Sep 2025",
//       image: "/b3.png",
//     },
//     {
//       id: 4,
//       title: "Heavy-Duty Pet Mesh Screens for Pet Owners",
//       description:
//         "Protect your home and pets with scratch-resistant pet mesh screens. Contact Wa Flyscreen for durable, custom solutions!",
//       author: "Wa Flyscreen",
//       comments: 5,
//       date: "28 Sep 2025",
//       image: "/b4.jpg",
//     },
//     {
//       id: 5,
//       title: "Pet Mesh Screens for Safety and Comfort",
//       description:
//         "Keep pets safe and your home insect-free with heavy-duty pet mesh screens. Book Wa Flyscreen’s mobile installation today!",
//       author: "Wa Flyscreen",
//       comments: 3,
//       date: "27 Sep 2025",
//       image: "/2.jpg",
//     },
//   ];

//   // Number of visible slides depends on screen size
//   const getVisibleSlides = () => {
//     if (window.innerWidth >= 1024) return 3; // desktop
//     if (window.innerWidth >= 768) return 2; // tablet
//     return 1; // mobile
//   };

//   const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

//   useEffect(() => {
//     const handleResize = () => setVisibleSlides(getVisibleSlides());
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxSlideIndex = Math.max(0, newsItems.length - visibleSlides);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
//     pauseAutoPlay();
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlideIndex : prev - 1));
//     pauseAutoPlay();
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     pauseAutoPlay();
//   };

//   const pauseAutoPlay = () => {
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 5000);
//   };

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1 > maxSlideIndex ? 0 : prev + 1));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, maxSlideIndex]);

//   return (
//     <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#122632] font-Josefin">
//       {/* Header */}
//       <div className="text-center mb-12 font-Marcellus">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//           Our Latest News
//         </h1>
//       </div>

//       {/* Slider Container */}
//       <div className="relative">
//         <div className="overflow-hidden rounded-2xl">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
//               width: `${newsItems.length * (100 / visibleSlides)}%`,
//             }}
//           >
//             {newsItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 flex-shrink-0"
//               >
//                 <div
//                   onClick={() => navigate("/services")}
//                   className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
//                 >
//                   {/* Image */}
//                   <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       loading="lazy"
//                     />
//                     <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#122632]/90 text-white px-2.5 py-1 rounded-lg font-semibold text-xs sm:text-sm">
//                       {item.date}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-4 sm:p-5">
//                     <div className="flex items-center justify-between text-xs sm:text-sm mb-3 text-[#122632]/70">
//                       <div className="flex items-center gap-2">
//                         <User className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span>{item.author}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                         <span>
//                           {item.comments} Comment{item.comments !== 1 ? "s" : ""}
//                         </span>
//                       </div>
//                     </div>

//                     <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 line-clamp-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm sm:text-base text-[#122632]/80 mb-3 leading-relaxed line-clamp-3">
//                       {item.description}
//                     </p>

//                     <button className="inline-flex items-center gap-2 font-semibold text-[#122632] hover:gap-3 transition-all duration-300 text-sm sm:text-base">
//                       <span>READ MORE</span>
//                       <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Arrows */}
//         <button
//           onClick={prevSlide}
//           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 sm:p-4 group hover:bg-[#122632] transition-all duration-300"
//         >
//           <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#122632] group-hover:text-white" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 sm:p-4 group hover:bg-[#122632] transition-all duration-300"
//         >
//           <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#122632] group-hover:text-white" />
//         </button>

//         {/* Mobile Buttons */}
//         <div className="flex justify-center gap-6 mt-6 md:hidden">
//           <button
//             onClick={prevSlide}
//             className="bg-white/90 shadow-lg rounded-full p-3 hover:bg-[#122632] transition-all duration-300"
//           >
//             <ChevronLeft className="w-6 h-6 text-[#122632] hover:text-white" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="bg-white/90 shadow-lg rounded-full p-3 hover:bg-[#122632] transition-all duration-300"
//           >
//             <ChevronRight className="w-6 h-6 text-[#122632] hover:text-white" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center items-center mt-6 gap-2 sm:gap-3">
//           {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "bg-[#122632] w-7 sm:w-8"
//                   : "bg-gray-300 w-2.5 sm:w-3 hover:bg-[#122632]/70"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsSlider;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, User } from "lucide-react";

const NewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "Why Fibreglass Flyscreens Are Essential",
      description:
        "Keep insects out while enjoying airflow and light with durable fibreglass flyscreens. Contact Wa Flyscreen for professional installation in Perth and Peel!",
      author: "Wa Flyscreen",
      comments: 3,
      date: "01 Oct 2025",
      image: "/b14.jpg",
    },
    {
      id: 2,
      title: "Top 5 Benefits of Fibreglass Flyscreens",
      description:
        "Discover the durability, airflow, and cost-effective benefits of fibreglass flyscreens. Get a custom fit with Wa Flyscreen's mobile service!",
      author: "Wa Flyscreen",
      comments: 2,
      date: "30 Sep 2025",
      image: "/b12.jpg",
    },
    {
      id: 3,
      title: "Maintaining Your Fibreglass Flyscreens",
      description:
        "Extend the life of your flyscreens with simple cleaning and regular inspections. Wa Flyscreen offers mobile repairs across Perth and Peel!",
      author: "Wa Flyscreen",
      comments: 4,
      date: "29 Sep 2025",
      image: "/b15.jpg",
    },
    {
      id: 4,
      title: "Heavy-Duty Pet Mesh Screens for Pet Owners",
      description:
        "Protect your home and pets with scratch-resistant pet mesh screens. Contact Wa Flyscreen for durable, custom solutions!",
      author: "Wa Flyscreen",
      comments: 5,
      date: "28 Sep 2025",
      image: "/b11.jpg",
    },
    {
      id: 5,
      title: "Pet Mesh Screens for Safety and Comfort",
      description:
        "Keep pets safe and your home insect-free with heavy-duty pet mesh screens. Book Wa Flyscreen's mobile installation today!",
      author: "Wa Flyscreen",
      comments: 3,
      date: "27 Sep 2025",
      image: "/b12.jpg",
    },
  ];

  const getVisibleSlides = () => {
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
    <div className="w-full mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 text-[#122632] font-sans">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-10 lg:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 px-4">
          Our Latest News
        </h1>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-[1400px] mx-auto">
        <div className="overflow-hidden rounded-xl sm:rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
              width: `${newsItems.length * (100 / visibleSlides)}%`,
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="w-full px-1.5 sm:px-2 md:px-3 flex-shrink-0"
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative w-full overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="md:w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#122632]/90 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg font-semibold text-xs">
                      {item.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 lg:p-5">
                    <div className="flex items-center justify-between text-xs mb-2 sm:mb-3 text-[#122632]/70">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="truncate max-w-[100px] sm:max-w-none">{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">
                          {item.comments} Comment{item.comments !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#122632]/80 mb-2 sm:mb-3 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {item.description}
                    </p>

                    <button className="inline-flex items-center gap-1.5 sm:gap-2 font-semibold text-[#122632] hover:gap-2 sm:hover:gap-3 transition-all duration-300 text-xs sm:text-sm">
                      <span>READ MORE</span>
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Arrows */}
        <button
          onClick={prevSlide}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 group hover:bg-[#122632] transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 text-[#122632] group-hover:text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-6 z-10 bg-white/90 shadow-lg rounded-full p-3 group hover:bg-[#122632] transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-[#122632] group-hover:text-white" />
        </button>

        {/* Mobile/Tablet Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-4 sm:mt-6 lg:hidden">
          <button
            onClick={prevSlide}
            className="bg-white/90 shadow-lg rounded-full p-2.5 sm:p-3 hover:bg-[#122632] active:scale-95 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#122632] group-hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 shadow-lg rounded-full p-2.5 sm:p-3 hover:bg-[#122632] active:scale-95 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#122632] group-hover:text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
          {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#122632] w-6 sm:w-7"
                  : "bg-gray-300 w-2 sm:w-2.5 hover:bg-[#122632]/70 active:scale-90"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;
