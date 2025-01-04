"use client"

import React from "react";

function App() {
  const products = [
    {
      image:
        "https://www.americanoceans.org/wp-content/uploads/2023/06/bottom-of-the-ocean-scaled.jpeg",
      text: "OCEAN",
    },
    {
      image:
        "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
      text: "FRUITS",
    },
    {
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "BURGER",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s",
      text: "FUCKA",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative w-full h-64 flex flex-col items-center justify-center group"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center rounded-lg">
              <h2 className="text-white text-3xl font-extrabold">{product.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
