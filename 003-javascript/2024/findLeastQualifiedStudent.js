// Sample data structure representing students and their marks in multiple classes
const schoolData = [
  { class: 'MathClass', student: 'John Smith', marks: 92 },
  { class: 'EnglishClass', student: 'Emily Johnson', marks: 88 },
  { class: 'ScienceClass', student: 'Daniel Brown', marks: 95 },
  // ... add more student data for different classes
];

// Function to find the least qualified student
function findLeastQualifiedStudent(data) {
  let leastQualifiedStudent = null;
  let minMarks = Infinity;

  for (const student of data) {
    if (student.marks < minMarks) {
      minMarks = student.marks;
      leastQualifiedStudent = student;
    }
  }

  return leastQualifiedStudent;
}

// Call the function with the school data
const leastQualifiedStudent = findLeastQualifiedStudent(schoolData);

// Display the result
console.log('The least qualified student in', leastQualifiedStudent.class, 'at', 'Our School:', leastQualifiedStudent.student, 'with marks:', leastQualifiedStudent.marks)
