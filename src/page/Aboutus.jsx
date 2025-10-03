import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="  relative mx-auto max-w-[1350px] flex flex-col lg:flex-row items-start justify-between py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden font-Ubuntu gap-8 lg:gap-16">
      {/* Dotted pattern overlay for bottom right */}
      <div
        className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6600' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 lg:mr-8">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Image */}
          <img
            src="/d3.png"
            alt="Flyscreen installation service"
            className="absolute inset-0 w-full h-full object-cover z-10"
            loading="lazy"
          />

          {/* Experience Badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20 bg-[#122632] text-white text-sm sm:text-base lg:text-xl font-bold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg shadow-lg transform font-Ubuntu">
            20+
            <br />
            YEARS
            <br />
            SERVICE
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2">
        {/* Section Heading */}
        <div className="flex items-center mb-3 sm:mb-8">
          <span className="text-[#122632] text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-wider font-Marcellus">
            ABOUT WA FLYSCREEN
          </span>
        </div>

        {/* Title */}
        <h2 className="font-bold mb-4 sm:mb-6 leading-tight text-[#122632] font-Josefin">
          Reliable Mobile Flyscreen Services
        </h2>

        {/* Paragraphs */}
        <p className="text-[#122632] text-[16px] mb-4 sm:mb-6 leading-relaxed font-Josefin">
          Wa Flyscreen provides mobile flyscreen repairs, installations, and
          custom-made screens across Perth and Peel. We pride ourselves on
          delivering high-quality, reliable, and safe solutions for both homes
          and businesses.
        </p>

        <p className="text-[#122632] text-[16px] leading-relaxed mb-4 sm:mb-6 font-Josefin">
          Our mission is to offer a service of excellence — ensuring every
          client receives durable, cost-effective, and professionally installed
          flyscreens. Whether you need a quick repair or a complete
          installation, we make the process simple, fast, and stress-free.
        </p>

        <p className="text-[#122632] text-[16px] leading-relaxed mb-4 sm:mb-6 font-Josefin">
          Appointments can be scheduled via phone, email, or our online contact
          form. We value your time, so we always aim to be on time and deliver
          our work with precision and care.
        </p>

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="uppercase mt-6 bg-gray-800 self-center text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
