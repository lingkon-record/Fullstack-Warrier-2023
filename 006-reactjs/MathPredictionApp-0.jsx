// src/components/Prediction.js

import React, { useState } from 'react';

const Prediction = () => {
  const [number, setNumber] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePredict = () => {
    if (number !== '') {
      setPrediction(Math.pow(number, 2));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Math Prediction App</h1>
      <div className="mb-4">
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          className="p-2 border rounded"
          placeholder="Enter a number"
        />
      </div>
      <button
        onClick={handlePredict}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Predict
      </button>
      {prediction !== null && (
        <div className="mt-4">
          <h2 className="text-xl">Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default Prediction;
