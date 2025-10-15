// import React, { useState } from "react";

// const FAQSection = () => {
//   // Dummy FAQ data
//   const faqData = [
//     {
//       question: "What is ESR?",
//       answer:
//         "ESR is an organization focused on creating sustainable, innovative, and community-driven solutions.",
//     },
//     {
//       question: "How can I contact support?",
//       answer:
//         "You can contact our support team via email at support@esr.com or call us at +1 (800) 555-1234.",
//     },
//     {
//       question: "Where are you located?",
//       answer:
//         "We are located in multiple regions across the globe, including North America, Europe, and Asia.",
//     },
//     {
//       question: "Do you offer partnership opportunities?",
//       answer:
//         "Yes, ESR actively seeks strategic partners to collaborate on projects that align with our mission and values.",
//     },
//     {
//       question: "What are your core values?",
//       answer:
//         "Our core values include excellence, respect, collaboration, reliability, and integrity.",
//     },
//   ];

//   // Only one open at a time
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="  bg-[#001956] font-Ubuntu">
//       {/* Header Section */}
//       <div className="text-center py-16 px-4">
//         <h1 className="text-white text-5xl font-semibold mb-8 tracking-wider font-Italiana">
//           FAQ's
//         </h1>
//         <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed ">
//           People will always seek help and advice. They are unwilling to pick up
//           the phone, walk into a store, or wait hours for that information or
//           insight to become accessible.
//         </p>
//       </div>

//       {/* FAQ Items */}
//       <div className="max-w-6xl mx-auto px-4 pb-18">
//         <div className="space-y-4">
//           {faqData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleItem(index)}
//                 className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
//               >
//                 <span className="text-white text-lg font-medium pr-4">
//                   {item.question}
//                 </span>
//                 <div className="flex-shrink-0">
//                   {openIndex === index ? (
//                     <svg
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20 12H4"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-6 h-6 text-white"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 6v12m6-6H6"
//                       />
//                     </svg>
//                   )}
//                 </div>
//               </button>

//               {/* Expandable Content */}
//               <div
//                 className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                   openIndex === index
//                     ? "max-h-96 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 <div className="px-6 pb-6">
//                   <div className="text-white/90 text-base leading-relaxed">
//                     {item.answer}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;
import React, { useState } from "react";

const FAQSection = () => {
  const faqData = [
  {
    question: "What areas do you service?",
    answer:
      "We provide mobile flyscreen repair and replacement services across Perth and Peel, coming directly to your home or business.",
  },
  {
    question: "What types of flyscreens can you repair or replace?",
    answer:
      "We repair and replace Fibreglass Flyscreens, Heavy-Duty Pet Mesh Screens, and Aluminium Mesh Screens for all window and door types.",
  },
  {
    question: "Can you repair damaged flyscreens?",
    answer:
      "Yes! We repair torn, bent, or broken screens on-site, restoring them to full functionality and appearance.",
  },
  {
    question: "How long does a repair or replacement take?",
    answer:
      "Most standard repairs and replacements are completed in 1–2 hours, depending on the screen type and size. Custom jobs may take longer.",
  },
  {
    question: "Are your screens pet-friendly?",
    answer:
      "Yes, our Heavy-Duty Pet Mesh Screens are designed to withstand claws and paws, keeping pets safe while maintaining protection from insects.",
  },
  {
    question: "Do you provide a warranty on repairs or replacements?",
    answer:
      "Yes, all repairs and replacements come with a workmanship warranty to ensure long-lasting performance and customer satisfaction.",
  },

];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-Josefin bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1250px] mx-auto grid gap-12 lg:grid-cols-2 items-start">
        {/* Left Side - FAQ */}
        <div>
          <h1 className="text-[#122632] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 tracking-wider font-Marcellus">
            FAQ's
          </h1>
          <p className="text-[#122632] text-base sm:text-lg max-w-full mb-10 leading-relaxed">
            People will always seek help and advice. They are unwilling to
            pick up the phone, walk into a store, or wait hours for that
            information or insight to become accessible.
          </p>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#122632] backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <span className="text-white text-lg sm:text-xl font-medium pr-4 font-Marcellus">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="text-white/90 text-base sm:text-lg leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/faq.jpg"
            alt="FAQ Illustration"
            className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

// import React, { useState } from "react";

// const FlyScreenFAQ = () => {
//   const faqData = [
//     {
//       question: "What types of fly screens do you install?",
//       answer:
//         "We supply & fit retractable, hinged, sliding and security mesh screens to suit any opening.",
//     },
//     {
//       question: "Do you offer custom sizes?",
//       answer:
//         "Yes, all screens are custom-made in Perth to perfectly fit your windows or doors.",
//     },
//     {
//       question: "How long does installation take?",
//       answer:
//         "Most standard jobs are completed within 1–2 days after measurement.",
//     },
//     {
//       question: "What maintenance is required?",
//       answer:
//         "Simply wipe down with mild soapy water every few months to keep the mesh clean.",
//     },
//     {
//       question: "Do you provide a warranty?",
//       answer:
//         "All our fly screens come with a 5-year product and installation warranty.",
//     },
//   ];

//   const [openIndex, setOpenIndex] = useState(null);
//   const toggleItem = (index) => setOpenIndex(openIndex === index ? null : index);

//   return (
//     // <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
//     <section className="relative bg-gray-200 py-20">
//       {/* Mesh pattern overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
//           backgroundSize: "20px 20px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left: Hero image */}
//         <div className="relative rounded-3xl overflow-hidden shadow-xl">
//           <img
//             src="https://sc04.alicdn.com/kf/H86786fc0c2c5448db5e2f741b47f2fb6u.jpg" // replace with your image
//             alt="Fly screen installation"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//         </div>

//         {/* Right: FAQ */}
//         <div className="text-[#122632]">
//           <h2 className="text-3xl sm:text-4xl font-bold   mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow hover:shadow-md transition overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleItem(index)}
//                   className="w-full flex justify-between items-center px-6 py-5 text-left"
//                 >
//                   <span className="text-lg sm:text-xl font-semibold  text-gray-900">
//                     {item.question}
//                   </span>
//                   <svg
//                     className={`w-6 h-6 text-gray-700 transform transition-transform duration-300 ${
//                       openIndex === index ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 <div
//                   className={`grid transition-all duration-500 ease-in-out ${
//                     openIndex === index
//                       ? "grid-rows-[1fr] opacity-100"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden px-6 pb-5 text-gray-500 leading-relaxed">
//                     {item.answer}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlyScreenFAQ;
