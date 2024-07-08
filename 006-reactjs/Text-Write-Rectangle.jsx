import React from 'react';

const Boxes = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {[1, 2, 3].map((index) => (
        <div key={index} className="relative bg-blue-500 w-full sm:w-1/2 md:w-1/4 h-40 md:h-60 rounded-lg overflow-hidden shadow-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white">Lingkon</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
