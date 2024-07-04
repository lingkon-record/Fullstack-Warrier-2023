import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const EncryptDecryptForm = () => {
  const [name, setName] = useState('');
  const [encryptedName, setEncryptedName] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(name, 'secret_key').toString();
    setEncryptedName(encrypted);
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedName, 'secret_key').toString(CryptoJS.enc.Utf8);
      alert(`Decrypted Name: ${decrypted}`);
    } catch (error) {
      alert('Invalid encrypted name');
    }
  };

  const handleClear = () => {
    setName('');
    setEncryptedName('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="encryptedName" className="block text-gray-700 font-bold mb-2">Encrypted Name</label>
        <input
          type="text"
          id="encryptedName"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={encryptedName}
          onChange={(e) => setEncryptedName(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleEncrypt}
        >
          Encrypt
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleDecrypt}
        >
          Decrypt
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default EncryptDecryptForm;
