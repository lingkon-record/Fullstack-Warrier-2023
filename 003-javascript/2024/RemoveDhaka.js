const students = [
  { name: 'Alice', district: 'Dhaka' },
  { name: 'Bob', district: 'Chittagong' },
  { name: 'Charlie', district: 'Rajshahi' },
  { name: 'David', district: 'Khulna' },
  { name: 'Eva', district: 'Barisal' },
  { name: 'Frank', district: 'Sylhet' },
  { name: 'Grace', district: 'Mymensingh' },
  { name: 'Henry', district: 'Dhaka' },
];

// Ignore students from Dhaka
const studentsWithoutDhaka = students.filter(student => student.district !== 'Dhaka');

// Display updated array
console.log('Students without Dhaka:', studentsWithoutDhaka);
