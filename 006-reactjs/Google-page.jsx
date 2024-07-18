import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mt-10">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="w-72"
        />
      </div>

      
      {/* Search Bar */}
      <div className="w-full max-w-xl mt-10">
        <div className="flex items-center border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
          <input
            type="text"
            className="flex-grow p-4 rounded-l-full focus:outline-none"
            placeholder="Search Google or type a URL"
          />
          <button className="p-4">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 16.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>


      
      {/* Buttons */}
      <div className="mt-8 space-x-4">
        <button className="bg-gray-200 p-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">
          Google Search
        </button>
        <button className="bg-gray-200 p-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default HomePage;
