// Sample student data with grades
const students = [
  { name: "Alice", grades: [90, 85, 88] },
  { name: "Bob", grades: [78, 92, 80] },
  { name: "Charlie", grades: [85, 79, 91] }
];

// Function to calculate the average grade for a student
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Loop through each student and calculate their average grade
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const averageGrade = calculateAverage(student.grades);
  console.log(`${student.name}'s average grade is: ${averageGrade}`);
}
