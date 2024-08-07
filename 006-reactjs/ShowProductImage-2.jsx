"use client"; // Mark this component as a client-side component

import React, { useState } from 'react';

const ShowProductImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-md mx-auto py-8 px-4 bg-white rounded-lg shadow-lg text-center md:py-12 md:px-8 transition-transform transform hover:scale-105 duration-300">
      <button
        onClick={handleButtonClick}
        className="py-2 px-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-blue-700 transition-colors mb-4 text-lg font-semibold"
      >
        {isVisible ? 'Hide Product Image' : 'Show Product Image'}
      </button>
      {isVisible && (
        <div className="relative">
          <img
            src="https://m.media-amazon.com/images/I/71JSM9kTEwS._AC_SL1500_.jpg"
            alt="Product"
            className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
        </div>
      )}
    </div>
  );
};

export default ShowProductImage;
