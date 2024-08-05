// src/components/Preferences.js
"use client"; // Ensure this is treated as a client-side component

import React, { useState } from 'react';

const preferences = [
  {
    id: 1,
    name: 'Stylish Watch',
    image: 'https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg'
  },
  {
    id: 2,
    name: 'Smart Gadget',
    image: 'https://smartdeal.com.bd/public/uploads/all/Azu6hg0hiKh7fPNAKikWaJBTHqgLBdJY5WvhBqHs.jpg'
  },
  {
    id: 3,
    name: 'Stylish Watch',
    image: 'https://images-cdn.ubuy.co.in/654b8e16333d0d5c3130b3e8-lige-mens-watches-waterproof-stainless.jpg'
  },
  {
    id: 4,
    name: 'Smart Gadget',
    image: 'https://smartdeal.com.bd/public/uploads/all/Azu6hg0hiKh7fPNAKikWaJBTHqgLBdJY5WvhBqHs.jpg'
  }
];

const Preferences = () => {
  const [selectedPreference, setSelectedPreference] = useState(null);

  const handlePreferenceClick = (preference) => {
    setSelectedPreference(preference);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Preference</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {preferences.map((preference) => (
          <div
            key={preference.id}
            className={`relative cursor-pointer transition-transform transform hover:scale-105 duration-300 rounded-lg overflow-hidden ${selectedPreference?.id === preference.id ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handlePreferenceClick(preference)}
          >
            <img
              src={preference.image}
              alt={preference.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {preference.name}
            </div>
          </div>
        ))}
      </div>
      {selectedPreference && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Your Preference</h2>
          <img
            src={selectedPreference.image}
            alt={selectedPreference.name}
            className="w-1/2 mx-auto mb-4 rounded-lg"
          />
          <p className="text-lg font-medium">{selectedPreference.name}</p>
        </div>
      )}
    </div>
  );
};

export default Preferences;
