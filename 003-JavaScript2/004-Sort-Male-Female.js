const males = [
  { name: 'Ahmed', age: 25 },
  { name: 'Ali', age: 30 },
  { name: 'Usman', age: 22 },
  { name: 'Bilal', age: 27 }
];

const females = [
  { name: 'Aisha', age: 23 },
  { name: 'Fatima', age: 28 },
  { name: 'Sara', age: 24 },
  { name: 'Zainab', age: 21 }
];

// Create new sorted arrays without mutating the original ones
const sortedMales = [...males].sort((a, b) => a.age - b.age);
const sortedFemales = [...females].sort((a, b) => a.age - b.age);

console.log('Sorted males:', sortedMales);
console.log('Sorted females:', sortedFemales);
