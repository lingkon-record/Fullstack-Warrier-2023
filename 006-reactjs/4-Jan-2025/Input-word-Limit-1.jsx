"use client"

import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    const wordCount = text.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount > 10) {
      setError("You can only input 10 words.");
    } else {
      setError("");
    }

    setInputValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = inputValue.trim().split(/\s+/).filter((word) => word !== "").length;

    if (wordCount === 10) {
      alert("Submission successful!");
    } else {
      alert(`Please input exactly 10 words. Current count: ${wordCount}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Enter Exactly 10 Words</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            rows="4"
            className={`w-full p-3 border rounded-lg focus:outline-none ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Type your 10 words here..."
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
