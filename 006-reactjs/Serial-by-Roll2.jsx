import React from 'react';

const Student = ({ data, serial }) => (
  <div className="p-4 border border-gray-300 rounded-lg mb-4">
    <h2 className="text-xl font-semibold mb-2">{serial}. {data.name}</h2>
    <p><strong>Roll:</strong> {data.roll}</p>
    <p><strong>Age:</strong> {data.age}</p>
    <p><strong>CGPA:</strong> {data.cgpa}</p>
    <p><strong>City:</strong> {data.city}</p>
    <p><strong>University:</strong> {data.university}</p>
  </div>
);

const App = () => {
  const students = [
    { name: "Alice Johnson", roll: 105, age: 20, cgpa: 3.8, city: "New York", university: "New York University" },
    { name: "Bob Smith", roll: 102, age: 21, cgpa: 3.5, city: "Los Angeles", university: "University of California, Los Angeles" },
    // Add more students as needed
  ].sort((a, b) => a.roll - b.roll);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Information</h1>
      {students.map((student, index) => (
        <Student key={student.roll} data={student} serial={index + 1} />
      ))}
    </div>
  );
};

export default App;
