import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="w-full font-Josefin mt-28">
      {/* Banner Section */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://uscustomcreations.com/wp-content/uploads/2022/05/insect-screens-solar-comparison.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-bold relative z-10 drop-shadow-lg font-Marcellus"
        >
          About Us
        </motion.h1>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Animated Heading like "Our Products" */}
        <div className="text-center mb-10 group">
          <h2 className="text-4xl font-bold text-[#122632] relative inline-block font-Marcellus">
            Our Story
            <span
              className="block h-1 bg-gray-900 mx-auto 
                         w-16 transition-all duration-900 
                         group-hover:w-full"
            ></span>
          </h2>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            At <span className="font-semibold text-[#122632]">Wa Flyscreen</span>, we know that a home is more than just walls and windows—it’s where comfort, safety, and peace of mind truly matter. That’s why we’re dedicated to providing high-quality flyscreen installations and repairs that keep insects out while letting fresh air flow in.
          </p>

          <h4 className="text-2xl font-bold text-[#122632] mt-6 font-Marcellus">Our Story</h4>
          <p>
            Wa Flyscreen was founded with a simple goal: to make flyscreen services convenient, affordable, and reliable for every household and business across Perth and Peel. Having seen how frustrating it can be to deal with insects indoors—or to waste time with poorly fitted screens—we set out to change the experience by offering on-site, mobile flyscreen solutions.
          </p>
          <p>
            With a background in craftsmanship and a keen eye for detail, our team brings professionalism and care to every project, whether it’s repairing a small tear or designing a custom-made flyscreen for unique spaces.
          </p>

          <h4 className="text-2xl font-bold text-[#122632] mt-6 font-Marcellus">What We Do Best</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">High-Quality Fibreglass Flyscreens –</span> Lightweight, durable, and perfect for everyday use.
            </li>
            <li>
              <span className="font-semibold">Heavy-Duty Pet Mesh Screens –</span> Built to withstand claws and paws, giving pet owners peace of mind.
            </li>
            <li>
              <span className="font-semibold">Custom-Made Flyscreens –</span> Precision-crafted to fit your windows and doors perfectly, no matter the size or shape.
            </li>
          </ul>
          <p>
            Each service is carried out on-site, saving you the hassle of transporting frames or waiting weeks for replacements.
          </p>

          <h4 className="text-2xl font-bold text-[#122632] mt-6 font-Marcellus">Our Promise</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Durability –</span> Screens designed to last, even in busy households.
            </li>
            <li>
              <span className="font-semibold">Convenience –</span> A fully mobile service that comes directly to your door.
            </li>
            <li>
              <span className="font-semibold">Precision –</span> Every installation and repair is completed with attention to detail.
            </li>
            <li>
              <span className="font-semibold">Trust –</span> Clear communication, fair pricing, and customer satisfaction at the heart of everything we do.
            </li>
          </ul>

          <h4 className="text-2xl font-bold text-[#122632] mt-6 font-Marcellus">Looking Ahead</h4>
          <p>
            Our mission is to continue growing as a trusted name in flyscreen solutions across Western Australia. Whether you need a quick fix or a complete replacement, we’re here to make the process easy, stress-free, and reliable.
          </p>
          <p>
            At Wa Flyscreen, your comfort is our priority—and we’re proud to help create homes and businesses that are protected, comfortable, and insect-free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
