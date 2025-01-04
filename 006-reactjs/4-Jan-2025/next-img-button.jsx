"use client"








import React, { useState, useEffect } from 'react';

// Images data
const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    alt: 'Fresh Salad',
  },
  {
    id: 2,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGnAPWCpa7cRiRop_FCgv7_i0gu5z-MxtKQ&s',
    alt: 'Fried Chicken',
  },
  {
    id: 3,
    src: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574',
    alt: 'Spaghetti Carbonara',
  },
  {
    id: 4,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s',
    alt: 'Fried Chicken',
  },
  {
    id: 5,
    src: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg',
    alt: 'Fruits & Vegetables',
  },
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Optional: Auto-change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(changeImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="relative w-full max-w-3xl">
        {/* Image Display */}
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {/* Image Navigation Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={changeImage}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Next Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

