 // Mock API function to get city and continent information
function getCityInfo(cityName) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call
    setTimeout(() => {
      const cityData = {
        name: cityName,
        continent: "Europe" // Mock data, replace with actual API call
      };

      // Simulating success and failure
      let success = true; // Change to false to simulate rejection

      if (success) {
        resolve(cityData);
      } else {
        reject("Failed to fetch information for " + cityName);
      }
    }, 1500); // 1.5 seconds delay
  });
}

// Example usage of the promise
getCityInfo("Paris")
  .then((result) => {
    console.log(`City: ${result.name}, Continent: ${result.continent}`);
  })
  .catch((error) => {
    console.error(error);
  });
