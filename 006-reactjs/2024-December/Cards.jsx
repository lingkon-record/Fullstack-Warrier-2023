"use client"


import React from "react";

const HighTicketSales = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="relative">
          {/* Image Section */}
          <img
            src="https://st2.depositphotos.com/1500858/6435/i/950/depositphotos_64358265-stock-photo-travel-the-world-monument-concept.jpg"
            alt="Workspace"
            className="rounded-t-lg w-full h-64 object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="p-6">
          <div className="text-sm uppercase text-gray-500 font-semibold mb-2">
            Monetization
          </div>
          <h1 className="text-3xl font-bold text-gray-900 leading-snug">
            The Ultimate Guide to High-Ticket Sales (Updated for 2025)
          </h1>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We’ll show you what high-ticket items are and why high-ticket
            products and services offer a competitive edge.
          </p>
          <div className="flex items-center text-gray-500 text-sm mt-4">
            <span>By Mighty Team</span>
            <span className="mx-2">|</span>
            <span>June 24, 2024</span>
            <span className="mx-2">|</span>
            <span>15 min read</span>
          </div>
          <div className="mt-6 flex justify-start">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600">
              Start Free Trial
            </button>
            <button className="ml-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighTicketSales;




