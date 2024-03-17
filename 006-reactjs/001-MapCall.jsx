import React from 'react';

const IslamicCities = () => {
  // List of Islamic cities
  const islamicCities = [
    { name: 'Mecca', country: 'Saudi Arabia' },
    { name: 'Medina', country: 'Saudi Arabia' },
    { name: 'Jerusalem', country: 'Israel' },
    { name: 'Istanbul', country: 'Turkey' },
    { name: 'Cairo', country: 'Egypt' },
    { name: 'Baghdad', country: 'Iraq' },
    { name: 'Damascus', country: 'Syria' },
    { name: 'Fez', country: 'Morocco' },
    { name: 'Granada', country: 'Spain' },
    { name: 'Kairouan', country: 'Tunisia' }
  ];

  return (
    <div>
      <h1>Islamic Cities</h1>
      <ul>
        {islamicCities.map(city => (
          <li key={city.name}>
            <strong>{city.name}</strong> - {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IslamicCities;
