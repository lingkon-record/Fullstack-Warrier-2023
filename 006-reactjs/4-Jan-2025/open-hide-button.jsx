"use client";
import React, { useState } from 'react';

function ProductCard() {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
      {/* Product Image */}
      <img 
        className="w-full h-64 object-cover rounded-t-2xl" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuEEGeq9tlvGvHQoubB7Ec0-nNCC18qBUWQ&s" 
        alt="Ice Cream" 
      />

      {/* Product Info */}
      <div className="px-6 py-4">
        <h3 className="text-2xl font-bold text-gray-800">Delicious Ice Cream</h3>
        <p className="text-lg text-gray-500">Price: <span className="font-semibold">$5.99</span></p>
      </div>

      {/* Order Button */}
      <div className="px-6 py-4">
        <button 
          onClick={handleClick} 
          className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
        >
          {showDetails ? 'Hide Details' : 'Order Now'}
        </button>
      </div>

      {/* Product Details */}
      {showDetails && (
        <div className="px-6 py-4 bg-gray-100 rounded-b-2xl">
          <h4 className="text-xl font-semibold text-gray-700">Ice Cream Details</h4>
          <p className="text-gray-600 mt-2">Our ice cream is crafted with the finest organic ingredients, offering a rich and creamy experience. Indulge in a variety of flavors, all made fresh to perfection!</p>
          <p className="text-gray-600 mt-2">It's perfect for any occasion, whether you're relaxing at home or celebrating a special moment!</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
