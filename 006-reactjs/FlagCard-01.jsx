import React from 'react';

const FlagCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img 
        className="w-full h-48 object-cover" 
        src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg" 
        alt="Flag of Bangladesh" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Flag of Bangladesh</div>
        <p className="text-gray-700 text-base">
          The national flag of Bangladesh was adopted officially on 17 January 1972. It consists of a red disc on top of a green field. The red disc represents the blood of those who died in the 1971 Bangladesh Liberation War, while the green symbolizes the lushness of the land of Bangladesh.
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </div>

    
  );
};

export default FlagCard;
