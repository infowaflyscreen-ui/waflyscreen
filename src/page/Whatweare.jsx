import React from "react";
import { Link } from "react-router-dom";

const Whatweare = () => {
  return (
    <section className="bg-gray-200 py-10 md:px-16 px-4">
      <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left: Local Video */}
        <div className="rounded-xl overflow-hidden  flex justify-center">
          <video
            className="w-[80%] md:w-[70%] h-auto rounded-xl"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/1_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right: Content */}
        <div className="text-[#122632]">
          <h2 className="text-4xl font-semibold mb-8 uppercase font-Marcellus">
            Who Are We ?
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
