// src/components/Main.js

import React from 'react';
import EbookCard from './EbookCard';

const ebooks = [
  {
    title: 'Ebook 1',
    author: 'Author 1',
    price: 9.99,
    image: 'https://media.wired.com/photos/63783488311ee01ae0cb4bd2/16:9/w_2069,h_1163,c_limit/Ebooks-Made-Me-Fall-Back-in-Love-With-Reading-Gear.jpg'
  },
  {
    title: 'Ebook 2',
    author: 'Author 2',
    price: 14.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2dIAN5_UkcGgQna9Lx5d7B0_QOBJKEf1KtiIoWivJTgpCo2mCWfuu6xBGd4L7r3LOQE&usqp=CAU'
  },
  {
    title: 'Ebook 3',
    author: 'Author 3',
    price: 7.99,
    image: 'https://cdn-icons-png.flaticon.com/512/1945/1945963.png'
  },
  {
    title: 'Ebook 4',
    author: 'Author 4',
    price: 19.99,
    image: 'https://cdn-icons-png.flaticon.com/512/12323/12323034.png'
  },
  // Add more ebook items as needed
];

const Main = () => {
  return (
    <main className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Ebooks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ebooks.map((ebook, index) => (
          <EbookCard
            key={index}
            title={ebook.title}
            author={ebook.author}
            price={ebook.price}
            image={ebook.image}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
