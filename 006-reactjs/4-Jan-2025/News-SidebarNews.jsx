"use client";

import React from "react";

const TrendingPage = () => {
  const trendingArticles = [
    {
      number: 1,
      title: "As Ukraine’s New Leopard 2 Brigade Disintegrates, The Russians Advance On...",
      author: "David Axe Forbes Staff",
    },
    {
      number: 2,
      title: "Wayne Osmond Dies: Founding Member Of The Osmond Singing Group Was 73",
      author: "Marc Berman Contributor",
    },
    {
      number: 3,
      title: "7 Passive Income Business Ideas To Build Wealth And Financial Freedom",
      author: "Melissa Houston Contributor",
    },
    {
      number: 4,
      title: "Ring In 2025 With A Meteor Shower, An Eclipse And A Brilliant Planet In Just 24 Hours",
      author: "Jamie Carter Contributor",
    },
    {
      number: 5,
      title: "Winter Storm Warnings For 50 Million Across U.S. — Here’s What States May Be Impacted",
      author: "Antonio Pequeño Iv Forbes Staff",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2 text-sm font-medium text-gray-700">
        <button className="text-red-600 border-b-2 border-red-600">Trending</button>
        <button className="hover:text-gray-900">Editors’ Picks</button>
      </div>

      {/* Articles List */}
      <div className="mt-6 space-y-4">
        {trendingArticles.map((article, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Number */}
            <div className="text-red-600 text-2xl font-semibold">{article.number}.</div>
            {/* Content */}
            <div className="flex-1 border-b pb-4">
              <h3 className="text-gray-900 text-sm font-medium hover:text-red-600 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{article.author}</p>
            </div>
            {/* Bookmark */}
            <button className="text-blue-600 hover:text-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 3.75H6.75c-.621 0-1.125.504-1.125 1.125v15.264a.375.375 0 00.573.321l5.802-4.018a.375.375 0 01.426 0l5.802 4.018a.375.375 0 00.573-.321V4.875c0-.621-.504-1.125-1.125-1.125z"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
