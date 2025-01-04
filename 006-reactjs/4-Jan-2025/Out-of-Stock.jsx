"use client";

import React from "react";

function App() {
  const products = [
    {
      image:
        "https://www.americanoceans.org/wp-content/uploads/2023/06/bottom-of-the-ocean-scaled.jpeg",
      text: "OCEAN",
      price: "$20",
      stock: "In Stock",
      category: "Nature",
    },
    {
      image:
        "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
      text: "FRUITS",
      price: "$15",
      stock: "In Stock",
      category: "Food",
    },
    {
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "BURGER",
      price: "$10",
      stock: "Out of Stock",
      category: "Fast Food",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s",
      text: "FUCKA",
      price: "$5",
      stock: "In Stock",
      category: "Snacks",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative w-full h-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h2 className="text-lg font-bold">{product.text}</h2>
              <p className="text-sm text-gray-500">Category: {product.category}</p>
              <p className="text-lg font-semibold text-green-600">{product.price}</p>
              <p
                className={`text-sm font-medium ${
                  product.stock === "In Stock" ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.stock}
              </p>
            </div>

            {/* Order Button */}
            <button
              className={`mt-4 px-4 py-2 rounded-lg text-white font-bold ${
                product.stock === "In Stock"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={product.stock !== "In Stock"}
            >
              {product.stock === "In Stock" ? "Order Now" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
