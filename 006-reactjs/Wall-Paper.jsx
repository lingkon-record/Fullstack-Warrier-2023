import React from 'react';

const BookCover = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/221087/pexels-photo-221087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Book Cover"
            className="rounded-md"
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-center">
            <div>
              <h1 className="text-3xl font-bold mb-4">Desire by AGE</h1>
              <p className="text-lg">Ben Shark Dx.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
