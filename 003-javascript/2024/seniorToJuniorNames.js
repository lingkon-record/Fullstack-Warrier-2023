// Sample array of girl objects
const girls = [
  { name: "Sophia", seniority: 3 },
  { name: "Olivia", seniority: 1 },
  { name: "Emma", seniority: 2 },
  // Add more girl objects as needed
];

// Sort the girls array based on seniority (ascending order)
girls.sort((a, b) => a.seniority - b.seniority);

// Reverse the array to get names from senior to junior
const seniorToJuniorNames = girls.map((girl) => girl.name).reverse();

console.log(seniorToJuniorNames);
