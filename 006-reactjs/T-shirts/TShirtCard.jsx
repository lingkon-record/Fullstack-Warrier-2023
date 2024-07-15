import React from 'react';

const TShirtCard = ({ tshirt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={tshirt.imageUrl} alt={tshirt.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{tshirt.name}</h2>
        <p className="text-gray-600 mb-2">{tshirt.description}</p>
        <p className="text-xl font-bold">{tshirt.price}</p>
      </div>
    </div>
  );
};

export default TShirtCard;
