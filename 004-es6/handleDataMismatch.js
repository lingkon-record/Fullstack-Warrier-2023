

const handleDataMismatch = (data) => {
  if (Array.isArray(data)) {
    const [firstItem, secondItem] = data;
    console.log(`First Item: ${firstItem}`);
    console.log(`Second Item: ${secondItem}`);
  } else {
    console.error("Error: Expected an array but received an object.");
  }
};

// Example usage with potential array/object mismatch
const dataArray = [1, 2];
const dataObject = { key1: "value1", key2: "value2" };

handleDataMismatch(dataArray);
handleDataMismatch(dataObject);
