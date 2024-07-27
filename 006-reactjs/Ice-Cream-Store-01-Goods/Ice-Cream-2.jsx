import React from 'react';

const IceCreamOrder = () => {
  const iceCreams = [
    {
      name: 'Vanilla Ice Cream with Strawberry Sauce',
      imageUrl: 'https://cookingwithcarlee.com/wp-content/uploads/2015/07/vanilla-ice-cream-with-strawberry-sauce.jpg.webp',
      description: 'Delicious vanilla ice cream topped with fresh strawberry sauce.',
       price: "40"
    },
    {
      name: 'Homemade Ice Cream',
      imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/homemade-ice-cream.jpg',
      description: 'Creamy homemade ice cream made with love and fresh ingredients.',
      price: "50"
    },
    {
        name: 'Vanilla Ice Cream with Strawberry Sauce',
        imageUrl: 'https://cookingwithcarlee.com/wp-content/uploads/2015/07/vanilla-ice-cream-with-strawberry-sauce.jpg.webp',
        description: 'Delicious vanilla ice cream topped with fresh strawberry sauce.',
         price: "80"
      },
  ];

  return (
    <div className="max-w-6xl mx-auto p-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg">
  <h1 className="text-5xl font-extrabold mb-12 text-center text-white">Order Your Favorite Ice Cream</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {iceCreams.map((iceCream, index) => (
      <div key={index} className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
        <div className="relative">
          <img src={iceCream.imageUrl} alt={iceCream.name} className="object-cover h-64 w-full" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white w-full py-2 text-center">
            <h2 className="text-2xl font-bold">{iceCream.name}</h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">{iceCream.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">${iceCream.price}</span>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-500 transition-colors">Order Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  

  );
};

export default IceCreamOrder;
