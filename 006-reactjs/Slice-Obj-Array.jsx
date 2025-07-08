import React from "react";

const App = () => {
  // Example 1: Names from object
  const peopleGroup1 = {
    p1: "Alice",
    p2: "Bob",
    p3: "Charlie",
    p4: "David",
    p5: "Edward",
  };

  const peopleGroup2 = {
    a: "Fiona",
    b: "George",
    c: "Henry",
  };

  // Example 2: Countries from arrays
  const asianCountries = ["Bangladesh", "India", "Nepal", "China", "Japan"];
  const europeanCountries = ["Germany", "France", "Italy", "Spain"];

  // Extract values from objects
  const first4Names = Object.values(peopleGroup1).slice(0, 4);
  const first2Names = Object.values(peopleGroup2).slice(0, 2);

  // Slice arrays
  const first4AsianCountries = asianCountries.slice(0, 4);
  const first2EuropeanCountries = europeanCountries.slice(0, 2);

  return (
    <div>
      <h2>Names from Object</h2>
      <p>First 4 Names:</p>
      <ul>
        {first4Names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <p>2 Names from another object:</p>
      <ul>
        {first2Names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h2>Countries from Array</h2>
      <p>First 4 Asian Countries:</p>
      <ul>
        {first4AsianCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>

      <p>First 2 European Countries:</p>
      <ul>
        {first2EuropeanCountries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;