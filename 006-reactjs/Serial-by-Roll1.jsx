import React from 'react';

const Student = ({ data, serial }) => {
  const { name, roll, age, cgpa, city, university } = data;

  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-2">{serial}. {name}</h2>
      <p><strong>Roll:</strong> {roll}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>CGPA:</strong> {cgpa}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>University:</strong> {university}</p>
    </div>
  );
};

const App = () => {
  const students = [
    {
      name: "Alice Johnson",
      roll: 105,
      age: 20,
      cgpa: 3.8,
      city: "New York",
      university: "New York University"
    },
    {
      name: "Bob Smith",
      roll: 102,
      age: 21,
      cgpa: 3.5,
      city: "Los Angeles",
      university: "University of California, Los Angeles"
    },
    // Add more students as needed
  ];

  // Sort students by roll number
  const sortedStudents = students.sort((a, b) => a.roll - b.roll);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Information</h1>
      {sortedStudents.map((student, index) => (
        <Student key={index} data={student} serial={index + 1} />
      ))}
    </div>
  );
};

export default App;
