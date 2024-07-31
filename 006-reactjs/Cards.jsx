import React from 'react';


const FlagCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-white to-gray-200 m-4 p-6 border border-gray-300">
      <div className="flex justify-center items-center mb-4">
        <img 
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg" 
          src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" 
          alt="Flag of Bangladesh" 
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Flag of Bangladesh</h2>
        <p className="text-gray-600 text-base mb-4">
          The national flag of Bangladesh was adopted officially on 17 January 1972. It consists of a red disc on top of a green field. The red disc represents the blood of those who died in the 1971 Bangladesh Liberation War, while the green symbolizes the lushness of the land of Bangladesh.
        </p>
        <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-800 transition duration-300 inline-flex items-center">
         Learn More
        </button>
      </div>
    </div>
  );
};

export default FlagCard
