import React from 'react';
import Header from '../component/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import Blog from '../component/Blog';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <h2 className="text-2xl font-semibold mt-4">Blogs Tagged</h2>
        <span className="text-lg text-gray-600">#{tag}</span>
        <div className="mt-8">
          <Blog />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TagPage;
