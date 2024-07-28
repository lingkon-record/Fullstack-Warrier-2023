// src/components/FeatureCard.js
"use client";

import React from 'react';

const featureCards = [
  {
    id: 1,
    title: 'Elegant Design',
    description: 'Our product offers a sleek and modern design that enhances both functionality and aesthetics.',
    image: 'https://www.tailorbrands.com/wp-content/uploads/2022/03/Heather-mockup-_new_002-13_small.png'
  },
  {
    id: 2,
    title: 'User-Friendly Interface',
    description: 'Experience an intuitive interface that simplifies your tasks and improves efficiency.',
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/20/0/RX_HGMAG068_WowMarch-07.jpg.rend.hgtvcom.616.462.suffix/1550670129800.jpeg'
  },
  {
    id: 3,
    title: 'Advanced Features',
    description: 'Discover advanced features that provide you with a competitive edge and enhanced capabilities.',
   image: 'https://images.ctfassets.net/skkgb8fetgpj/14r3foZXtQV0wzMEGXqMSM/cbda930696802a5381ade4fa075f206b/Kitchen_design_ideas.jpeg'
  }
];

const FeatureCard = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Discover Our Features</h1>
        <p className="text-lg text-gray-600">Explore the unique aspects of our product that set us apart from the competition.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map(card => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-700 mb-6">{card.description}</p>
              <button className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
