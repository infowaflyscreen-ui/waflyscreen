// import React from "react";
// import { Mail, Phone } from "lucide-react";

// export default function TopBar() {
//   return (
//     <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white text-sm">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        
//         {/* Left: Email */}
//         <div className="flex items-center gap-2">
//           <Mail size={16} />
//           <a href="mailto:info@ilaviz.com" className="hover:underline">
//             info@ilaviz.com
//           </a>
//         </div>

//         {/* Center: Offer text */}
//         <div className="text-center font-medium">
//           Big Sale! Up to 50% off today only.
//         </div>

//         {/* Right: Phone */}
//         <div className="flex items-center gap-2">
//           <Phone size={16} />
//           <a href="tel:+918980978118" className="hover:underline">
//             +91 8980978118
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { Mail, Phone } from "lucide-react";

// export default function TopBar() {
//   return (
//     <div className="bg-[#322E86]  text-white text-sm">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        
//         {/* Left: Email */}
//         <div className="flex items-center gap-2">
//           <Mail size={16} />
//           <a href="mailto:info@ilaviz.com" className="hover:underline">
//             info@ilaviz.com
//           </a>
//         </div>

//         {/* Center: Auto-scrolling text */}
//         <div className="overflow-hidden whitespace-nowrap w-full md:w-auto">
//           <p className="animate-marquee inline-block">
//             Big Sale! Up to 50% off today only. 🚀 Big Sale! Up to 50% off today only. 🚀 
//           </p>
//         </div>

//         {/* Right: Phone */}
//         <div className="flex items-center gap-2">
//           <Phone size={16} />
//           <a href="tel:+918980978118" className="hover:underline">
//             +91 8980978118
//           </a>
//         </div>
//       </div>

//       {/* Marquee animation */}
//       <style jsx>{`
//         .animate-marquee {
//           display: inline-block;
//           padding-left: 100%;
//           animation: marquee 12s linear infinite;
//         }

//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-100%); }
//         }
//       `}</style>
//     </div>
//   );
// }





import React from "react";
import { Mail, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#122632] text-white text-sm font-Josefin">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2 md:gap-0">
        
        {/* Top row (Email & Phone) */}
        <div className="flex w-full md:w-auto justify-between md:justify-start items-center">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:info@waflyscreen.com" className="hover:underline">
           info@waflyscreen.com
            </a>
          </div>

          {/* Phone (only on mobile it goes right) */}
          <div className="flex items-center gap-2 md:hidden">
            <Phone size={16} />
            <a href="tel:+61468444748" className="hover:underline">
              +61 468 444 748
            </a>
          </div>
        </div>

        {/* Center: Auto-scrolling text */}
        <div className="overflow-hidden whitespace-nowrap w-full md:w-auto order-2 md:order-none">
          <p className="animate-marquee inline-block">
            Big Sale! Up to 50% off today only. 🚀 Big Sale! Up to 50% off today only. 🚀 
          </p>
        </div>

        {/* Phone (desktop right side) */}
        <div className="hidden md:flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+61468444748" className="hover:underline">
            +61 468 444 748
          </a>
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
