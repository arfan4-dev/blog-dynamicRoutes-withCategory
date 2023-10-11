import React, { useContext, useState } from 'react';
import { ContextProvider } from '../context/AppContext';

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState(null);
//   const {  } = useContext(ContextProvider);

  const handleSearch = () => {
    onSearch(query);
  };


  return (
    <div className="flex items-center space-x-2 ml-20 mt-5">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded border focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
