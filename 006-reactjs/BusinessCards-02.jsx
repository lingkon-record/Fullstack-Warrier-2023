// src/components/BusinessCard.js
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const BusinessCard = () => {
  return (
    <div className="bg-white max-w-xs mx-auto rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
        <h1 className="text-white text-3xl font-bold">John Doe</h1>
        <p className="text-indigo-200">Web Developer</p>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-gray-800 text-lg font-semibold">Company</h2>
          <p className="text-gray-600">Tech Solutions</p>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-800 text-lg font-semibold">Email</h2>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div className="mb-4">
          <h2 className="text-gray-800 text-lg font-semibold">Phone</h2>
          <p className="text-gray-600">+123 456 7890</p>
        </div>
        <div className="flex space-x-6 mt-6">
          <a href="https://linkedin.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://twitter.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
            <FaTwitter className="text-3xl" />
          </a>
          <a href="https://github.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
