import React, { useContext } from 'react';
import { ContextProvider } from '../context/AppContext';

const Footer = () => {
  const { page, totalPages, handlePageChange } = useContext(ContextProvider);

  return (
    <div className="flex items-center justify-between mt-4 ml-7 mr-7">
      <div>
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Previous
          </button>
        )}
      </div>

      <div className="bg-gray-200 rounded-md px-2 py-1">
        <p className="text-gray-600">
          <b>Page no.{page} of {totalPages}</b>  
        </p>
      </div>

      <div>
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
