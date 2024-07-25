// src/components/MathPredictionApp.js

import React, { useState } from 'react';

const MathPredictionApp = () => {
  const [question, setQuestion] = useState(generateQuestion());
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === question.answer) {
      setFeedback('Right');
    } else {
      setFeedback('Wrong');
    }
    setQuestion(generateQuestion());
    setUserAnswer('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Math Prediction App</h1>
        <p className="mb-4">
          What is {question.num1} + {question.num2}?
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="p-2 mb-4 border rounded-lg"
            placeholder="Your answer"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
            Submit
          </button>
        </form>
        {feedback && (
          <p className={`mt-4 font-bold ${feedback === 'Right' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default MathPredictionApp;
