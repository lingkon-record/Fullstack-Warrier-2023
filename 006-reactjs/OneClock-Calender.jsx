
import React from 'react';

function RunningDate() {
  // Function to get a new running date with running time
  function getRunningDate() {
    const now = new Date(); // Get the current date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options); // Format the date
    const timeStr = now.toLocaleTimeString('en-US'); // Format the time
    return `${dateStr} at ${timeStr}`; // Concatenate the date and time
  }

  const runningDate = getRunningDate();

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p className="text-lg font-semibold mb-2">Next Running Date and Time:</p>
      <p className="text-xl">{runningDate}</p>
    </div>
  );
}

export default RunningDate;
