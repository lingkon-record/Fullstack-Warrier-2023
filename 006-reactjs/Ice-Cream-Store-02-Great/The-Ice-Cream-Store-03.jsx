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

    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
    <h1 className="text-6xl font-extrabold mb-16 text-center">Indulge in Your Favorite Ice Cream</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {iceCreams.map((iceCream, index) => (
        <div key={index} className="relative flex flex-col bg-gray-800 rounded-3xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-500">
          <div className="relative">
            <img src={iceCream.imageUrl} alt={iceCream.name} className="object-cover h-64 w-full transition-opacity duration-500 hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <h2 className="absolute bottom-4 left-4 text-4xl font-extrabold text-white bg-black bg-opacity-50 p-2 rounded-lg">{iceCream.name}</h2>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-gray-300 mb-4 text-lg">{iceCream.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-yellow-400">${iceCream.price}</span>
              <button className="py-2 px-6 bg-yellow-500 text-gray-800 rounded-full hover:bg-yellow-600 transition-colors text-lg font-semibold">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  


  

  );
};

export default IceCreamOrder;
