import React, { useContext } from 'react';
import { ContextProvider } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blog = () => {
  const {isLoading, posts } = useContext(ContextProvider);
  console.log('err in blog',posts)
  return (
    <div className="container mx-auto p-4">
    {isLoading ? (
      <Spinner />
    ) : posts.length === 0 ? (
      <div className="text-center text-gray-600 text-xl">No Posts</div>
    ) : (
      <div className="mx-auto"> {/* Center the content */}
       {posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))} 
        </div>
    )}
  </div>
  );
};

export default Blog;
