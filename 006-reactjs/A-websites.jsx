// src/components/Showcase.js
"use client";

import React from 'react';

const Showcase = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-gray-100 rounded-lg shadow-xl">
      <div className="relative mb-8">
        <img
          src="https://www.tailorbrands.com/wp-content/uploads/2022/03/Heather-mockup-_new_002-13_small.png"
          alt="Showcase"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 rounded-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Innovative Design</h1>
          <p className="text-lg">Bringing creativity and functionality together to create stunning results.</p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Discover More</h2>
        <p className="text-lg mb-6">Explore our range of solutions that blend style and performance.</p>
        <button className="py-3 px-8 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
      <div className="mt-12">
        <img
          src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/20/0/RX_HGMAG068_WowMarch-07.jpg.rend.hgtvcom.616.462.suffix/1550670129800.jpeg"
          alt="Additional Content"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Showcase;
