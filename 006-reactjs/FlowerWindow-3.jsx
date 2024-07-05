import React from 'react';

const FlowerWindow = () => {
  const imageUrl = "https://images.pexels.com/photos/7849616/pexels-photo-7849616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Beautiful Flowers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-white rounded-t-full shadow-lg w-80 h-96 overflow-hidden relative">
            <img
              src={imageUrl}
              alt={`Flower ${index}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerWindow;
