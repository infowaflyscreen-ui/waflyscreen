import React from "react";
import { products } from "../../assets/service"; // adjust path if needed
import ReactMarkdown from "react-markdown";

const ServiceDetails = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Animated Heading */}
        <div className="text-center mb-16 group">
          <h2 className="text-4xl font-bold text-[#122632] relative inline-block  font-Marcellus">
            Our Services
            <span
              className="block h-1 bg-gray-900 mx-auto 
                         w-16 transition-all duration-900 
                         group-hover:w-full"
            ></span>
          </h2>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover md:min-h-[350px]"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3 font-Marcellus">
                    {product.title}
                  </h2>

                  <div className="prose prose-gray max-w-none font-Josefin">
                    <ReactMarkdown
                      components={{
                        h1: ({ node, ...props }) => (
                          <h3
                            className="text-xl font-semibold text-gray-800 mt-6 mb-3"
                            {...props}
                          />
                        ),
                        h2: ({ node, ...props }) => (
                          <h3
                            className="text-xl font-semibold text-gray-800 mt-6 mb-3"
                            {...props}
                          />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul
                            className="list-disc pl-6 space-y-2 text-gray-700"
                            {...props}
                          />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="leading-relaxed" {...props} />
                        ),
                        p: ({ node, ...props }) => (
                          <p
                            className="text-gray-600 leading-relaxed my-3"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {product.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
