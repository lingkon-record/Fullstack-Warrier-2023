"use client";

import React from "react";

const NewTemplate = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-yellow-400">NomanAir</h1>
        <div>
          <button className="mr-4 text-white hover:text-yellow-400">Log In</button>
          <button className="bg-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-500">
            Create
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row justify-center items-center mt-16 px-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-tight">
            Unlock <span className="text-yellow-400">High-Ticket Sales</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            Explore the strategies to boost your revenue with high-ticket items
            and exclusive sales techniques. Updated for 2025!
          </p>
          <div className="mt-8">
            <button className="bg-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-500">
              Learn More
            </button>
            <button className="ml-4 bg-gray-800 px-6 py-3 rounded-md hover:bg-gray-700">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
            alt="Creative Workspace"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </main>

      {/* Features Section */}
      <section className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Proven Strategies</h4>
            <p className="text-gray-300">
              Learn techniques used by top marketers to convert leads into
              loyal customers.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Exclusive Insights</h4>
            <p className="text-gray-300">
              Gain access to industry secrets and trends for high-ticket sales.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Tailored Solutions</h4>
            <p className="text-gray-300">
              We offer custom strategies designed to fit your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2025 Elevate Sales. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NewTemplate;
