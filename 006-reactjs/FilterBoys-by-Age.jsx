// src/components/FilterBoysByAge.js

import React, { useState } from 'react';

const data = [
  { name: 'Rahim', age: 25, hometown: 'Dhaka' },
  { name: 'Karim', age: 30, hometown: 'Chittagong' },
  { name: 'Jamal', age: 22, hometown: 'Sylhet' },
  { name: 'Salam', age: 27, hometown: 'Khulna' },
  { name: 'Rafiq', age: 20, hometown: 'Rajshahi' },
  { name: 'Bashir', age: 35, hometown: 'Barishal' },
  { name: 'Jabbar', age: 26, hometown: 'Rangpur' },
  { name: 'Farid', age: 24, hometown: 'Comilla' },
  { name: 'Noman', age: 10, hometown: 'Mymensingh' },
  { name: 'Imran', age: 23, hometown: 'Jessore' },
];

const FilterBoysByAge = () => {
  const [startAge, setStartAge] = useState('');
  const [endAge, setEndAge] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = data.filter((boy) => boy.age >= startAge && boy.age <= endAge);
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Filter Boys by Age</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
          <label htmlFor="startAge" className="mb-2 text-lg">Start Age:</label>
          <input 
            type="number" 
            id="startAge" 
            value={startAge} 
            onChange={(e) => setStartAge(e.target.value)} 
            className="p-3 mb-4 border rounded-lg w-full text-center"
          />
          <label htmlFor="endAge" className="mb-2 text-lg">End Age:</label>
          <input 
            type="number" 
            id="endAge" 
            value={endAge} 
            onChange={(e) => setEndAge(e.target.value)} 
            className="p-3 mb-4 border rounded-lg w-full text-center"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
        {filteredData.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Filtered Boys</h2>
            <ul className="space-y-4">
              {filteredData.map((boy, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <p className="text-lg"><strong>Name:</strong> {boy.name}</p>
                  <p className="text-lg"><strong>Age:</strong> {boy.age}</p>
                  <p className="text-lg"><strong>Hometown:</strong> {boy.hometown}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBoysByAge;
