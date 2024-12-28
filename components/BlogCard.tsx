"use client";
import React from "react";

interface Blog {
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">{blog.title}</h3>
      <p className="text-gray-700">{blog.description}</p>
      <a
        href={blog.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
