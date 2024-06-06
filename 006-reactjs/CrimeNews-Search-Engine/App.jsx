// App.js
import React, { useState } from 'react';
import data from './data.json'; // Import the JSON file

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCrime, setSelectedCrime] = useState('');
  const [images, setImages] = useState([]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCrime(''); // Reset crime selection when country changes
    setImages([]);
  };

  const handleCrimeChange = (e) => {
    setSelectedCrime(e.target.value);
  };

  const handleSearch = () => {
    const country = data.countries.find(country => country.name === selectedCountry);
    if (country) {
      const crime = country.crimes.find(crime => crime.name === selectedCrime);
      if (crime) {
        setImages(crime.images);
      } else {
        setImages([]);
      }
    } else {
      setImages([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Lingkon - The Search Engine</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="countryName">
            Country Name
          </label>
          <select
            id="countryName"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {data.countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="crimeName">
            Crime Name
          </label>
          <select
            id="crimeName"
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCrime}
            onChange={handleCrimeChange}
            disabled={!selectedCountry}
          >
            <option value="">Select a crime</option>
            {selectedCountry && data.countries.find(country => country.name === selectedCountry).crimes.map((crime) => (
              <option key={crime.name} value={crime.name}>
                {crime.name}
              </option>
            ))}
          </select>
        </div>
        <div className='mt-24'>

        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search the news
        </button>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={image} alt={`Crime ${index}`} className="w-full h-48 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
