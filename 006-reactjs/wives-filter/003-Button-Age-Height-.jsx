import React, { useState } from 'react';

const namesData = [
  { name: 'Aisha', height: 5.2, age: 12 },
  { name: 'Fatima', height: 5.3, age: 15 },
  { name: 'Zara', height: 5.7, age: 17 },
  { name: 'Maira', height: 5.1, age: 10 },
  { name: 'Sana', height: 5.4, age: 14 },
  { name: 'Hina', height: 5.5, age: 13 },
  { name: 'Rabia', height: 5.3, age: 16 },
  { name: 'Saba', height: 5.2, age: 11 },
  { name: 'Nida', height: 5.6, age: 18 },
  { name: 'Anum', height: 5.8, age: 19 },
];

function NameList() {
  const [sortedNames, setSortedNames] = useState([]);
  const [sortType, setSortType] = useState('');

  const handleSortByHeight = () => {
    const sorted = [...namesData].sort((a, b) => b.height - a.height);
    setSortedNames(sorted);
    setSortType('height');
  };

  const handleSortByAge = () => {
    const sorted = [...namesData].sort((a, b) => b.age - a.age);
    setSortedNames(sorted);
    setSortType('age');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Pakistani Girls List</h1>
      <div className="flex justify-between mb-6">
        <button
          onClick={handleSortByHeight}
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Height
        </button>
        <button
          onClick={handleSortByAge}
          className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
        >
          Age
        </button>
      </div>
      {sortedNames.length > 0 && (
        <>
          <p className="mb-4 text-md text-gray-600">
            Total Girls: <span className="font-semibold">{namesData.length}</span> | Showing based on <span className="font-semibold">{sortType === 'height' ? 'Height' : 'Age'}</span>
          </p>
          <ul className="list-decimal pl-5 space-y-2">
            {sortedNames.map((name, index) => (
              <li key={index} className="text-gray-700">
                {name.name} - {sortType === 'height' ? `${name.height} feet` : `${name.age} years old`}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default NameList;
