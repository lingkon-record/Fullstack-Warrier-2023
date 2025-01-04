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
    {
      image:
        "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
      text: "FRUITS",
      price: "$15",
      stock: true,
      category: "Food",
      description: "Freshly picked fruits to give you a burst of energy.",
    },
    {
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text: "BURGER",
      price: "$10",
      stock: false,
      category: "Fast Food",
      description: "A delicious, mouth-watering burger that’ll make you crave for more.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s",
      text: "SNACK",
      price: "$5",
      stock: true,
      category: "Snacks",
      description: "Perfect for a quick bite to satisfy your snack cravings.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.text}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.text}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-lg text-green-600 font-bold">{product.price}</p>

              <p className="text-sm text-gray-700 mt-2">{product.description}</p>

              {/* Stock and Button */}
              <div className="mt-4">
                <p
                  className={`text-sm font-semibold ${
                    product.stock ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button
                  className={`mt-3 w-full py-2 rounded-lg text-white font-semibold ${
                    product.stock
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!product.stock}
                >
                  {product.stock ? "Order Now" : "Out of Stock"}
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
