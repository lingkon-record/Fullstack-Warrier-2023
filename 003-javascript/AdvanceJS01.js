
// Create multiple arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 4, 6, 8, 10];
const array3 = [3, 6, 9, 12, 15];

// Create an array of objects to hold the arrays
const arrayObjects = [
  { name: 'Array 1', data: array1 },
  { name: 'Array 2', data: array2 },
  { name: 'Array 3', data: array3 },
];

// Define a filter function
function filterArray(arr, condition) {
  return arr.filter(item => condition(item));
}

// Example: Filter array1 to get even numbers
const evenNumbersArray1 = filterArray(arrayObjects[0].data, item => item % 2 === 0);

console.log('Even numbers in Array 1:', evenNumbersArray1);

// Example: Filter array2 to get numbers divisible by 3
const divisibleBy3Array2 = filterArray(arrayObjects[1].data, item => item % 3 === 0);

console.log('Numbers in Array 2 divisible by 3:', divisibleBy3Array2);





// find the last 10 largest numbers



// Sample array of numbers
const numbers = [34, 12, 56, 78, 98, 45, 67, 89, 23, 9, 101, 45, 76, 122, 33, 45, 67, 56, 34, 21, 55, 90];

// Sort the array in descending order
numbers.sort((a, b) => b - a);

// Get the last 10 largest numbers
const last10Largest = numbers.slice(0, 10);

console.log('Last 10 largest numbers:', last10Largest);





// Top 2 student of whole school


// Sample data of students from 5 different classrooms
const classroomData = [
  {
    classroom: 'Class A',
    students: [
      { name: 'Alice Johnson', marks: 95 },
      { name: 'Bob Smith', marks: 88 },
      { name: 'Charlie Brown', marks: 91 },
      { name: 'David Lee', marks: 98 },
      // Add more students for Class A
    ]
  },
  {
    classroom: 'Class B',
    students: [
      { name: 'Emma Davis', marks: 91 },
      { name: 'Frank Wilson', marks: 78 },
      { name: 'Grace Taylor', marks: 96 },
      { name: 'Henry Anderson', marks: 89 },
      // Add more students for Class B
    ] }
  // Add data for Class C, D, and E
];

// Combine all students from different classrooms into a single array
const allStudents = classroomData.reduce((all, classroom) => all.concat(classroom.students), []);

// Sort the students by marks in descending order
allStudents.sort((a, b) => b.marks - a.marks);

// Get the first 10 best students
const top10Students = allStudents.slice(0, 2);

// Display the top 2 students
console.log('Top 2 best students:');
top10Students.forEach((student, index) => {
  console.log(`${index + 1}. Name: ${student.name}, Marks: ${student.marks}`);
});



            
