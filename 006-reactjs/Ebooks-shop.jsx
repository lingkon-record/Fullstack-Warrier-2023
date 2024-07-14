// src/components/Main.js

import React from 'react';

const books = [
  {
    title: 'Ebook 1',
    image: 'https://media.wired.com/photos/63783488311ee01ae0cb4bd2/16:9/w_2069,h_1163,c_limit/Ebooks-Made-Me-Fall-Back-in-Love-With-Reading-Gear.jpg',
    description: 'This is a great ebook about ...',
    price: '$9.99'
  },
  {
    title: 'Ebook 2',
    image: 'https://cdn-icons-png.flaticon.com/512/12323/12323034.png',
    description: 'Learn more about ...',
    price: '$14.99'
  },
  {
    title: 'Ebook 1',
    image: 'https://media.wired.com/photos/63783488311ee01ae0cb4bd2/16:9/w_2069,h_1163,c_limit/Ebooks-Made-Me-Fall-Back-in-Love-With-Reading-Gear.jpg',
    description: 'This is a great ebook about ...',
    price: '$9.99'
  },
  {
    title: 'Ebook 2',
    image: 'https://cdn-icons-png.flaticon.com/512/12323/12323034.png',
    description: 'Learn more about ...',
    price: '$14.99'
  }
];

const Main = () => {
  return (
    <main className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Ebooks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-6 rounded-lg"/>
            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <p className="text-blue-500 font-bold text-lg">{book.price}</p>
            <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">Buy Now</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
