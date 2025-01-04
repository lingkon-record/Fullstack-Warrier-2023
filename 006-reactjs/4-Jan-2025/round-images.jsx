"use client"



import React from 'react';

function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      {/* Container for the image */}
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Round Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default App;


