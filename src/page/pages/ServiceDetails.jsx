import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../../assets/newsitem";
import ReactMarkdown from "react-markdown";

function BlogShow() {
  const { id } = useParams();
  const blog = newsItems.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-32"> {/* Offset for header */}
        <h2 className="text-2xl font-bold text-red-600">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 pt-32 pb-16 px-6 md:px-12 lg:px-20 min-h-screen">
      {/* pt-32 gives spacing from top so content won't be hidden behind header */}

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-[#122632] text-white rounded-lg hover:bg-[#1a3a4a] transition-colors"
          >
            ← Back
          </button>
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#122632] mb-6 font-Marcellus">
          {blog.title}
        </h1>

        {/* Author, Date, Comments */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-10 text-sm sm:text-base">
          <span>By <strong>{blog.author}</strong></span>
          <span>{blog.date}</span>
          <span>{blog.comments} Comment{blog.comments !== 1 ? "s" : ""}</span>
        </div>

        {/* Blog Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-md">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-gray max-w-none font-Josefin text-gray-700">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="my-3 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 space-y-2" {...props} />
              ),
              li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
            }}
          >
            {blog.description}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}

export default BlogShow;
