// import { useLocation } from "react-router-dom";

// export default function ServicePage() {
//   const location = useLocation();
//   const { product } = location.state || {};

//   if (!product) return <h2>No product data found</h2>;

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4 text-center">
//       <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded-xl mb-6" />
//       <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//       <p className="text-lg text-gray-700">{product.description}</p>
//     </div>
//   );
// }

// import { useLocation } from "react-router-dom";
// import { products } from "../../assets/service";

// export default function ServicePage() {
//   const location = useLocation();
//   const { product } = location.state || { product: products[0] }; // Default to first product if no state

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4 text-center">
//       <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded-xl mb-6" />
//       <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//       <p className="text-lg text-gray-700">{product.description}</p>
//     </div>
//   );
// }

import { useLocation } from "react-router-dom";
import { products } from "../../assets/service";
import ReactMarkdown from "react-markdown";

export default function ServicePage() {
  const location = useLocation();
  const { product } = location.state || { product: products[0] }; // Default to first product if no state

  // Split description into paragraphs for better readability
  const descriptionParagraphs = product.description.split("\n\n");

  return (
    <>
      <div className="relative w-full h-[80vh] font-Marcellus">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover   shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t   to-transparent  "></div>
        <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white drop-shadow-lg ">
          {product.title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-[#122632] font-Josefin ">
        {/* Hero Section */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description Section */}
          {/* <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                About {product.title}
              </h2>
              {descriptionParagraphs.map((paragraph, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    {index === 0 ? "Overview" : `Feature ${index}`}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{paragraph}</p>
                </div>
              ))}
            </div> */}

          {/* <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold  mb-6 font-Marcellus">
              About {product.title}
            </h2>
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h3
                    className="text-xl font-medium   mt-6 mb-2  "
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h3 className="text-xl font-medium   mt-6 mb-2" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="list-disc pl-5 my-2 text-gray-700 "
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li className="my-1 text-gray-700 " {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="my-2 text-gray-700 " {...props} />
                ),
              }}
            >
              {product.description}
            </ReactMarkdown>
          </div> */}
              <div className="lg:col-span-2">
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
          {/* Sidebar with Secondary Image and Highlights */}
          <div className="lg:col-span-1 text-[#122632] font-Josefin">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold  text-[#122632] mb-4">
                Key Highlights
              </h2>
              <ul className="space-y-3  ">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-800 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Premium quality materials
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-800 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Easy installation and maintenance
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-800 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Customizable designs
                </li>
              </ul>
              {/* Secondary Image */}
              <div className="mt-6">
                <img
                  src={product.img1} // Replace with a secondary image if available
                  alt={`${product.title} secondary`}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
                <p className="text-sm text-[#6b7881e6] mt-2 text-center">
                  {product.title} in action
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Quote for {product.title}
        </a>
      </div> */}
      </div>
    </>
  );
}
