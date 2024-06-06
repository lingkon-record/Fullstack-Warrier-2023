import React, { useState } from 'react';

const bankBranches = [
  'BB (Bangladesh Bank)',
  'DBBL (Dutch-Bangla Bank Limited)',
  'IBBL (Islami Bank Bangladesh Limited)',
  'EBL (Eastern Bank Limited)',
  'SBL (Sonali Bank Limited)',
  'PBL (Pubali Bank Limited)',
  'UCBL (United Commercial Bank Limited)',
  'MTBL (Mutual Trust Bank Limited)',
  'NBL (National Bank Limited)',
  'NCCBL (NCC Bank Limited)',
  'MBL (Mercantile Bank Limited)',
  'SJIBL (Shahjalal Islami Bank Limited)',
  'SIBL (Social Islami Bank Limited)',
  'BRAC (BRAC Bank Limited)',
  'TB (Trust Bank Limited)',
  'SCB (Standard Chartered Bank)',
  'HSBC (Hongkong and Shanghai Banking Corporation)',
  'Citi (Citibank)',
  'DB (Deutsche Bank)',
  'JPM (JPMorgan Chase)',
  'BoA (Bank of America)',
  'WF (Wells Fargo)',
  'UBS (Union Bank of Switzerland)',
  'BNP (BNP Paribas)',
  'CS (Credit Suisse)',
  'BBVA (Banco Bilbao Vizcaya Argentaria)',
];

const TransactionCodeGenerator = () => {
  const [branch, setBranch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleBranchChange = (e) => {
    const value = e.target.value;
    setBranch(value);
    setSuggestions(value ? bankBranches.filter(branch => branch.toLowerCase().includes(value.toLowerCase())) : []);
  };

  const handleSuggestionClick = (suggestion) => {
    setBranch(suggestion);
    setSuggestions([]);
  };

  const handleClear = () => {
    setBranch('');
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Branch Selector</h1>
        <div className="mb-4 relative flex items-center">
          <label className="block text-gray-700 mb-2">Branch</label>
          <input
            type="text"
            value={branch}
            onChange={handleBranchChange}
            className="w-full p-2 border rounded mr-2"
            placeholder="Enter or select branch"
          />
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear
          </button>
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow-lg">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionCodeGenerator;
