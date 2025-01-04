"use client";

import React from "react";

const HighTicketSales = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">mighty</h1>
          <div>
            <button className="mr-4 bg-transparent text-white hover:text-yellow-500">
              Log In
            </button>
            <button className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600">
              Create Account →
            </button>
          </div>
        </header>

       
        <main className="bg-gray-800 rounded-xl shadow-xl p-6">
          
          <div className="relative">
            <img
              src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
              alt="Interior Design"
              className="rounded-lg w-full h-[400px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-black bg-opacity-60 px-4 py-1 text-sm uppercase rounded text-white">
              Business Class
            </span>
          </div>

       
          <div className="text-center mt-6">
            <h2 className="text-4xl font-bold leading-snug">
              The Ultimate Guide to High-Ticket Sales <br />
              <span className="text-yellow-400">(Updated for 2025)</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We’ll show you what high-ticket items are and why high-ticket
              products and services offer a competitive edge.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              <span>By LINGKON Team</span>
              <span className="mx-2">|</span>
              <span>June 24, 2024</span>
              <span className="mx-2">|</span>
              <span>15 min read</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HighTicketSales;
