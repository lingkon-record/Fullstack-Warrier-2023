import React from 'react';

const FlowerWindow = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-t-full shadow-lg w-80 h-80 overflow-hidden relative">
        <img
          src="https://images.pexels.com/photos/7849616/pexels-photo-7849616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Flower"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FlowerWindow;
