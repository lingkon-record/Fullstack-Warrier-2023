"use client"
import React, { useState } from 'react';

function PollingApp() {
  const [polls, setPolls] = useState([
    {
      id: 1,
      question: 'Which programming language do you prefer?',
      options: ['JavaScript', 'Python', 'Java', 'C++'],
      votes: [0, 0, 0, 0], // vote count for each option
      selectedOption: null,
      isVoted: false,
    },
    {
      id: 2,
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      votes: [0, 0, 0, 0],
      selectedOption: null,
      isVoted: false,
    },
  ]);

  const handleVote = (pollId, optionIndex) => {
    setPolls((prevPolls) =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              isVoted: true,
              selectedOption: poll.options[optionIndex],
              votes: poll.votes.map((vote, index) =>
                index === optionIndex ? vote + 1 : vote
              ),
            }
          : poll
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Online Polling App</h1>
        {polls.map((poll) => (
          <div
            key={poll.id}
            className="mb-8 p-6 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{poll.question}</h2>
            <div className="space-y-4">
              {poll.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option-${poll.id}-${index}`}
                    name={`poll-${poll.id}`}
                    value={option}
                    onChange={() => {}}
                    disabled={poll.isVoted}
                    className="mr-2"
                  />
                  <label htmlFor={`option-${poll.id}-${index}`} className="text-gray-600">
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {!poll.isVoted && (
              <button
                onClick={() => handleVote(poll.id, poll.options.findIndex((opt) => opt === poll.selectedOption))}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Vote
              </button>
            )}
            {poll.isVoted && (
              <div className="mt-4 p-4 bg-gray-200 rounded-lg text-center">
                <h3 className="font-semibold text-lg text-gray-700">You voted for: {poll.selectedOption}</h3>
                <div className="mt-4">
                  {poll.options.map((option, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{option}</span>
                      <span className="text-gray-500">{poll.votes[index]} votes</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PollingApp;
