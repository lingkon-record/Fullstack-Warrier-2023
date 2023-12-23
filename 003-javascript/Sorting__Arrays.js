 // Example array of student scores
let studentScores = [75, 92, 85, 88, 67];

// Method 1: Sorting in ascending order using sort()
let ascendingOrder = studentScores.slice().sort((a, b) => a - b);
console.log("Ascending Order:", ascendingOrder);

// Method 2: Sorting in descending order using sort() and reverse()
let descendingOrder = studentScores.slice().sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder);

// Method 3: Sorting without modifying the original array using slice() and sort()
console.log("Original Array:", studentScores);
console.log("Sorted Array without modifying original:", studentScores.slice().sort((a, b) => a - b));

// Method 4: Sorting objects based on a specific property (e.g., student objects with scores)
let students = [
  { name: "Ali", score: 75 },
  { name: "Sara", score: 92 },
  { name: "Ahmed", score: 85 }
];

let sortByScore = students.slice().sort((a, b) => b.score - a.score);
console.log("Students Sorted by Score:", sortByScore);

// Method 5: Custom sorting logic (e.g., sorting by the last digit of each number)
let customSorting = studentScores.slice().sort((a, b) => a % 10 - b % 10);
console.log("Custom Sorting by Last Digit:", customSorting);
