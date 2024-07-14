// src/components/AlertPopup.js

import React, { useState } from 'react';

const AlertPopup = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === 'correct') {
      // Do something if input is correct
      setInputValue('');
    } else {
      setShowAlert(true);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Alert Popup Example</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-3 mb-4 border rounded-lg w-full text-center"
            placeholder="Type 'correct' to submit"
          />
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full">
            Submit
          </button>
        </form>
        {showAlert && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                <p className="text-lg">Incorrect input! Please type 'correct'.</p>
                <button onClick={closeAlert} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertPopup;
