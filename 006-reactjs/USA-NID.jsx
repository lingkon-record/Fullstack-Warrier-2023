// src/components/IdCard.js

import React from 'react';

const IdCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center bg-blue-500 text-white p-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
          <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile" />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Rakib</h1>
          <p className="text-sm">ID: 1234-5678-9101</p>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-gray-700 font-bold">Date of Birth</p>
          <p className="text-gray-600">January 1, 1980</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700 font-bold">Address</p>
          <p className="text-gray-600">123 Main St, Anytown, USA</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700 font-bold">Nationality</p>
          <p className="text-gray-600">American</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-700 font-bold">Gender</p>
          <p className="text-gray-600">Male</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
