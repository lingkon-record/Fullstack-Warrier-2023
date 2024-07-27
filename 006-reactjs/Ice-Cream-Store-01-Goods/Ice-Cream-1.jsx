import React from 'react';

const IceCreamOrder = () => {
  const iceCreams = [
    {
      name: 'Vanilla Ice Cream with Strawberry Sauce',
      imageUrl: 'https://cookingwithcarlee.com/wp-content/uploads/2015/07/vanilla-ice-cream-with-strawberry-sauce.jpg.webp',
      description: 'Delicious vanilla ice cream topped with fresh strawberry sauce.',
    },
    {
      name: 'Homemade Ice Cream',
      imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg',
      description: 'Creamy homemade ice cream made with love and fresh ingredients.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-pink-600">Order Your Favorite Ice Cream</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {iceCreams.map((iceCream, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="h-60 bg-gray-200 flex items-center justify-center">
              <img src={iceCream.imageUrl} alt={iceCream.name} className="object-cover h-full w-full" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{iceCream.name}</h2>
              <p className="text-gray-600 mb-4">{iceCream.description}</p>
              <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-500 transition-colors">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamOrder;
