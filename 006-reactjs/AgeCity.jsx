
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (name && age && city) {
      setData([...data, { name, age, city }]);
      setName("");
      setAge("");
      setCity("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
          placeholder="Age"
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
          placeholder="City"
        />
        <button onClick={handleSubmit} className="input-btn">
          Submit
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
