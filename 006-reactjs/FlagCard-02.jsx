import React from 'react';

const FlagCard = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-green-400 via-green-500 to-green-700 m-4">
      <img 
        className="w-full h-48 object-cover rounded-t-lg" 
        src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg" 
        alt="Flag of Bangladesh" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-white">Flag of Bangladesh</div>
        <p className="text-gray-100 text-base">
          The national flag of Bangladesh was adopted officially on 17 January 1972. It consists of a red disc on top of a green field. The red disc represents the blood of those who died in the 1971 Bangladesh Liberation War, while the green symbolizes the lushness of the land of Bangladesh.
        </p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button className="bg-white text-green-700 hover:bg-gray-200 font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default FlagCard;
