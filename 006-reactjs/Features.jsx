// src/components/FeatureHighlight.js
"use client";

import React from 'react';

const FeatureHighlight = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Revolutionary Features</h1>
        <p className="text-lg text-gray-600">Experience the next level of innovation with our cutting-edge solutions.</p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="flex-1">
          <img
            src="https://www.tailorbrands.com/wp-content/uploads/2022/03/Heather-mockup-_new_002-13_small.png"
            alt="Feature"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 md:ml-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Enhanced User Experience</h2>
          <p className="text-gray-700 mb-6">
            Our platform integrates advanced features to ensure a seamless and intuitive experience. Discover how our solutions can transform your workflow and productivity.
          </p>
          <button className="py-3 px-6 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Interactive Card Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-80 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/20/0/RX_HGMAG068_WowMarch-07.jpg.rend.hgtvcom.616.462.suffix/1550670129800.jpeg"
            alt="Additional Feature"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Insights</h3>
            <p className="text-gray-600 mb-4">
              Get access to exclusive insights and updates on the latest features and enhancements. Stay ahead of the curve with our comprehensive resources.
            </p>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
