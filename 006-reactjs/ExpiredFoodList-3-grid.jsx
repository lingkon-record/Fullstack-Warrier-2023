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
    <div className="max-w-5xl mx-auto p-6">
  <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Expired Foods</h1>
  {expiredFoods.length === 0 ? (
    <p className="text-gray-600 text-center">No expired foods.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {expiredFoods.map((food, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-red-500">{food.name}</h2>
          <p className="text-sm text-gray-600 mt-2">Weight: {food.weight}</p>
          <p className="text-sm text-gray-600">Price: ${food.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600">Expired on: {new Date(food.expiryDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default ExpiredFoodList;
