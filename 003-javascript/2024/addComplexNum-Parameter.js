// add two complex number passing objects as arguments

// Define a function to add two complex numbers
function addComplexNumbers(complex1, complex2) {
    const realPart = complex1.real + complex2.real;
        const imaginaryPart = complex1.imaginary + complex2.imaginary;
            return { real: realPart, imaginary: imaginaryPart };
            }
// Example usage:
const complexNumber1 = { real: 2, imaginary: 3 };
const complexNumber2 = { real: 1, imaginary: 4 };
const result = addComplexNumbers(complexNumber1, complexNumber2);
console.log("Sum of complex numbers:", result.real, "+", result.imaginary, "i");
