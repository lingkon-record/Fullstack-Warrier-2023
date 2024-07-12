import React, { useState } from 'react';

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "How many districts are there in Bangladesh?",
      answer: "There are 64 districts in Bangladesh."
    },
    {
      question: "What is a district seat?",
      answer: "The headquarters of a district is called the district seat."
    },
    {
      question: "How many subdistricts or upazilas are there in Bangladesh?",
      answer: "There are 495 subdistricts or upazilas in Bangladesh."
    }
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">Bangladesh Divisions and Districts Q&A</h1>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              className="w-full text-left focus:outline-none focus:text-accent"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-2xl font-semibold text-secondary hover:text-accent transition-colors duration-300">{q.question}</h2>
            </button>
            {activeIndex === index && <p className="mt-3 text-lg text-gray-700">{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;
