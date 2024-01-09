const handleSyntaxInconsistency = (data) => {
  if (Array.isArray(data)) {
    const [firstItem, secondItem] = data;
    console.log(`Array Destructuring - First Item: ${firstItem}`);
    console.log(`Array Destructuring - Second Item: ${secondItem}`);
  } else if (typeof data === 'object' && data !== null) {
    const { key1, key2 } = data;
    console.log(`Object Destructuring - Key 1: ${key1}`);
    console.log(`Object Destructuring - Key 2: ${key2}`);
  } else {
    console.error("Error: Unsupported data type for destructuring.");
  }
};

// Example usage with potential syntax inconsistency
const dataArray = [1, 2];
const dataObject = { key1: "value1", key2: "value2" };

handleSyntaxInconsistency(dataArray);
handleSyntaxInconsistency(dataObject);
