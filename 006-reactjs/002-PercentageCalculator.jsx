import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState("");

  const calculatePercentage = () => {
    
    const num = parseFloat(number);
    const tot = parseFloat(total);
    
    if (!isNaN(num) && !isNaN(tot) && tot !== 0) {
      const percentage = (num / tot) * 100;
      setResult(`${num} is ${percentage.toFixed(2)}% of ${tot}`);
    } else {
      setResult("Please enter valid numbers (total should not be zero)");
    }
  };


  return (
    <div className="container">
      
      <h2>Percentage Calculator</h2>
     
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      
      <input
        type="number"
        placeholder="Enter total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      
      <button onClick={calculatePercentage}>Calculate Percentage</button>
      
      <div id="result">{result}</div>
      
    </div>
  );
}
