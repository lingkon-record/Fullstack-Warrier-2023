"use client"

import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [isWorking, setIsWorking] = useState(true); // True for work, false for break
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes for work
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSessionEnd();
    }
  }, [timeLeft]);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    setTimeLeft(isWorking ? 25 * 60 : 5 * 60); // Reset time based on session type
  };

  const handleSessionEnd = () => {
    clearInterval(intervalId);
    setIsRunning(false);
    if (isWorking) {
      // Switch to break session
      setIsWorking(false);
      setTimeLeft(5 * 60); // 5 minutes break
    } else {
      // Switch back to work session
      setIsWorking(true);
      setTimeLeft(25 * 60); // 25 minutes work
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Pomodoro Timer
        </h1>

        <div className="text-xl font-semibold mb-6">
          {isWorking ? 'Work Session' : 'Break Session'}
        </div>

        <div className="text-4xl font-bold text-gray-900 mb-6">
          {formatTime(timeLeft)}
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          {!isRunning && (
            <button
              onClick={startTimer}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              onClick={stopTimer}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700"
            >
              Stop
            </button>
          )}
          <button
            onClick={resetTimer}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Reset
          </button>
        </div>

        <div className="text-lg text-gray-700 mt-6">
          <p>Keep focused and take breaks at the right time!</p>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
