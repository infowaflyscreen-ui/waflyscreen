import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [email, setEmail] = useState(""); // newsletter email input
  const [status, setStatus] = useState(null); // success/error message

  const API_BASE = import.meta.env.VITE_API_BASE_URL; // Vite env variable

  // -----------------------------
  // Function to call newsletter API
  // -----------------------------
  const handleSubscribe = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Email is required" });
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/newsletter.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus({ type: "success", message: data.message });
        setEmail(""); // clear input
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error" });
    }
  };

  // -----------------------------
  // Handle Enter key in input
  // -----------------------------
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <>
      <footer
        // style={{
        //   backgroundColor: "#122632",
        //   backgroundImage: "url('/footer.jpg')",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "start",
        //   padding: "10px",
        //   minHeight: "100vh",
        // }}
        className="w-full text-white bg-[#122632] bg-[url('/footer.jpg')] md:bg-[url('/footer.jpg')] bg-cover bg-no-repeat bg-left p-[10px] min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10">
          <div className="bg-[#00000069] rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
              {/* Column 1 - Logo + Subscribe */}
              <div className="lg:col-span-2">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-24 sm:h-28 md:h-32 w-auto ml-0 rounded-lg bg-white"
                />


                <div className="w-full max-w-sm lg:max-w-md mt-6">
                  <div className="flex rounded-lg overflow-hidden shadow-lg border border-gray-300">
                    <input
                      type="text"
                      placeholder="Enter Your Email"
                      className="font-Josefin flex-1 px-5 py-3 text-sm text-gray-800 bg-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                    <button
                      onClick={handleSubscribe}
                      className="bg-gray-800 hover:bg-gray-700 uppercase text-white px-4 py-3 text-sm transition-colors duration-200 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  {/* Status message */}
                  {status && (
                    <p
                      className={`mt-2 text-sm ${status.type === "success"
                        ? "text-green-500"
                        : "text-red-500"
                        }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Column 3 - Quick Links */}
              <div className="lg:col-span-1 font-Josefin">
                <div
                  className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
                  onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                >
                  <h3 className="font-semibold text-lg lg:text-base font-Marcellus">
                    Quick Links
                  </h3>
                  <span className="lg:hidden text-sm">
                    {isQuickLinksOpen ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isQuickLinksOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
                    }`}
                >
                  <ul className="space-y-2 p-2">
                    <li>
                      <Link
                        to="/"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/aboutus"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                        onClick={(e) => {
                          e.preventDefault(); // prevent default navigation
                          const el = document.getElementById("getAQuoteForm");
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }}
                      >
                        Get Quote
                      </Link>

                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 4 - Policies */}
              <div className="lg:col-span-1 font-Josefin">
                <div
                  className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
                  onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
                >
                  <h3 className="font-semibold text-lg lg:text-base font-Marcellus">
                    Policies
                  </h3>
                  <span className="lg:hidden text-sm">
                    {isPoliciesOpen ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isPoliciesOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
                    }`}
                >
                  <ul className="space-y-2 p-2">
                    <li>
                      <Link
                        to="/terms"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/privacy"
                        className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 5 - Connect */}
              <div className="lg:col-span-1 font-Josefin">
                <div
                  className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
                  onClick={() => setIsConnectOpen(!isConnectOpen)}
                >
                  <h3 className="font-semibold text-lg lg:text-base font-Marcellus">
                    Connect
                  </h3>
                  <span className="lg:hidden text-sm">
                    {isConnectOpen ? (
                      <FaMinus size={16} />
                    ) : (
                      <FaPlus size={16} />
                    )}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isConnectOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
                    }`}
                >
                  <ul className="space-y-2 p-2">
                    <li className="text-sm lg:text-base">+61 468 444 748</li>
                    <li className="text-sm lg:text-base">
                      support@waflyscreen.com
                    </li>
                  </ul>
                  <div className="flex gap-3 lg:gap-4 mt-4">
                    <Link
                      to="https://www.facebook.com/profile.php?viewas=100000686899395&id=61581506022769"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-6 h-6 lg:w-7 lg:h-7" />
                    </Link>
                    <Link
                      to="https://www.instagram.com/waflyscreen/"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-6 h-6 lg:w-7 lg:h-7" />
                    </Link>
                    <Link
                      to="https://www.youtube.com/@WaFlyscreen"
                      className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      aria-label="Youtube"
                    >
                      <FaYoutube className="w-6 h-6 lg:w-7 lg:h-7" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#122632] text-white py-4 px-4 font-Josefin">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs sm:text-sm text-gray-300">
            © Copyright 2026 waflyscreenandsecurity.com.au
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;





// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaPlus,
//   FaMinus,
// } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// function Footer() {
//   const [isExploreOpen, setIsExploreOpen] = useState(false);
//   const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
//   const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
//   const [isConnectOpen, setIsConnectOpen] = useState(false);

//   return (
//     <>
//       <footer
//         style={{
//           backgroundColor: "#122632",
//           backgroundImage: "url('/footer.png')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "start",
//           padding: "10px",
//           height: "100vh",
//         }}
//         className="w-full text-white    "
//       >
//         {/* Main Container */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 sm:py-10">
//           {/* Main Overlay Container */}
//           <div className="bg-[#00000069] rounded-2xl p-4 sm:p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
//               {/* Column 1 - Logo + Subscribe */}
//               <div className="lg:col-span-2">
//                 <img
//                   src="/logo.svg"
//                   alt="Logo"
//                   className="h-10 sm:h-12 md:h-14 w-auto ml-0 brightness-0 invert"
//                 />

//                 <div className="w-full max-w-sm lg:max-w-md mt-6">
//                   <div className="flex rounded-lg overflow-hidden shadow-lg border border-gray-300">
//                     <input
//                       type="text"
//                       placeholder="Enter Your Email / Phone"
//                       className="font-Josefin flex-1 px-5 py-3 text-sm text-gray-800 bg-white placeholder-gray-500 border-none focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0"
//                     />
//                     <button className="bg-gray-800 hover:bg-gray-700 uppercase  text-white px-4 py-3 text-sm  transition-colors duration-200 whitespace-nowrap">
//                       Subscribe
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Column 3 - Quick Links */}
//               <div className="lg:col-span-1 font-Josefin">
//                 <div
//                   className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
//                   onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
//                 >
//                   <h3 className="font-semibold text-lg lg:text-base   font-Marcellus">
//                     Quick Links
//                   </h3>
//                   <span className="lg:hidden text-sm">
//                     {isQuickLinksOpen ? (
//                       <FaMinus size={16} />
//                     ) : (
//                       <FaPlus size={16} />
//                     )}
//                   </span>
//                 </div>
//                 <div
//                   className={`
//                   overflow-hidden transition-all duration-300 ease-in-out
//                   ${isQuickLinksOpen
//                       ? "max-h-96 opacity-100"
//                       : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
//                     }
//                 `}
//                 >
//                   <ul className="space-y-2 p-2">
//                     <li>
//                       <Link
//                         to="/"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         Home Page
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/aboutus"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         About Us
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/services"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         Services
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/contact"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         Contact Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Column 4 - Policies */}
//               <div className="lg:col-span-1 font-Josefin">
//                 <div
//                   className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
//                   onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
//                 >
//                   <h3 className="font-semibold text-lg lg:text-base font-Marcellus">
//                     Policies
//                   </h3>
//                   <span className="lg:hidden text-sm">
//                     {isPoliciesOpen ? (
//                       <FaMinus size={16} />
//                     ) : (
//                       <FaPlus size={16} />
//                     )}
//                   </span>
//                 </div>
//                 <div
//                   className={`
//                   overflow-hidden transition-all duration-300 ease-in-out
//                   ${isPoliciesOpen
//                       ? "max-h-96 opacity-100"
//                       : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
//                     }
//                 `}
//                 >
//                   <ul className="space-y-2 p-2">
//                     <li>
//                       <Link
//                         to="/terms"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         Terms & Conditions
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/privacy"
//                         className="block text-sm lg:text-base text-gray-200 hover:text-white hover:underline transition-colors duration-200 py-1"
//                       >
//                         Privacy Policy
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Column 5 - Connect */}
//               <div className="lg:col-span-1 font-Josefin">
//                 <div
//                   className="flex items-center justify-between lg:justify-start cursor-pointer lg:cursor-default mb-2"
//                   onClick={() => setIsConnectOpen(!isConnectOpen)}
//                 >
//                   <h3 className="font-semibold text-lg lg:text-base font-Marcellus">
//                     Connect
//                   </h3>
//                   <span className="lg:hidden text-sm">
//                     {isConnectOpen ? (
//                       <FaMinus size={16} />
//                     ) : (
//                       <FaPlus size={16} />
//                     )}
//                   </span>
//                 </div>
//                 <div
//                   className={`
//                   overflow-hidden transition-all duration-300 ease-in-out
//                   ${isConnectOpen
//                       ? "max-h-96 opacity-100"
//                       : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
//                     }
//                 `}
//                 >
//                   <ul className="space-y-2 p-2">
//                     <li className="text-sm lg:text-base">+61 468444748</li>
//                     <li className="text-sm lg:text-base">info@waflyscreen.com</li>
//                   </ul>

//                   {/* Social Icons */}
//                   <div className="flex gap-3 lg:gap-4 mt-4">
//                     <Link
//                       to="#"
//                       className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
//                       aria-label="Facebook"
//                     >
//                       <FaFacebookF className="w-6 h-6 lg:w-7 lg:h-7" />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
//                       aria-label="Instagram"
//                     >
//                       <FaInstagram className="w-6 h-6 lg:w-7 lg:h-7" />
//                     </Link>
//                     <Link
//                       to="#"
//                       className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-[#122632] hover:bg-[#122632] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
//                       aria-label="LinkedIn"
//                     >
//                       <FaLinkedinIn className="w-6 h-6 lg:w-7 lg:h-7" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Bottom Copyright Bar */}
//       <div className="bg-[#122632] text-white py-4 px-4 font-Josefin ">
//         <div className="max-w-7xl mx-auto">
//           <p className="text-center text-xs sm:text-sm text-gray-300">
//             © Copyright 2025 Waflyscreen | Powered by Megascale
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;
