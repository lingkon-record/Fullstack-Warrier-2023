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
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Expired Foods</h1>
      {expiredFoods.length === 0 ? (
        <p className="text-gray-600">No expired foods.</p>
      ) : (
        <ul className="list-disc list-inside">
          {expiredFoods.map((food, index) => (
            <li key={index} className="text-red-600">
              {food.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpiredFoodList;
