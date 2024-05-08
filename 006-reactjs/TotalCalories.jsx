import React from 'react';

const vegetables = [
  { name: "Carrot", calories: 41 },
  { name: "Broccoli", calories: 34 },
  { name: "Spinach", calories: 23 },
  // Add more vegetable objects here
];

const TotalCalories = () => {
  const totalCalories = vegetables.reduce((total, vegetable) => total + vegetable.calories, 0);

  return (
    <div>
      <h2>Total calories of all vegetables:</h2>
      <p>{totalCalories}</p>
    </div>
  );
}

export default TotalCalories;
