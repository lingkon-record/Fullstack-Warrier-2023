

import React from 'react';

const HealthBanner = () => {
  return (
    <div className="bg-green-500 text-white p-8 rounded-lg shadow-lg flex flex-col items-center max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stay Healthy!</h1>
      <p className="text-lg mb-6 text-center">
        Join our health campaign to learn more about healthy living and get access to free resources and tips.
      </p>
      <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default HealthBanner;
