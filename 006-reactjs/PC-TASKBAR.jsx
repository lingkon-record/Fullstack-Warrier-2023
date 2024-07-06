// src/components/Taskbar.js

import React from 'react';

const Taskbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white h-12 flex items-center px-4 shadow-lg">
      {/* Start Button */}
      <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 rounded-md p-2 transition duration-200">
        <img src="https://img.icons8.com/color/48/000000/windows-10.png" alt="Start" className="w-6 h-6" />
        <span className="hidden md:block">Start</span>
      </button>

      {/* Taskbar Icons */}
      <div className="flex-grow flex items-center justify-center space-x-4 ml-4">
        <img src="https://img.icons8.com/color/48/000000/chrome.png" alt="Chrome" className="w-6 h-6 cursor-pointer" />
        <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code" className="w-6 h-6 cursor-pointer" />
        <img src="https://img.icons8.com/color/48/000000/spotify--v1.png" alt="Spotify" className="w-6 h-6 cursor-pointer" />
        {/* Add more icons as needed */}
      </div>

      {/* Clock */}
      <div className="flex items-center">
        <Clock />
      </div>
    </div>
  );
};

// Clock Component
const Clock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ml-4">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  );
};

export default Taskbar;
