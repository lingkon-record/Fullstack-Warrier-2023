// src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          My Website
        </div>
        <div className="w-full max-w-md">
          <input 
            type="text" 
            className="w-full p-2 rounded-lg border border-blue-300" 
            placeholder="Search..." 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
