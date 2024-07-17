// src/components/EbookCard.js

import React from 'react';

const EbookCard = ({ title, author, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{author}</p>
        <p className="text-blue-600 font-semibold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default EbookCard;
