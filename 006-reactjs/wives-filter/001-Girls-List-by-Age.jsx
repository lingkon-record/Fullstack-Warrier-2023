import React, { useState } from 'react';

const namesData = [
  { name: 'Aisha', age: 20 },
  { name: 'Fatima', age: 15 },
  { name: 'Zara', age: 17 },
  { name: 'Maira', age: 10 },
  { name: 'Sana', age: 14 },
  { name: 'Hina', age: 26 },
  { name: 'Rabia', age: 16 },
  { name: 'Saba', age: 11 },
  { name: 'Nida', age: 18 },
  { name: 'Anum', age: 24 },
];

function NameFilter() {
  const [startAge, setStartAge] = useState('');
  const [endAge, setEndAge] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleFilter = () => {
    
    const start = parseInt(startAge, 10);
    const end = parseInt(endAge, 10);
    
    if (!isNaN(start) && !isNaN(end)) {
      const result = namesData.filter(name => name.age >= start && name.age <= end);
      setFilteredNames(result);
    } else {
      setFilteredNames([]);
    }
    setShowResult(true);
  };

  return (
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6"> Girls Filter by Age</h1>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Start Age:</label>
        <input
          type="number"
          value={startAge}
          onChange={(e) => setStartAge(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">End Age:</label>
        
        <input
          type="number"
          value={endAge}
          onChange={(e) => setEndAge(e.target.value)}
          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring focus:border-blue-300"
        />
        
      </div>
     
      <button
        onClick={handleFilter}
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Show Result
      </button>
      
      {showResult && (
        <div className="mt-6">
         
          <h2 className="mb-4 text-xl font-bold">Filtered Names:</h2>
          <p className="mb-4 text-sm">
            Total Girls: {namesData.length} | Filtered Girls: {filteredNames.length}
          </p>
         
          <ul>
            {filteredNames.map((name, index) => (
              <li key={index} className="py-1">
                {name.name} ({name.age} years old)
              </li>
            ))}
          </ul>
          
        </div>
      )}

      
    </div>
  );
}

export default NameFilter;
