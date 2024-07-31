import React from 'react';

const YouTubeClone = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-red-600 text-2xl font-bold">YouTube</div>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="w-96 px-4 py-2 border rounded-full"
          />
          <button className="bg-gray-200 p-2 rounded-full">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l4.99 4.98 1.49-1.49-4.98-4.99zM9.5 14c-2.48 0-4.5-2.02-4.5-4.5S7.02 5 9.5 5 14 7.02 14 9.5 11.98 14 9.5 14z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-gray-200 p-2 rounded-full">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white h-screen shadow-md">
          <ul className="space-y-2 p-4">
            <li className="text-gray-700 font-semibold">Home</li>
            <li className="text-gray-700">Trending</li>
            <li className="text-gray-700">Subscriptions</li>
            <li className="text-gray-700">Library</li>
          </ul>
        </nav>

        {/* Video Grid */}
        <div className="flex-1 p-6 grid grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9MzyvRDanq-vpQ0nqhpef49kRgbuNJKriQ&s"
              alt="Thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-gray-900 text-lg font-semibold">Video Title 1</h2>
            <p className="text-gray-600">Channel Name</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYXWm0PdQYjJY_eF7T_r26WJqonqKLHr43Q&s"
              alt="Thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-gray-900 text-lg font-semibold">Video Title 2</h2>
            <p className="text-gray-600">Channel Name</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9MzyvRDanq-vpQ0nqhpef49kRgbuNJKriQ&s"
              alt="Thumbnail"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-gray-900 text-lg font-semibold">Video Title 3</h2>
            <p className="text-gray-600">Channel Name</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default YouTubeClone;
