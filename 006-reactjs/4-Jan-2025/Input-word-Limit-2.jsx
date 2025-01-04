"use client"


import React, { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount > 10) {
      setError("⚠️ You can only input 10 words.");
    } else {
      setError("");
    }

    setInputValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = inputValue.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount === 10) {
      alert("🎉 Submission successful!");
    } else {
      alert(`❌ Please input exactly 10 words. Current count: ${wordCount}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center">
      {/* Container for the form */}
      <div className="bg-white/90 p-8 rounded-lg shadow-2xl w-full max-w-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Enter Exactly <span className="text-blue-500">10 Words</span>
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Textarea for input */}
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            rows="4"
            className={`w-full p-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Type your 10 words here..."
          />
          {/* Error message */}
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          {/* Submit button */}
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
