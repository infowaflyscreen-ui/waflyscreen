// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

// const TestimonialSection = () => {
//   const sliderRef = React.useRef(null);
//   const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

//   const testimonialData = [
//     {
//       id: 1,
//       name: "Valleri Hodikumo",
//       date: "03/01/2025",
//       avatar: "V",
//       avatarBg: "bg-[#122632]",
//       rating: 5,
//       review: "Great experience with RBC flyscreen and highly recommend their services. They offer quick, efficient and professional service. I've used them twice for different...",
//       fullReview: "Great experience with RBC flyscreen and highly recommend their services. They offer quick, efficient and professional service. I've used them twice for different projects and both times they delivered exceptional results. The team is knowledgeable, courteous, and goes above and beyond to ensure customer satisfaction. Their flyscreens are of premium quality and installation was seamless. I wouldn't hesitate to recommend them to anyone looking for reliable flyscreen solutions."
//     },
//     {
//       id: 2,
//       name: "Asheigh Bowyer",
//       date: "03/01/2025",
//       avatar: "A",
//       avatarBg: "bg-[#122632]",
//       rating: 5,
//       review: "Bloody brilliant, fast, efficient and unlike everyone else weren't stupid about the price 😊",
//       fullReview: "Bloody brilliant, fast, efficient and unlike everyone else weren't stupid about the price 😊. I contacted several companies for flyscreen quotes and most were either overpriced or unprofessional. RBC Flyscreen stood out with their reasonable pricing, quick response time, and professional approach. The installation was completed on time and the quality exceeded my expectations. Very happy with the service and would definitely use them again."
//     },
//     {
//       id: 3,
//       name: "Preeti Soni",
//       date: "03/01/2025",
//       avatar: "P",
//       avatarBg: "bg-[#122632]",
//       rating: 5,
//       review: "Found these guys in FB and thought of giving a try. They were absolutely fantastic. Very prompt with response and came to job on time. Work was...",
//       fullReview: "Found these guys in FB and thought of giving a try. They were absolutely fantastic. Very prompt with response and came to job on time. Work was completed to a high standard and they cleaned up after themselves. The flyscreens look great and function perfectly. The whole team was professional and friendly throughout the process. I'm extremely satisfied with the quality of work and customer service. Will definitely recommend to friends and family."
//     },
//     {
//       id: 4,
//       name: "Mike Johnson",
//       date: "02/01/2025",
//       avatar: "M",
//       avatarBg: "bg-[#122632]",
//       rating: 5,
//       review: "Outstanding service and quality workmanship. The team was professional, punctual, and delivered exactly what was promised. Highly recommended!",
//       fullReview: "Outstanding service and quality workmanship. The team was professional, punctual, and delivered exactly what was promised. Highly recommended! From the initial consultation to the final installation, everything was handled with utmost professionalism. The flyscreens are of excellent quality and the installation was flawless. Great value for money and exceptional customer service. I couldn't be happier with the results."
//     },
//     {
//       id: 5,
//       name: "Sarah Williams",
//       date: "01/01/2025",
//       avatar: "S",
//       avatarBg: "bg-[#122632]",
//       rating: 5,
//       review: "Excellent customer service and high-quality products. Very happy with the installation and would definitely recommend to others. Great value for money.",
//       fullReview: "Excellent customer service and high-quality products. Very happy with the installation and would definitely recommend to others. Great value for money. The team was knowledgeable, friendly, and completed the work efficiently. The flyscreens have made a huge difference to our home comfort, keeping insects out while allowing fresh air in. The quality is top-notch and the installation was seamless. Fantastic experience overall!"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     centerMode: false,
//     responsive: [
//       {
//         breakpoint: 1280, // xl
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024, // lg
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768, // md
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 640, // sm
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   const goToPrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const goToNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const openModal = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const closeModal = () => {
//     setSelectedTestimonial(null);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target.classList.contains('modal-overlay')) {
//       closeModal();
//     }
//   };

//   return (
//     <div className="bg-gray-200 py-6 px-2 sm:px-4 md:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-12">
//       <div className="text-center mb-4 sm:mb-6 md:mb-8">
//         <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#122632]">
//           Happy Customers
//         </h1>
//         <p className="text-[#122632] text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl mx-auto mt-1 sm:mt-2">
//           Hear from our satisfied clients about their experience with our flyscreens.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto relative">
//         <button 
//           onClick={goToPrev}
//           className="absolute left-[-12px] sm:left-[-16px] md:left-[-24px] top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex items-center justify-center hover:bg-white/90 transition-all duration-300 z-10"
//           aria-label="Previous testimonial"
//         >
//           <MdOutlineArrowBackIos className="text-gray-700 text-base sm:text-lg md:text-xl" />
//         </button>

//         <button 
//           onClick={goToNext}
//           className="absolute right-[-12px] sm:right-[-16px] md:right-[-24px] top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 flex items-center justify-center hover:bg-white/90 transition-all duration-300 z-10"
//           aria-label="Next testimonial"
//         >
//           <MdOutlineArrowForwardIos className="text-gray-700 text-base sm:text-lg md:text-xl" />
//         </button>

//         <div className="px-2 sm:px-4 md:px-6">
//           <Slider ref={sliderRef} {...settings}>
//             {testimonialData.map((testimonial) => (
//               <div key={testimonial.id} className="px-1 sm:px-2 md:px-3">
//                 <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-5 text-left border border-gray-100">
//                   <div className="flex items-start mb-2 sm:mb-3 md:mb-4">
//                     <div className={`w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg md:text-xl mr-2 sm:mr-3 md:mr-3 flex-shrink-0`}>
//                       {testimonial.avatar}
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg">{testimonial.name}</p>
//                       <p className="text-gray-500 text-xs sm:text-sm md:text-sm mt-1">{testimonial.date}</p>
//                     </div>
//                   </div>

//                   <div className="mb-2 sm:mb-3 md:mb-4">
//                     <div className="flex items-center">
//                       <div className="text-yellow-400 text-base sm:text-lg md:text-xl mr-1 sm:mr-2">
//                         {'★'.repeat(testimonial.rating)}
//                       </div>
//                       <span className="text-gray-600 font-medium text-sm sm:text-base md:text-base">{testimonial.rating}</span>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-gray-600 text-xs sm:text-sm md:text-base line-clamp-3">
//                       {testimonial.review}
//                     </p>
//                     <button 
//                       onClick={() => openModal(testimonial)}
//                       className="text-blue-500 text-xs sm:text-sm md:text-base font-medium hover:text-blue-600 transition-colors mt-0"
//                     >
//                       Read more
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>

//       {selectedTestimonial && (
//         <div 
//           className="modal-overlay fixed inset-0 bg-[#00000057] bg-opacity-40 flex items-center justify-center z-50 p-2 sm:p-4"
//           onClick={handleOverlayClick}
//         >
//           <div className="bg-white rounded-lg max-w-xs sm:max-w-md md:max-w-lg w-full max-h-[70vh] sm:max-h-[80vh] overflow-y-auto">
//             <div className="p-4 sm:p-6 md:p-8">
//               <div className="flex items-start justify-between mb-2 sm:mb-4">
//                 <div className="flex items-center">
//                   <div className={`w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 ${selectedTestimonial.avatarBg} rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg md:text-xl mr-2 sm:mr-3 md:mr-3`}>
//                     {selectedTestimonial.avatar}
//                   </div>
//                   <div>
//                     <h3 className="text-gray-800 font-semibold text-sm sm:text-lg md:text-xl">{selectedTestimonial.name}</h3>
//                     <p className="text-gray-500 text-xs sm:text-sm md:text-sm mt-1">{selectedTestimonial.date}</p>
//                   </div>
//                 </div>
//                 <button 
//                   onClick={closeModal}
//                   className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl md:text-3xl font-light"
//                   aria-label="Close modal"
//                 >
//                   ×
//                 </button>
//               </div>

//               <div className="mb-2 sm:mb-3 md:mb-4">
//                 <div className="flex items-center">
//                   <div className="text-yellow-400 text-base sm:text-lg md:text-xl mr-1 sm:mr-2">
//                     {'★'.repeat(selectedTestimonial.rating)}
//                   </div>
//                   <span className="text-gray-600 font-medium text-sm sm:text-base md:text-base">{selectedTestimonial.rating}</span>
//                 </div>
//               </div>

//               <div>
//                 <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
//                   {selectedTestimonial.fullReview}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestimonialSection;




import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  // Fibreglass Flyscreen Repair & Replacement
  {
    name: "Lisa Thompson",
    service: "Fibreglass Flyscreen Repair & Replacement",
    date: "03/01/2025",
    rating: 5,
    text: "Fantastic experience with WA Flyscreen! The fibreglass screen repair was done quickly and looks perfect. Highly recommend their team!"
  },
  {
    name: "James Carter",
    service: "Fibreglass Flyscreen Repair & Replacement",
    date: "07/02/2025",
    rating: 4,
    text: "Professional service for fibreglass flyscreen replacement. The team was punctual and the results exceeded my expectations!"
  },

  // Pet Mesh Screen Repair & Replacement
  {
    name: "Priya Patel",
    service: "Pet Mesh Screen Repair & Replacement",
    date: "10/03/2025",
    rating: 5,
    text: "Loved how WA Flyscreen handled our pet mesh screens. Strong, durable, and perfect for keeping our pets safe indoors."
  },
  {
    name: "Mark Reynolds",
    service: "Pet Mesh Screen Repair & Replacement",
    date: "16/04/2025",
    rating: 4,
    text: "The pet mesh screen replacement was flawless. Very impressed with their attention to detail and quick service."
  },

  // Aluminium Mesh Screen Repair & Replacement
  {
    name: "Emily Nguyen",
    service: "Aluminium Mesh Screen Repair & Replacement",
    date: "18/05/2025",
    rating: 5,
    text: "Excellent aluminium mesh screen repair! Strong, neat, and looks great. The team was professional and efficient."
  },
  {
    name: "Daniel Wilson",
    service: "Aluminium Mesh Screen Repair & Replacement",
    date: "19/06/2025",
    rating: 4,
    text: "WA Flyscreen replaced our aluminium mesh screens perfectly. Friendly staff, fast install, and very reliable service."
  },

  // One Way Mesh Screen Repair & Replacement
  {
    name: "Sophia Lee",
    service: "One Way Mesh Screen Repair & Replacement",
    date: "22/07/2025",
    rating: 5,
    text: "The one way mesh screen installation was done perfectly. Works great and keeps the house secure while allowing airflow."
  },
  {
    name: "Liam Johnson",
    service: "One Way Mesh Screen Repair & Replacement",
    date: "28/08/2025",
    rating: 4,
    text: "Fantastic job on our one way mesh screens! Excellent workmanship and very courteous staff. Highly recommend WA Flyscreen."
  }
];


const TestimonialCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <div className="bg-gray-100 py-10 relative font-Josefin">
      <h1 className="text-[36px] font-bold text-center mb-2 font-Marcellus">Happy Customers</h1>
      <p className="text-center text-gray-600 mb-8">
        Hear from our satisfied clients about their experience with our flyscreens.
      </p>

      <div className="max-w-[1220px] mx-auto px-4 relative">
        {/* Swiper */}
        <Swiper
          onSwiper={setSwiperInstance} // store swiper instance
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
                      {item.name[0]}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-yellow-500 text-lg mb-3">
                    {"⭐".repeat(item.rating)}
                  </p>
                  <p className="text-gray-700 line-clamp-3">{item.text}</p>
                </div>
                <button
                  onClick={() => setSelectedTestimonial(item)}
                  className="text-blue-600 mt-4 inline-block hover:underline"
                >
                  Read more
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Desktop navigation buttons */}
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 group hover:bg-[#122632]"
        >
          <ChevronLeft className="w-6 h-6 text-[#122632] group-hover:text-white transition-colors duration-300" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 transition-all duration-300 group hover:bg-[#122632]"
        >
          <ChevronRight className="w-6 h-6 text-[#122632] group-hover:text-white transition-colors duration-300" />
        </button>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center gap-6 mt-4 md:hidden">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="bg-white shadow-lg rounded-full p-3"
          >
            <ChevronLeft className="w-6 h-6 text-[#122632]" />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="bg-white shadow-lg rounded-full p-3"
          >
            <ChevronRight className="w-6 h-6 text-[#122632]" />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedTestimonial && (
        <div
          onClick={() => setSelectedTestimonial(null)}
          className="fixed inset-0 bg-[#00000073] flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] p-6 relative"
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-3 right-3 text-gray-600 text-2xl hover:text-black"
            >
              ×
            </button>

            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold">
                {selectedTestimonial.name[0]}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-center">
              {selectedTestimonial.name}
            </h3>
            <p className="text-sm text-gray-500 text-center mb-2">
              {selectedTestimonial.date}
            </p>
            <p className="text-yellow-500 text-lg text-center mb-3">
              {"⭐".repeat(selectedTestimonial.rating)}
            </p>
            <p className="text-gray-700 text-center">{selectedTestimonial.text}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .swiper-pagination-bullet {
          background: grey;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #122632;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
