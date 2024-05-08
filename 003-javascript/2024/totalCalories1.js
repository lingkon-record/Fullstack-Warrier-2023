const vegetables = [
  { name: "Carrot", calories: 41 },
  { name: "Broccoli", calories: 34 },
  { name: "Spinach", calories: 23 },
  // Add more vegetable objects here
];

const totalCalories = vegetables.reduce((total, vegetable) => total + vegetable.calories, 0);

console.log("Total calories of all vegetables:", totalCalories);
