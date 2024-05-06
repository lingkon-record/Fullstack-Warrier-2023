import React from 'react';

const HotCountriesTemperatures = {
  "India": 40,
  "Australia": 38,
  "Saudi Arabia": 45,
  "Brazil": 36,
  "Egypt": 42
};

const ListTemperatures = ({ temperatures }) => {
  const sortedTemperatures = Object.entries(temperatures).sort((a, b) => b[1] - a[1]);
  
  return (
    <div>
      {sortedTemperatures.map((item, index) => (
        <p key={index}>{`${index + 1}. ${item[0]}: ${item[1]}°C`}</p>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Hot Countries Temperatures</h1>
      <ListTemperatures temperatures={HotCountriesTemperatures} />
    </div>
  );
};

export default App;
