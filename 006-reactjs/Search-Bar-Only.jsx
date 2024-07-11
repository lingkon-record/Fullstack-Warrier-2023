// src/components/SearchHeader.js

import React from 'react';

const SearchHeader = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-center">
      <div className="w-full max-w-3xl">
        <input 
          type="text" 
          className="w-full p-2 rounded-lg border border-blue-300" 
          placeholder="Search..." 
        />
      </div>
    </header>
  );
};

export default SearchHeader;
