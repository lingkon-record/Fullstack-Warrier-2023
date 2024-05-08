 const vegetables = [
  { name: "Carrot", calories: 41 },
  { name: "Broccoli", calories: 34 },
  { name: "Spinach", calories: 23 },
  // Add more vegetable objects here
];

let totalCalories = 0;

for (let i = 0; i < vegetables.length; i++) {
  totalCalories += vegetables[i].calories;
}

console.log("Total calories of all vegetables:", totalCalories);
