import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div>
      <div className="mb-6">
        <NavLink to={`/blog/${post.id}`}>
          <p className="text-2xl font-semibold"> {post.title}</p>
        </NavLink>
        <p className="text-gray-600">
          By <span className="text-blue-500">{post.author}</span> on{" "}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className="text-green-500">{post.category}</span>
          </NavLink>
        </p>
        <p className="text-gray-500">Posted on {post.date}</p>  
        <p className="mt-4">{post.content}</p>
        <div className="mt-2">
          {post.tags.map((tag, index) => (
            <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`} key={index}>
              <span className="inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm font-semibold mr-2 mt-2">
                {`#${tag}`}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
