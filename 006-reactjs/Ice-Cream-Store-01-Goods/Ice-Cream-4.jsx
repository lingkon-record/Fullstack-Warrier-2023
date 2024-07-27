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
      }
      
  ];

  return (

    <div className="max-w-6xl mx-auto p-12 bg-gray-100">
  <h1 className="text-5xl font-bold mb-12 text-center text-purple-700">Indulge in Your Favorite Ice Cream</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {iceCreams.map((iceCream, index) => (
      <div key={index} className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={iceCream.imageUrl} alt={iceCream.name} className="object-cover h-64 w-full group-hover:scale-110 transition-transform duration-300" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-700">{iceCream.name}</h2>
          <p className="mt-2 text-gray-700">{iceCream.description}</p>
          <span className="block mt-4 text-lg font-semibold text-purple-600">${iceCream.price}</span>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition-colors">Order Now</button>
        </div>
      </div>
    ))}
  </div>
</div>

 

  

  );
};

export default IceCreamOrder;
