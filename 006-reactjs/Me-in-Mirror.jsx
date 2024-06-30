import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="relative w-80 h-96 border-8 border-gray-700 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
        <img
          src="https://img.freepik.com/premium-vector/vibrant-pop-art-gaming-soldier-military-hero-gaming-soldiers-mascot-style_969393-855.jpg"
          alt="Mirror"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold text-gray-700">
          "May your path be filled with courage and honor."
        </p>
      </div>
    </div>
  );
}

export default App;
