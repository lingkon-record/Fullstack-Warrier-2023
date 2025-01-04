"use client"


import React from "react";

function App() {
  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      {/* Background Image */}
      <img
        src="https://www.americanoceans.org/wp-content/uploads/2023/06/bottom-of-the-ocean-scaled.jpeg"
        alt="Ocean"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bold Text */}
      <h1 className="text-white text-8xl font-extrabold drop-shadow-2xl z-10">
        OCEAN
      </h1>

      {/* Overlay (Optional for Better Contrast) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
    </div>
  );
}

export default App;
