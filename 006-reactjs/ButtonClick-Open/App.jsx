import React, { useState } from 'react';
import NewForm from './NewForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <button
        className="bg-blue-500 text-white p-2 rounded mt-5"
        onClick={() => setShowForm(true)}
      >
        Create a New Form
      </button>
      {showForm && <NewForm />}
    </div>
  );
}

export default App;
