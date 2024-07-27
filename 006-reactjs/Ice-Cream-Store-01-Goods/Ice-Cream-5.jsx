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
      {
        name: 'Vanilla Ice Cream with Strawberry Sauce',
        imageUrl: 'https://cookingwithcarlee.com/wp-content/uploads/2015/07/vanilla-ice-cream-with-strawberry-sauce.jpg.webp',
        description: 'Delicious vanilla ice cream topped with fresh strawberry sauce.',
         price: "80"
      }
      
  ];

  return (

    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-400 to-blue-500 text-white">
  <h1 className="text-6xl font-extrabold mb-16 text-center">Indulge in Your Favorite Ice Cream</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    {iceCreams.map((iceCream, index) => (
      <div key={index} className="relative flex flex-col bg-white text-gray-800 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-500">
        <img src={iceCream.imageUrl} alt={iceCream.name} className="object-cover h-48 w-full rounded-t-xl" />
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{iceCream.name}</h2>
            <p className="text-gray-600">{iceCream.description}</p>
          </div>
          <div className="mt-6">
            <span className="block text-xl font-semibold mb-4">${iceCream.price}</span>
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors">Order Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


 

  

  );
};

export default IceCreamOrder;
