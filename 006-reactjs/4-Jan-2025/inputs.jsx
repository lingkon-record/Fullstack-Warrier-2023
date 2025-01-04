"use client";



import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gray-50 shadow-md rounded-lg max-w-md mx-auto">
      {/* Title */}
      <h2 className="text-xl font-semibold text-teal-700">Subscribe to Our Updates</h2>

      {/* Email Input */}
      <div className="flex items-center border border-teal-400 rounded-lg w-full px-3 py-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent focus:outline-none text-teal-700 placeholder-teal-400"
        />
        <button className="text-teal-600 hover:text-teal-800 font-semibold">
          →
        </button>
      </div>

      {/* Phone Input */}
      <div className="flex items-center border border-teal-400 rounded-lg w-full px-3 py-2">
        <input
          type="text"
          placeholder="Enter your phone number"
          className="flex-1 bg-transparent focus:outline-none text-teal-700 placeholder-teal-400"
        />
        <button className="text-teal-600 hover:text-teal-800 font-semibold">
          →
        </button>
      </div>

      {/* Follow on Shop Button */}
      <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 shadow-md w-full">
        <span className="text-lg">❤️</span>
        <span className="text-sm font-medium">Follow on <span className="font-bold">Shop</span></span>
      </button>
    </div>
  );
};

export default SubscriptionForm;