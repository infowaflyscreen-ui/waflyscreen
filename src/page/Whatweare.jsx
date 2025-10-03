import React from "react";
import { Link } from "react-router-dom";

const Whatweare = () => {
  return (
    <section className="bg-gray-200 py-10 md:px-16 px-4">
      <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left: Video Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/tkrV2Ptovnc?si=XmvXKRKTzOYJeJey"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right: Content */}
        <div className="text-[#122632]">
          <h2 className="text-4xl font-semibold mb-8 uppercase font-Marcellus">
            Who We Are
          </h2>
          <p className="mb-3 leading-relaxed font-Josefin">
            At Wa Flyscreen, we believe comfort and peace of mind start at home.
            That’s why we’re dedicated to delivering durable flyscreens that
            keep insects out while letting fresh air flow in.
          </p>
          <p className="mb-6 leading-relaxed font-Josefin">
            Our mobile service makes it simple—whether it’s a quick repair, a
            replacement, or a custom-made solution, we bring professional care
            straight to your door across Perth and Peel.
          </p>
          <p className="mb-6 leading-relaxed font-Josefin">
            From fibreglass flyscreens to heavy-duty pet mesh and
            precision-crafted custom screens, we focus on durability,
            convenience, and detail in every job.
          </p>
          <Link
            to="/contact"
            className="uppercase mt-6 bg-gray-800 self-start text-white px-4 py-2 rounded-md hover:bg-gray-700 w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Whatweare;
