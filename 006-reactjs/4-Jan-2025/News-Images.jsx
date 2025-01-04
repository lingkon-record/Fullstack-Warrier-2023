"use client";
import React from 'react';

function NewsPosts() {
  return (
    <div className="flex justify-center gap-8 p-8">
      {/* Left Section: Demo News Posts */}
      <div className="w-1/2 space-y-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            className="w-full h-56 object-cover" 
            src="https://i.ytimg.com/vi/LS8amqeDbS8/maxresdefault.jpg" 
            alt="News Post 1" 
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">Breaking News: Tech Revolution</h4>
            <p className="text-gray-600 text-sm mt-2">A new era in tech is here, shaping the future with groundbreaking innovations.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            className="w-full h-56 object-cover" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSln-VIlmJshS5JeAmWYnR9PNgw-OWKS4BK-w&s" 
            alt="News Post 2" 
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">Innovation in Healthcare</h4>
            <p className="text-gray-600 text-sm mt-2">Discover how new healthcare technologies are improving lives globally.</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            className="w-full h-56 object-cover" 
            src="https://i.ytimg.com/vi/LS8amqeDbS8/maxresdefault.jpg" 
            alt="News Post 3" 
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">Space Exploration: The Next Step</h4>
            <p className="text-gray-600 text-sm mt-2">Exploring the next frontier: What’s next for humanity in space?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPosts;


