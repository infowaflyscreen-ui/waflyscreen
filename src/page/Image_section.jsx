
// import React from "react";
// import { Link } from "react-router-dom";
// import { products } from "../assets/service";

// export default function ProductSection() {
//   return (
//     <section className="py-12 max-w-7xl mx-auto md:px-0">

//       {/* Section Header */}
//       <div className="text-center mb-10">   
//         <h2 className="text-4xl font-semibold mb-8 uppercase font-Marcellus">
//           Services We Offer
//         </h2>
//         <p className="text-[#122632] text-sm sm:text-base max-w-2xl font-Josefin mx-auto mt-2">
//           Hear from our satisfied clients about their experience with our flyscreens.
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-2">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-500 ease-in-out w-full"
//           >
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-56 object-cover"
//             />

//             {/* Content */}
//             <div className="p-6 flex-1 flex flex-col text-center">
//               <h2 className="text-2xl font-Marcellus font-semibold mb-3 text-[#122632]">
//                 {product.title}
//               </h2>
//               <p className="text-[#122632] font-Josefin flex-1 line-clamp-4">
//                 {product.main_des}
//               </p>
//               <Link
//                 to="/service"
//                 state={{ product }}
//                 className="mt-6 bg-gray-800 self-center text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
//               >
//                 READ MORE
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { products } from "../assets/service";

export default function ProductSection() {
  return (
    <section className="py-12 max-w-7xl mx-auto md:px-0">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-8 uppercase font-Marcellus">
          Services We Offer
        </h2>
        <p className="text-[#122632] text-sm sm:text-base max-w-2xl font-Josefin mx-auto mt-2">
          Hear from our satisfied clients about their experience with our flyscreens.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-500 ease-in-out w-full min-h-[520px]"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col text-center justify-between overflow-hidden">
              <div>
                <h2 className="text-xl font-Marcellus font-semibold mb-3 text-[#122632] leading-snug">
                  {product.title}
                </h2>
                <p className="text-[#122632] font-Josefin text-sm leading-relaxed line-clamp-4 overflow-hidden">
                  {product.main_des}
                </p>
              </div>

              <Link
                to="/service"
                state={{ product }}
                className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit self-center transition-all duration-300"
              >
                READ MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

