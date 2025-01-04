"use client"
import React from 'react';

function MarketingSection() {
  return (
    <div 
      className="flex items-center justify-center bg-cover bg-center min-h-[400px] p-8 relative"
      style={{ backgroundImage: `url('https://media.istockphoto.com/id/1183338498/vector/0547.jpg?s=612x612&w=0&k=20&c=EcsbwBVecadPauKhgYdpt561nYZotCdC3Lyrkmtrgpo=')` }}
    >
      {/* Full Shadow Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 p-10 text-center w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">Grow Your Business with Us</h2>
        <p className="text-lg text-white mb-6">
          We provide innovative solutions to help your business reach new heights. Join us today and experience the power of transformation!
        </p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default MarketingSection;
