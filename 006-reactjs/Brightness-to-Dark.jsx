"use client"
import { useState } from 'react';

const CoverPhoto = () => {
  const [brightness, setBrightness] = useState(100); // Default brightness is 100%

  const toggleBrightness = () => {
    setBrightness(brightness === 100 ? 50 : 100); // Toggle between 100% and 50% brightness
  };

  return (
    <div className="relative">
      <div className={`w-full h-64 bg-cover bg-center transition-all duration-500`} 
        style={{ backgroundImage: 'url(https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/horizontal-wiki_ver_1.png)', filter: `brightness(${brightness}%)` }}>
      </div>
      <button 
        onClick={toggleBrightness} 
        className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none">
        Brightness to Dark
      </button>
    </div>
  );
};

export default CoverPhoto;
