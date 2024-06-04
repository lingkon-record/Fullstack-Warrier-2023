
import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number) {
      setHistory([...history, number]);
      setNumber('');
    }
  };

  const handleClear = () => {
    setHistory([]);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
              Enter a number
            </label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
          >
            Submit
          </button>
        </form>

        <button
          onClick={handleClear}
          className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
        >
          Clear History
        </button>

        <button
          onClick={toggleHistory}
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        >
          {showHistory ? 'Hide History' : 'Show History'}
        </button>

        {showHistory && (
          <div className="bg-gray-50 p-4 rounded shadow-inner">
            <h2 className="text-lg font-semibold mb-2">History</h2>
            {history.length > 0 ? (
              <ul>
                {history.map((num, index) => (
                  <li key={index} className="border-b py-1">
                    {num}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No history yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
