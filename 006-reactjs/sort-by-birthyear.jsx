import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !birthYear) return;

    const newEntry = {
      name: name.trim(),
      birthYear: parseInt(birthYear),
    };

    const updatedData = [...data, newEntry].sort((a, b) => a.birthYear - b.birthYear);
    setData(updatedData);

    setName("");
    setBirthYear("");
  };

  return (
    <div>
      <h2>Add Name and Birth Year</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter birth year"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Results (Sorted by Birth Year):</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.birthYear}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;