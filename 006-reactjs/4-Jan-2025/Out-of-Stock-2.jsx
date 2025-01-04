"use client";

import React from "react";

function App() {
  const products = [
    {
      image:
        "https://www.americanoceans.org/wp-content/uploads/2023/06/bottom-of-the-ocean-scaled.jpeg",
      text: "OCEAN",
      price: "$20",
      stock: true,
      category: "Nature",
    },
    {
      image:
        "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
      text: "FRUITS",
      price: "$15",
      stock: true,
      category: "Food",
    },
    {
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "BURGER",
      price: "$10",
      stock: false,
      category: "Fast Food",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s",
      text: "SNACK",
      price: "$5",
      stock: true,
      category: "Snacks",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-36 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-3">{product.text}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-green-600 font-semibold">{product.price}</p>
            <button
              className={`mt-3 px-4 py-2 rounded-md text-white font-bold ${
                product.stock ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!product.stock}
            >
              {product.stock ? "Order Now" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
