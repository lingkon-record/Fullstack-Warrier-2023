"use client";
import React from 'react';

// Example data array for news posts
const newsData = [
  {
    id: 1,
    title: "Breaking News: Tech Revolution",
    description: "A new era in tech is here, shaping the future with groundbreaking innovations.",
    image: "https://i.ytimg.com/vi/LS8amqeDbS8/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Innovation in Healthcare",
    description: "Discover how new healthcare technologies are improving lives globally.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSln-VIlmJshS5JeAmWYnR9PNgw-OWKS4BK-w&s"
  },
  {
    id: 3,
    title: "Space Exploration: The Next Step",
    description: "Exploring the next frontier: What’s next for humanity in space?",
    image: "https://i.ytimg.com/vi/LS8amqeDbS8/maxresdefault.jpg"
  }
];

function NewsPosts() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-8">
      {/* News Posts Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {newsData.map((news) => (
          <div key={news.id} className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            {/* News Post Image */}
            <img
              className="w-full h-56 object-cover rounded-t-lg"
              src={news.image}
              alt={news.title}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800">{news.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPosts;
