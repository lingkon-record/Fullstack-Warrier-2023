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
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Math Prediction App</h1>
        <p className="text-center mb-4 text-lg">
          What is {question.num1} + {question.num2}?
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="p-3 mb-4 border rounded-lg w-full text-center"
            placeholder="Your answer"
          />
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg w-full">
            Submit
          </button>
        </form>
        {feedback && (
          <p className={`mt-4 text-xl font-bold text-center ${feedback === 'Right' ? 'text-green-500' : 'text-red-500'}`}>
            {feedback}
          </p>
        )}
        <p className="mt-6 text-center text-gray-600">
          Challenge yourself with simple math problems and improve your skills!
        </p>
      </div>
    </div>
  );
};

export default MathPredictionApp;
