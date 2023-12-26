// Global Scope
let globalVariable = "I am a global variable";

function exampleFunction() {
  // Function Scope
  let functionVariable = "I am a function-scoped variable";
  console.log("Inside the function:", functionVariable);

  if (true) {
    // Block Scope
    let blockVariable = "I am a block-scoped variable";
    console.log("Inside the block:", blockVariable);
  }

  // The block-scoped variable is not accessible here
  // console.log("Outside the block:", blockVariable); // Uncommenting this line will result in an error
}

// Accessing global variable
console.log("Outside the function:", globalVariable);

// The function-scoped variable is not accessible here
// console.log("Outside the function:", functionVariable); // Uncommenting this line will result in an error

exampleFunction();
