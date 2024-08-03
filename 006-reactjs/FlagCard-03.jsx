import React from 'react';

const FlagCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 m-4 transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg" 
          alt="Flag of Bangladesh" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Bangladesh</h2>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-gray-800">Flag of Bangladesh</div>
        <p className="text-gray-600 text-base">
          The national flag of Bangladesh was adopted officially on 17 January 1972. It consists of a red disc on top of a green field. The red disc represents the blood of those who died in the 1971 Bangladesh Liberation War, while the green symbolizes the lushness of the land of Bangladesh.
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition duration-300">
          Learn More
        </button>
        <span className="text-sm text-gray-500">17 January 1972</span>
      </div>
    </div>
  );
};

export default FlagCard;
