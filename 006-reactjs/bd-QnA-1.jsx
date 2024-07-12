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
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bangladesh Divisions and Districts Q&A</h1>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left focus:outline-none focus:text-blue-500"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold">{q.question}</h2>
            </button>
            {activeIndex === index && <p className="mt-2 text-gray-700">{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;
