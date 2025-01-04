"use client"
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const targetDate = new Date('2024-12-31T00:00:00'); // Set your target date here
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDate]);

  function calculateTimeLeft(target) {
    const now = new Date();
    const difference = target - now;

    if (difference <= 0) {
      return null; // Timer is done
    }

    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Countdown Timer</h1>
        {timeLeft ? (
          <div className="space-y-4">
            <div className="text-4xl font-bold text-gray-700">
              <span className="p-4 bg-blue-200 rounded-lg">{timeLeft.hours}:</span>
              <span className="p-4 bg-blue-200 rounded-lg">{timeLeft.minutes}:</span>
              <span className="p-4 bg-blue-200 rounded-lg">{timeLeft.seconds}</span>
            </div>
            <div className="text-lg text-gray-500">Time remaining until your event!</div>
          </div>
        ) : (
          <div className="text-2xl font-bold text-green-500">
            <p>The event has arrived!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;
