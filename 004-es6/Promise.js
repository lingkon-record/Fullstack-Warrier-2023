// ChatGPT
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const success = true;

    if (success) {
      // Resolve the promise if successful
      resolve("Operation successful!");
    } else {
      // Reject the promise if there's an error
      reject("Operation failed!");
    }
  }, 2000); // Simulating a 2-second asynchronous operation
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log(result); // Output: Operation successful!
  })
  .catch((error) => {
    console.error(error); // Output: Operation failed!
  });
