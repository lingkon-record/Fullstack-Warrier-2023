"use client"
import React, { useState } from 'react';

const CodeMatcher = () => {
    const [code1, setCode1] = useState(generateUniqueCode());
    const [code2, setCode2] = useState('');
    const [result, setResult] = useState('');

    // Function to generate a unique random code
    function generateUniqueCode() {
        let code = '';
        for (let i = 0; i < 8; i++) {
            code += Math.floor(Math.random() * 10); // Generates a random digit
        }
        return code;
    }

    // Function to copy the generated code to clipboard
    function copyCode() {
        navigator.clipboard.writeText(code1);
    }

    // Function to check if codes match
    function checkMatch() {
        if (code1 === code2) {
            setResult("Both codes match!");
        } else {
            setResult("Codes do not match!");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="container mx-auto max-w-lg p-8 bg-white rounded shadow-lg">
                <input type="text" value={code1} readOnly className="w-full p-2 mb-4 text-center border border-gray-300 rounded" />
                <button onClick={copyCode} className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600">Copy</button>
                <input type="text" value={code2} onChange={e => setCode2(e.target.value)} placeholder="Enter code 2" className="w-full p-2 mb-4 text-center border border-gray-300 rounded" />
                <button onClick={checkMatch} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
                <div className="mt-4 font-bold">{result}</div>
            </div>
        </div>
    );
}

export default CodeMatcher;
