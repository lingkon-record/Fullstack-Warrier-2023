import { useState  } from "react";


const Test = () => {
    const [people, setPeople] = useState([]);

  const addPerson = () => {
    const name = document.getElementById('nameInput').value;
    const age = parseInt(document.getElementById('ageInput').value);
    if (name && age) {
      const newPerson = { name, age };
      setPeople([...people, newPerson]);
      document.getElementById('nameInput').value = '';
      document.getElementById('ageInput').value = '';
    } else {
      alert('Please enter both name and age.');
    }
  };

  const displayPeople = () => {
    return people.map(person => (
      <div key={person.name} className="bg-gray-200 p-2 rounded-lg mb-2">
        {person.name}, {person.age}
      </div>
    ));
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Name and Age List</h1>
      <div className="flex mb-4">
        <label htmlFor="nameInput" className="mr-2">Name:</label>
        <input type="text" id="nameInput" className="border border-gray-400 px-2 py-1" />
      </div>
      <div className="flex mb-4">
        <label htmlFor="ageInput" className="mr-2">Age:</label>
        <input type="number" id="ageInput" className="border border-gray-400 px-2 py-1" />
      </div>
      <button onClick={addPerson} className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Submit</button>

      <div id="output">
        {displayPeople()}
      </div>
    </div>
  );
    };


export default Test