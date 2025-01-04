"use client"


import React, { useState } from "react";

// Car data stored in an object
const carData = {
  cars: [
    {
      id: 1,
      name: "Classic Modified Car",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/992/802/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg",
      description: "A classic car with modified features for a stylish drive.",
      pricePerDay: 50,
      available: true,
    },
    {
      id: 2,
      name: "Sport Car in Future City",
      image: "https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg",
      description: "A futuristic sports car with high performance and sleek design.",
      pricePerDay: 120,
      available: true,
    },
    {
      id: 3,
      name: "Classic Modified Car 2",
      image: "https://static.vecteezy.com/system/resources/thumbnails/026/992/343/small_2x/classic-modified-car-with-dark-smokie-background-ai-generative-free-photo.jpg",
      description: "Another classic car with enhanced features for a comfortable ride.",
      pricePerDay: 60,
      available: false,
    },
    {
      id: 4,
      name: "Vintage Luxury Car",
      image: "https://img.lovepik.com/photo/48007/1949.jpg_wh300.jpg",
      description: "A luxury car from the 1940s with a vintage design.",
      pricePerDay: 80,
      available: true,
    },
  ],
};

const CarRental = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleBookCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-6 text-center text-4xl font-bold">
        Car Rental Service
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carData.cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <p className="text-lg font-semibold text-gray-800 mt-4">
                  ${car.pricePerDay} / Day
                </p>
                {car.available ? (
                  <button
                    onClick={() => handleBookCar(car)}
                    className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
                  >
                    Book Now
                  </button>
                ) : (
                  <p className="mt-4 text-red-500">Not Available</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedCar && (
          <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Booking Confirmation
            </h2>
            <p className="text-lg text-gray-700">
              You are about to book the car: <span className="font-semibold">{selectedCar.name}</span>
            </p>
            <p className="text-gray-600 mt-2">{selectedCar.description}</p>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              Price: ${selectedCar.pricePerDay} / Day
            </p>
            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Confirm Booking
            </button>
            <button
              onClick={() => setSelectedCar(null)}
              className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        )}
      </main>

      <footer className="bg-blue-500 text-white text-center p-4">
        <p>&copy; 2024 Car Rental Service. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CarRental;




