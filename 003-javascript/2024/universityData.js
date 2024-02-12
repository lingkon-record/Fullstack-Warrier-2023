// Sample data structure representing students and universities with marks
const studentData = [
  { name: 'Emma Thompson', marks: 88, universityId: 1 },
  { name: 'James Anderson', marks: 75, universityId: 2 },
  { name: 'Sophia Patel', marks: 92, universityId: 3 },
  { name: 'Liam Garcia', marks: 78, universityId: 1 },
  { name: 'Olivia Kim', marks: 85, universityId: 2 },
  // Add more student data
];

const universityData = [
  { id: 1, name: 'Harvard University', passingMarks: 80 },
  { id: 2, name: 'Stanford University', passingMarks: 75 },
  { id: 3, name: 'MIT', passingMarks: 90 },
  // Add more university data
];

// Function to confirm university based on marks
function confirmUniversity(student, universities) {
  const studentUniversity = universities.find(uni => uni.id === student.universityId);

  if (studentUniversity && student.marks >= studentUniversity.passingMarks) {
    return studentUniversity.name;
  } else {
    return 'Not Confirmed';
  }
}

// Display student and university names based on marks
for (const student of studentData) {
  const universityName = confirmUniversity(student, universityData);
  console.log(`${student.name} - ${universityName}`);
}
