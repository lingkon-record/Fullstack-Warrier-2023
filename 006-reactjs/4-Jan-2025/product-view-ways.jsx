"use client"
import React, { useState, useEffect } from 'react';

// Product Data
const products = [
  {
    id: 1,
    name: 'Fresh Salad',
    description: 'A healthy and fresh salad with a mix of vegetables.',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 2,
    name: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with creamy carbonara sauce.',
    price: '$15.50',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574'
  },
  {
    id: 3,
    name: 'Fruit Basket',
    description: 'A variety of fresh fruits including apples, oranges, and bananas.',
    price: '$18.00',
    image: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
  },
  {
    id: 4,
    name: 'Fried Chicken',
    description: 'Crispy fried chicken with a side of mashed potatoes.',
    price: '$20.00',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSeU9q8KY7QiUAZAophkiOfW7nCXM6Fkuzw&s'
  },
  {
    id: 5,
    name: 'Burger and Fries',
    description: 'Delicious burger with crispy fries.',
    price: '$10.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGnAPWCpa7cRiRop_FCgv7_i0gu5z-MxtKQ&s'
  }
];

function ProductShow() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'carousel', 'list'

  const changeView = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="p-8">
      {/* View Mode Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => changeView('grid')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Grid View
        </button>
        <button
          onClick={() => changeView('carousel')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Carousel View
        </button>
        <button
          onClick={() => changeView('list')}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          List View
        </button>
      </div>

      {/* Product Display Based on View Mode */}
      <div className={`flex ${viewMode === 'grid' ? 'flex-wrap' : viewMode === 'carousel' ? 'overflow-x-auto' : 'flex-col'} justify-center gap-8`}>
        {products.map((product) => (
          <div key={product.id} className={`bg-white p-4 rounded-lg shadow-lg ${viewMode === 'grid' ? 'w-80' : viewMode === 'carousel' ? 'w-72' : 'w-full'}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <p className="text-lg font-semibold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShow;
