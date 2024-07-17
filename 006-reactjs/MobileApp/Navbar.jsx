import React from 'react';

const Navbar = ({ onSelect }) => {
  return (
    <nav className="bg-gray-800 text-white fixed bottom-0 w-full flex justify-around p-4">
      {['Home', 'Profile', 'Settings'].map((item) => (
        <button
          key={item}
          className="flex-1 text-center p-2"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
