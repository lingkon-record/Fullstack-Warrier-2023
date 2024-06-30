import React from 'react';

const martyrs = Array(12).fill({
  name: 'Brave Martyr',
  imageUrl: 'https://img.freepik.com/premium-vector/vibrant-pop-art-gaming-soldier-military-hero-gaming-soldiers-mascot-style_969393-855.jpg'
});

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Martyrs List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {martyrs.map((martyr, index) => (
          <div key={index} className="relative border-8 border-gray-700 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
            <img
              src={martyr.imageUrl}
              alt={martyr.name}
              className="w-full h-48 md:h-64 lg:h-80 object-cover grayscale"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {martyr.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
