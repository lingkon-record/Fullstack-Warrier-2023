 const students = [
  { name: 'Ali', age: 20, roll: 101, result: 3.65 },
  { name: 'Sara', age: 21, roll: 102, result: 3.80 },
  { name: 'Ahmed', age: 22, roll: 103, result: 3.55 },
  { name: 'Fatima', age: 20, roll: 104, result: 3.45 },
  { name: 'Hassan', age: 23, roll: 105, result: 3.50 },
  { name: 'Zainab', age: 22, roll: 106, result: 3.70 },
  { name: 'Bilal', age: 21, roll: 107, result: 3.90 },
];

const resultInRange = students
  .filter(student => student.result >= 3.50 && student.result <= 3.70)
  .map(student => ({ name: student.name, result: student.result }));

console.log(resultInRange);
