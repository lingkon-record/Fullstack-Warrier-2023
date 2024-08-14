import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const BusinessCard = () => {
  return (
    <div className="bg-white max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="bg-indigo-600 p-4">
        <h1 className="text-white text-2xl font-semibold">John Doe</h1>
        <p className="text-indigo-200">Web Developer</p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-gray-700 text-lg font-semibold">Company</h2>
          <p className="text-gray-600">Tech Solutions</p>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-700 text-lg font-semibold">Email</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-700 text-lg font-semibold">Phone</h2>
          <p className="text-gray-600">+123 456 7890</p>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://linkedin.com" className="text-gray-700 hover:text-indigo-600">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://twitter.com" className="text-gray-700 hover:text-indigo-600">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://github.com" className="text-gray-700 hover:text-indigo-600">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
