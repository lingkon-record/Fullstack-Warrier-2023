import React from "react";

const App = () => {
  const people = [
    { name: "Alice", birthYear: 1995 },
    { name: "Bob", birthYear: 1992 },
    { name: "Charlie", birthYear: 2000 },
    { name: "David", birthYear: 1988 },
    { name: "Eva", birthYear: 1999 },
    { name: "Frank", birthYear: 1990 },
    { name: "Grace", birthYear: 1997 },
    { name: "Helen", birthYear: 1993 },
    { name: "Ian", birthYear: 1985 },
    { name: "Jack", birthYear: 1991 },
  ];

  const sortedPeople = [...people].sort((a, b) => a.birthYear - b.birthYear);

  return (
    <div>
      <h2>People Sorted by Birth Year</h2>
      <ol>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} - {person.birthYear}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;