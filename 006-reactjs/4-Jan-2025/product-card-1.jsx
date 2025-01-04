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
      description: "Explore the deep blue ocean, a world full of mystery and beauty.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-yellow-200 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-3xl border border-gray-200"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-48 object-cover rounded-t-3xl"
            />

            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-200">
                {product.text}
              </h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-lg text-green-600 font-semibold">{product.price}</p>

              <p className="text-sm text-gray-700 mt-2">{product.description}</p>

              <div className="mt-4">
                <button className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
