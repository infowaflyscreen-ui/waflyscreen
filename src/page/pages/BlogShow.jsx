import React from "react";
import { useParams } from "react-router-dom";
import { newsItems } from "../../assets/newsitem";

function BlogShow() {
  const { id } = useParams();
  const blog = newsItems.find((item) => item.id === parseInt(id));

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto p-6 pt-28">
        <h2 className="text-2xl font-bold text-red-600">Blog Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
      {/* Blog Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-[#122632] mb-4">{blog.title}</h1>

      {/* Author and Date */}
      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6 text-sm sm:text-base">
        <span>By <strong>{blog.author}</strong></span>
        <span>{blog.date}</span>
        <span>{blog.comments} Comment{blog.comments !== 1 ? "s" : ""}</span>
      </div>

      {/* Blog Image */}
      <div className="mb-6">
        <img src={blog.image} alt={blog.title} className="w-full rounded-xl shadow-md" />
      </div>

      {/* Blog Content */}
      <div className="text-gray-800 text-base sm:text-lg leading-relaxed space-y-4">
        {blog.description.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#122632] text-white rounded-lg hover:bg-[#1a3a4a] transition-colors"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default BlogShow;
