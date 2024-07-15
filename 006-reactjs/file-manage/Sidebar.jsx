import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">File Manager</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Documents</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Pictures</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Music</li>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">Videos</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
