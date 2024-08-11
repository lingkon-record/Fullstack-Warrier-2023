import React from 'react';

const foodArray = [
  { name: "Apple", weight: "100g", price: 1.5, expiryDate: "2025-03-30" },
  { name: "Banana", weight: "120g", price: 2, expiryDate: "2024-03-31" },
  { name: "Orange", weight: "150g", price: 1.8, expiryDate: "2024-03-28" },
  { name: "Grapes", weight: "200g", price: 3.5, expiryDate: "2024-03-29" },
  { name: "Strawberry", weight: "50g", price: 2.2, expiryDate: "2024-03-25" },
  { name: "Pineapple", weight: "500g", price: 4, expiryDate: "2024-03-30" },
  { name: "Kiwi", weight: "80g", price: 1.7, expiryDate: "2024-03-27" },
  { name: "Mango", weight: "200g", price: 2.5, expiryDate: "2024-03-29" },
  { name: "Peach", weight: "120g", price: 2.3, expiryDate: "2024-03-26" },
  { name: "Watermelon", weight: "1kg", price: 5, expiryDate: "2024-09-28" }
];

function getExpiredFoods(foods) {
  const today = new Date();
  return foods.filter(food => new Date(food.expiryDate) < today);
}

const ExpiredFoodList = () => {
  const expiredFoods = getExpiredFoods(foodArray);

  return (

    <div className="max-w-7xl mx-auto p-8">
    <h1 className="text-4xl font-extrabold mb-12 text-center text-green-600">Exclusive Products</h1>
    {expiredFoods.length === 0 ? (
      <p className="text-gray-700 text-center text-lg">No products available at the moment.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {expiredFoods.map((food, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            {/* <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img src={food.imageUrl} alt={food.name} className="object-cover h-full w-full" />
            </div> */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{food.name}</h2>
              <p className="text-gray-600 mb-2">Weight: {food.weight}</p>
              <p className="text-gray-600 mb-2">Price: ${food.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-2">Expired on: {new Date(food.expiryDate).toLocaleDateString()}</p>
              <button className="absolute bottom-4 left-4 right-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition-colors">Details</button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
  

  

  );
};

export default ExpiredFoodList;
