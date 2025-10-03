// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Import Link

// // const products = [
// //   {
// //     image: "/m3.jpg",
// //     title: "Retractable Screens",
// //     page: "/Service1",
// //     description:
// //       "Our custom made Retractable Screens are ideal for large openings, including french doors, bi-fold doors, stacker doors, double glazed doors...",
// //   },
// //   {
// //     image: "/m1.jpg",
// //     title: "Smartblind",
// //     page: "/Service2",
// //     description:
// //       "EXPERIENCE THE DIFFERENCE A SMARTBLIND CAN MAKE TO YOUR LIVING OR WORKING ENVIRONMENT. Proudly designed and manufactured in Australia...",
// //   },
// //   {
// //     image: "/m2.jpg",
// //     title: "Magnetic Screens",
// //     page: "/Service3",
// //     description:
// //       "FREEDOM™ MAGNETIC Freedom™ Magnetic screens are a discreet screen solution for all types of windows, and an effective screening alternative...",
// //   },
// // ];

// const products = [
//   {
//     image: "/m3.jpg",
//     title: "Retractable Screens",
//     page: "/Service1",
//     description: `Our custom-made Retractable Screens are designed to provide an elegant and functional solution for large openings, such as French doors, bi-fold doors, stacker doors, and double-glazed doors. These screens offer unparalleled versatility, seamlessly blending into your home’s aesthetic while delivering practical benefits. Whether you’re looking to enhance airflow, keep insects out, or maintain an unobstructed view, our retractable screens are the perfect choice for modern living spaces. Crafted with precision, they are tailored to fit a variety of door and window sizes, ensuring a perfect fit for your unique space. The retractable mechanism allows the screens to disappear into a sleek housing when not in use, preserving the open feel of your home and eliminating the need for permanent fixtures that might detract from your interior design.

// The materials used in our retractable screens are of the highest quality, ensuring durability and long-lasting performance. The mesh is constructed from UV-resistant, high-tensile materials that withstand harsh weather conditions, from intense sunlight to heavy rain, without fading or deteriorating. The frames are made from corrosion-resistant aluminum, available in a range of powder-coated finishes to match your home’s exterior or interior color scheme. This attention to detail ensures that your retractable screens not only perform exceptionally but also enhance the visual appeal of your property. Installation is straightforward, with our team of experts working closely with you to ensure a seamless fit and smooth operation. The screens operate effortlessly, with a smooth gliding mechanism that makes them easy to open and close, even for children or elderly users.

// Retractable screens are ideal for homeowners who value both functionality and style. They allow you to enjoy the beauty of open doors without the nuisance of insects, dust, or debris entering your home. They also provide an energy-efficient solution by promoting natural ventilation, reducing the need for air conditioning during warmer months. For households with pets or young children, the screens offer a safe way to keep doors open while preventing unwanted escapes or intrusions. Additionally, our retractable screens are low-maintenance, requiring only occasional cleaning to keep them looking and performing at their best. With their sleek design and customizable options, they are suitable for both residential and commercial settings, such as patios, verandas, or office spaces with large openings. Whether you’re hosting a gathering or simply enjoying a quiet evening at home, our retractable screens create a comfortable and inviting environment without compromising on aesthetics or practicality.`,
//   },
//   {
//     image: "/m1.jpg",
//     title: "Smartblind",
//     page: "/Service2",
//     description: `Experience the transformative power of Smartblind, a revolutionary window treatment designed and manufactured in Australia to elevate your living or working environment. Smartblind combines cutting-edge technology with sophisticated design, offering a perfect balance of style, convenience, and functionality. These innovative blinds are engineered to provide superior light control, privacy, and energy efficiency, making them an ideal choice for modern homes, offices, or commercial spaces. Proudly crafted with Australian craftsmanship, Smartblind is built to withstand the unique challenges of the Australian climate, from intense summer heat to chilly winter mornings, ensuring year-round comfort and durability.

// Smartblind’s standout feature is its intelligent automation system, which allows you to control your blinds with ease using a smartphone app, remote control, or voice-activated smart home systems. This level of convenience means you can adjust light levels, enhance privacy, or create the perfect ambiance without leaving your seat. The blinds are equipped with sensors that can respond to environmental changes, such as adjusting to block out harsh sunlight during the hottest part of the day or opening to let in natural light when conditions are optimal. This not only enhances your comfort but also contributes to significant energy savings by reducing reliance on artificial lighting and air conditioning. The sleek, modern design of Smartblind complements any interior, with a wide range of fabric options, colors, and textures to suit your personal style or professional setting.

// In addition to their smart features, Smartblind is designed with sustainability in mind. The materials used are eco-friendly and sourced responsibly, ensuring minimal environmental impact. The blinds are also highly durable, with UV-resistant fabrics that maintain their appearance over time, even in direct sunlight. Installation is quick and hassle-free, with our team providing expert guidance to ensure a perfect fit for your windows. Smartblind is also low-maintenance, with easy-to-clean surfaces that resist dust and grime buildup. Whether you’re looking to enhance the comfort of your home, create a productive workspace, or add a touch of elegance to a commercial property, Smartblind offers a versatile and innovative solution that adapts to your needs.`,
//   },
//   {
//     image: "/m2.jpg",
//     title: "Magnetic Screens",
//     page: "/Service3",
//     description: `Freedom™ Magnetic screens offer a discreet and highly effective screening solution for all types of windows, providing an innovative alternative to traditional window screens. Designed to combine functionality with ease of use, these magnetic screens are perfect for homeowners seeking a seamless way to keep insects out while maintaining airflow and natural light. The unique magnetic closure system ensures that the screens stay securely in place, even in windy conditions, while allowing for effortless removal and reattachment when needed. This makes Freedom™ Magnetic screens an excellent choice for windows that require frequent access, such as those in kitchens, bedrooms, or high-traffic areas of the home.

// Crafted from high-quality, durable materials, Freedom™ Magnetic screens are built to withstand the elements. The mesh is made from a robust, UV-resistant material that resists fading and tearing, ensuring long-term performance even in harsh weather conditions. The magnetic strips are carefully integrated into the screen’s design, providing a tight seal that prevents gaps where insects could enter. Available in a variety of frame colors and sizes, these screens can be customized to blend seamlessly with your home’s existing window frames, creating a polished and unobtrusive look. Installation is quick and non-invasive, requiring no permanent modifications to your windows, making it an ideal solution for renters or those who prefer a less permanent option.

// Freedom™ Magnetic screens are not only practical but also enhance the comfort and livability of your home. They allow you to enjoy fresh air without the worry of bugs, dust, or debris, creating a healthier and more pleasant indoor environment. For households with pets, the magnetic closure system is particularly beneficial, as it allows pets to move in and out easily while ensuring the screen snaps back into place. The screens are also easy to clean and maintain, requiring only a quick wipe-down to keep them looking pristine. Whether you’re looking to screen a single window or outfit an entire home, Freedom™ Magnetic screens provide a versatile, user-friendly, and aesthetically pleasing solution that enhances both the functionality and beauty of your living space.`,
//   },
// ];
// export default function ProductSection() {
//   return (
//     <section className="py-12 bg-gray-200">
//       <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
//           >
//             {/* Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-56 object-cover"
//             />
//             {/* Content */}
//             <div className="p-6 flex-1 flex flex-col text-center">
//               <h2 className="text-2xl font-semibold mb-3 text-[#122632]">
//                 {product.title}
//               </h2>
//               <p className="text-[#122632] flex-1 line-clamp-4">{product.description}</p>

//               {/* ✅ Use Link instead of <a> */}
//               {/* <Link
//                 to={product.page}
//                 className="mt-6 bg-gray-800 self-center text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
//               >
//                 READ MORE
//               </Link> */}
//               <Link
//                 to="/service"
//                 state={{ product }} // send whole product object
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:scale-105 transition-transform duration-500 ease-in-out w-full"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col text-center">
              <h2 className="text-2xl font-Marcellus font-semibold mb-3 text-[#122632]">
                {product.title}
              </h2>
              <p className="text-[#122632] font-Josefin flex-1 line-clamp-4">
                {product.main_des}
              </p>
              <Link
                to="/service"
                state={{ product }}
                className="mt-6 bg-gray-800 self-center text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
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
