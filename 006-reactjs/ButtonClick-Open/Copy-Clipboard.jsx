import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
  const [bioData, setBioData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBioData({ ...bioData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(bioData);
    setCopied(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Personal Bio-Data Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={bioData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={bioData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={bioData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address:</label>
            <textarea
              name="address"
              value={bioData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>

        {submittedData && (
          <div className="mt-6 p-4 bg-gray-50 border rounded">
            <h3 className="text-xl mb-4">Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>

            <CopyToClipboard
              text={`Name: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nAddress: ${submittedData.address}`}
              onCopy={() => setCopied(true)}
            >
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
                Copy Data
              </button>
            </CopyToClipboard>
            {copied && <span className="text-green-500 ml-2">Copied!</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
