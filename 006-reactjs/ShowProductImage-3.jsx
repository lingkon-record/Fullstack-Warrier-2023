"use client"; // Mark this component as a client-side component

import React, { useState } from 'react';

const ShowProductImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-lg mx-auto py-8 px-6 bg-white rounded-lg shadow-xl text-center transition-transform transform hover:scale-105 duration-300">
      <button
        onClick={handleButtonClick}
        className="py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-colors mb-6 text-lg font-semibold"
      >
        {isVisible ? 'Hide Image' : 'Show Image'}
      </button>
      {isVisible && (
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://m.media-amazon.com/images/I/71JSM9kTEwS._AC_SL1500_.jpg"
            alt="Product"
            className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
        </div>
      )}
    </div>
  );
};

export default ShowProductImage;
