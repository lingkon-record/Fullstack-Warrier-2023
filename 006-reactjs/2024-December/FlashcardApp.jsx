"use client"
import React, { useState } from 'react';

const FlashcardApp = () => {
  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
    { question: 'Who wrote the play Romeo and Juliet?', answer: 'William Shakespeare' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false); // Reset answer visibility when moving to next card
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Go back to the first card if at the end
    }
  };

  const handlePrevious = () => {
    setShowAnswer(false); // Reset answer visibility when moving to previous card
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(flashcards.length - 1); // Go to the last card if at the start
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Flashcard App</h1>

        <div className="flex flex-col items-center mb-6">
          <div className="text-xl font-semibold text-gray-900 mb-4">
            {flashcards[currentIndex].question}
          </div>
          <div className="text-lg text-gray-700">
            {showAnswer ? flashcards[currentIndex].answer : '---'}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Previous
          </button>
          <button
            onClick={toggleAnswer}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700"
          >
            {showAnswer ? 'Hide Answer' : 'Show Answer'}
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardApp;
