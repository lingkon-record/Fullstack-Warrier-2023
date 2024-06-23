 const students = [
  { name: 'Ali', age: 20, roll: 101, result: 3.65, school: 'Dhaka College' },
  { name: 'Sara', age: 21, roll: 102, result: 3.80, school: 'Dhaka College' },
  { name: 'Ahmed', age: 22, roll: 103, result: 3.55, school: 'Chittagong College' },
  { name: 'Fatima', age: 20, roll: 104, result: 3.45, school: 'Chittagong College' },
  { name: 'Hassan', age: 23, roll: 105, result: 3.50, school: 'Rajshahi College' },
  { name: 'Zainab', age: 22, roll: 106, result: 3.70, school: 'Rajshahi College' },
  { name: 'Bilal', age: 21, roll: 107, result: 3.90, school: 'Comilla College' },
  { name: 'Nadia', age: 22, roll: 108, result: 3.95, school: 'Sylhet College' },
  { name: 'Rahim', age: 21, roll: 109, result: 3.60, school: 'Sylhet College' },
  { name: 'Karim', age: 20, roll: 110, result: 3.85, school: 'Khulna College' },
  { name: 'Laila', age: 21, roll: 111, result: 3.70, school: 'Khulna College' },
  { name: 'Mariam', age: 22, roll: 112, result: 3.75, school: 'Barisal College' },
  { name: 'Khalid', age: 23, roll: 113, result: 3.65, school: 'Barisal College' },
  { name: 'Nargis', age: 22, roll: 114, result: 3.50, school: 'Jessore College' },
  { name: 'Tariq', age: 21, roll: 115, result: 3.55, school: 'Jessore College' },
  { name: 'Ayesha', age: 20, roll: 116, result: 3.85, school: 'Mymensingh College' },
  { name: 'Asif', age: 21, roll: 117, result: 3.90, school: 'Mymensingh College' },
  { name: 'Farhana', age: 22, roll: 118, result: 3.95, school: 'Dinajpur College' },
  { name: 'Usman', age: 23, roll: 119, result: 3.60, school: 'Dinajpur College' },
  { name: 'Shamim', age: 22, roll: 120, result: 3.70, school: 'Feni College' }
];

const resultInRange = students
  .filter(student => student.result >= 3.50 && student.result <= 4.0);

const schoolGroups = resultInRange.reduce((acc, student) => {
  if (!acc[student.school]) {
    acc[student.school] = [];
  }
  acc[student.school].push({ name: student.name, result: student.result });
  return acc;
}, {});

for (const school in schoolGroups) {
  console.log(`School: ${school}`);
  console.log(`Total Students: ${schoolGroups[school].length}`);
  console.log('Students:');
  schoolGroups[school].forEach(student => {
    console.log(`  - ${student.name}: ${student.result}`);
  });
  console.log('');  // Add an empty line for better readability
}
