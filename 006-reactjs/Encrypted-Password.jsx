import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const EncryptDecryptForm = () => {
  const [password, setPassword] = useState('');
  const [encryptedPassword, setEncryptedPassword] = useState('');

  const handleEncrypt = () => {
    const encrypted = CryptoJS.AES.encrypt(password, 'secret_key').toString();
    setEncryptedPassword(encrypted);
  };

  const handleDecrypt = () => {
    try {
      const decrypted = CryptoJS.AES.decrypt(encryptedPassword, 'secret_key').toString(CryptoJS.enc.Utf8);
      alert(`Decrypted Password: ${decrypted}`);
    } catch (error) {
      alert('Invalid encrypted password');
    }
  };

  const handleClear = () => {
    setPassword('');
    setEncryptedPassword('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="encryptedPassword" className="block text-gray-700 font-bold mb-2">Encrypted Password</label>
        <input
          type="text"
          id="encryptedPassword"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={encryptedPassword}
          onChange={(e) => setEncryptedPassword(e.target.value)}
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
