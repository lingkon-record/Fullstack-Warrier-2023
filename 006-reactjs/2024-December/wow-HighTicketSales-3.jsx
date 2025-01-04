"use client";

import React from "react";

const TechLanding = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-extrabold text-yellow-400">Tech Innovators</h1>
        <nav>
          <button className="text-white hover:text-yellow-400 mx-4">Features</button>
          <button className="text-white hover:text-yellow-400 mx-4">Pricing</button>
          <button className="text-white hover:text-yellow-400 mx-4">Contact</button>
          <button className="bg-yellow-400 px-5 py-2 rounded-md font-bold hover:bg-yellow-500">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center px-8 mt-16">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-snug">
            Revolutionize Your <span className="text-yellow-400">Workflow</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            Simplify your processes and scale your business with cutting-edge
            technology designed for success.
          </p>
          <div className="mt-8">
            <button className="bg-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-500">
              Start Free Trial
            </button>
            <button className="ml-4 bg-gray-800 px-6 py-3 rounded-md hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
        src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
            alt="Tech Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose Tech Innovators?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Automation</h4>
            <p className="text-gray-300">
              Save time by automating repetitive tasks with our AI-driven tools.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Collaboration</h4>
            <p className="text-gray-300">
              Seamlessly connect with teams and clients in real time.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Analytics</h4>
            <p className="text-gray-300">
              Gain insights to optimize your workflow and improve results.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">
          Flexible Pricing Plans
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Starter</h4>
            <p className="text-gray-300">Perfect for individuals.</p>
            <p className="mt-4 text-4xl font-bold">$19/mo</p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500">
              Choose Plan
            </button>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Pro</h4>
            <p className="text-gray-300">Ideal for small teams.</p>
            <p className="mt-4 text-4xl font-bold">$49/mo</p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500">
              Choose Plan
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Enterprise</h4>
            <p className="text-gray-300">Best for large companies.</p>
            <p className="mt-4 text-4xl font-bold">Custom</p>
            <button className="mt-6 bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-800 text-center">
        <p className="text-gray-400">
          © 2025 Tech Innovators. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TechLanding;
