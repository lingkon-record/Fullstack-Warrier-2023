import React, { useState } from 'react';

// Sample data
const students = [
  { name: "Ahmed Hossain", college: "Dhaka University", cgpa: 3.75 },
  { name: "Sumaiya Akter", college: "BUET", cgpa: 3.80 },
  { name: "Lingkon", college: "BUET", cgpa: 3.49 },
  { name: "Limon", college: "BUET", cgpa: 4.0 },
  { name: "Roki", college: "BUET", cgpa: 4.01 },
  { name: "Rafiq Islam", college: "Dhaka University", cgpa: 3.60 },
  { name: "Mithila Rahman", college: "NSU", cgpa: 3.90 },
  { name: "Nadia Khan", college: "Dhaka University", cgpa: 3.50 },
  { name: "Tanvir Ahmed", college: "BUET", cgpa: 2.90 },
  { name: "Rumana Sultana", college: "Dhaka University", cgpa: 4.00 }
];

// Function to filter students by CGPA and college
const filterStudents = (students, minCgpa, maxCgpa, college) => {
  return students.filter(student => 
    student.cgpa >= minCgpa && 
    student.cgpa <= maxCgpa && 
    student.college === college
  );
};

const StudentFilter = () => {
  const [minCgpa, setMinCgpa] = useState(3.5);
  const [maxCgpa, setMaxCgpa] = useState(4.0);
  const [college, setCollege] = useState('BUET');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleFilter = (e) => {
    e.preventDefault();
    const result = filterStudents(students, minCgpa, maxCgpa, college);
    setFilteredStudents(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Filter Students</h1>
        <form onSubmit={handleFilter} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Min CGPA</label>
            <input 
              type="number" 
              step="0.01" 
              value={minCgpa} 
              onChange={(e) => setMinCgpa(parseFloat(e.target.value))} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max CGPA</label>
            <input 
              type="number" 
              step="0.01" 
              value={maxCgpa} 
              onChange={(e) => setMaxCgpa(parseFloat(e.target.value))} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">College</label>
            <select 
              value={college} 
              onChange={(e) => setCollege(e.target.value)} 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Dhaka University">Dhaka University</option>
              <option value="BUET">BUET</option>
              <option value="NSU">NSU</option>
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Filter
          </button>
        </form>
        <h2 className="text-xl font-bold mt-6 text-center text-indigo-600">Filtered Students</h2>
        <ul className="mt-4 space-y-2">
          {filteredStudents.map((student, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              {student.name} - {student.college} - {student.cgpa}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentFilter;
