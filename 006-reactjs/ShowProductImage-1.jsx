"use client"; // Mark this component as a client-side component

import React, { useState } from 'react';

const ShowProductImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-md mx-auto py-8 px-4 bg-white rounded-lg shadow-lg text-center">
      <button
        onClick={handleButtonClick}
        className="py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors mb-4"
      >
        {isVisible ? 'Hide Product Image' : 'Show Product Image'}
      </button>
      {isVisible && (
        <img
          src="https://m.media-amazon.com/images/I/71JSM9kTEwS._AC_SL1500_.jpg"
          alt="Product"
          className="w-full h-auto rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default ShowProductImage;
