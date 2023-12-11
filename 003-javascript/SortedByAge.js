// Define an extended list of Indian students with their age
const indianStudents = [
  { name: 'Choto Kapoor', age: 10 },
  { name: 'Amit Singh', age: 24 },
  { name: 'Preeti Verma', age: 24 },
  { name: 'Rahul Sharma', age: 22 },
  { name: 'Anjali Gupta', age: 22 },
  { name: 'Kiran Kumar', age: 23 },
  { name: 'Sneha Bhatia', age: 23 },
  { name: 'Neha Desai', age: 21 },
  { name: 'Arjun Joshi', age: 21 },
  { name: 'Priya Patel', age: 20 },
  { name: 'Raj Malhotra', age: 20 },
  { name: 'Deepika Reddy', age: 19 },
  // Add more students with their respective ages
];

// Sort the array based on age in descending order
indianStudents.sort((a, b) => b.age - a.age);

// Display the sorted list
console.log('List of Indian students sorted from senior to junior by age:');
indianStudents.forEach(student => {
  console.log(`${student.name}: ${student.age} years old`);
});
