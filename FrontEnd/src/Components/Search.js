import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Invoke the onSearch callback with the search query
    onSearch(query);
  };

  return (
    <div className="my-4 flex justify-center">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
        
          onChange={(e) => { setQuery(e.target.value); handleSearch(e);}
          
          }
          className="rounded-l py-2 px-3 border-t border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:border-teal-500 focus:bg-white focus:ring focus:ring-teal-200"
        />
        <button
          type="submit"
          className="px-4 py-2 border border-teal-500 rounded-r bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
