  // Non-binary data: String manipulation
const textData = "Hello, World!";
console.log("Non-binary data:", textData);

// Binary data: Converting non-binary to binary (UTF-8 encoding)
const binaryData = new TextEncoder().encode(textData);
console.log("Binary data:", binaryData);

// Binary data manipulation: Converting binary to non-binary (UTF-8 decoding)
const decodedText = new TextDecoder().decode(binaryData);
console.log("Decoded text:", decodedText);
