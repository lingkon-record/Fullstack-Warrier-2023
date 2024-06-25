import React from 'react';

const namesData = [
  { name: 'Aisha', height: 5.2 },
  { name: 'Fatima', height: 5.3 },
  { name: 'Zara', height: 5.7 },
  { name: 'Maira', height: 5.1 },
  { name: 'Sana', height: 5.4 },
  { name: 'Hina', height: 5.5 },
  { name: 'Rabia', height: 5.3 },
  { name: 'Saba', height: 5.2 },
  { name: 'Nida', height: 5.6 },
  { name: 'Anum', height: 5.8 },
];

const sortedNames = namesData.sort((a, b) => b.height - a.height);

function NameList() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg border border-gray-300">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Pakistani Girls List by Height</h1>
      <p className="mb-4 text-md text-gray-600">
        Here is the list of girls sorted by height from highest to lowest.
      </p>
      <ul className="list-decimal pl-5 space-y-2">
        {sortedNames.map((name, index) => (
          <li key={index} className="text-gray-700">
            {name.name} ({name.height} feet)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
