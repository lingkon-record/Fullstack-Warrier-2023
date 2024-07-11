// src/components/SortingApp.js

import React, { useState } from 'react';

const SortingApp = () => {
  const data = [
    { name: 'Alice', age: 25, city: 'New York', netWorth: 50000 },
    { name: 'Bob', age: 30, city: 'Los Angeles', netWorth: 70000 },
    { name: 'Charlie', age: 22, city: 'Chicago', netWorth: 5665000 },
    { name: 'David', age: 35, city: 'Houston', netWorth: 90000 },
    { name: 'Eve', age: 28, city: 'Phoenix', netWorth: 60000 },
    // Add more data as needed
  ];

  const [sortCriteria, setSortCriteria] = useState('age');
  const [sortedData, setSortedData] = useState([]);

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    const sorted = [...data].sort((a, b) => b[sortCriteria] - a[sortCriteria]);
    setSortedData(sorted);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Data Sorting App</h1>
        <form onSubmit={handleSortSubmit} className="flex flex-col items-center mb-6">
          <label htmlFor="sortCriteria" className="mb-2 text-lg">Sort by:</label>
          <select 
            id="sortCriteria" 
            value={sortCriteria} 
            onChange={handleSortChange} 
            className="p-3 mb-4 border rounded-lg w-full text-center"
          >
            <option value="age">Age</option>
            <option value="netWorth">Net Worth</option>
          </select>
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-lg w-full"
          >
            Sort
          </button>
        </form>
        {sortedData.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">Sorted Data</h2>
            <ul className="space-y-4">
              {sortedData.map((item, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <p className="text-lg"><strong>Name:</strong> {item.name}</p>
                  <p className="text-lg"><strong>Age:</strong> {item.age}</p>
                  <p className="text-lg"><strong>City:</strong> {item.city}</p>
                  <p className="text-lg"><strong>Net Worth:</strong> ${item.netWorth}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortingApp;
