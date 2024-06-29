import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-96 h-64 bg-green-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 bg-red-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
