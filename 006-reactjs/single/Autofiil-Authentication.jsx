import React, { useState } from 'react';


const data = [
  {
    nidNumber: '1234567890123',
    fullName: 'Ali Khan',
    dateOfBirth: '1990-01-01',
    placeOfBirth: 'Karachi',
    gender: 'Male',
    nationality: 'Pakistani',
    address: '123 Main St, Karachi',
    previousAddresses: ['456 Secondary St, Lahore'],
    maritalStatus: 'Single',
    occupation: 'Engineer',
    education: 'Bachelor\'s Degree',
    fatherName: 'Ahmed Khan',
    motherName: 'Sara Khan',
    mobileNumber: '03001234567',
    nidRegistrationCode: 'REG123',
  },
  {
    nidNumber: '9876543210987',
    fullName: 'Sara Ali',
    dateOfBirth: '1992-02-02',
    placeOfBirth: 'Lahore',
    gender: 'Female',
    nationality: 'Pakistani',
    address: '789 Tertiary St, Lahore',
    previousAddresses: ['101 Secondary St, Islamabad'],
    maritalStatus: 'Married',
    occupation: 'Doctor',
    education: 'Master\'s Degree',
    fatherName: 'Irfan Ali',
    motherName: 'Aisha Ali',
    mobileNumber: '03219876543',
    nidRegistrationCode: 'REG456',
  },
];

const App = () => {
  const [formData, setFormData] = useState({
    nidNumber: '',
    fullName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    previousAddresses: '',
    maritalStatus: '',
    occupation: '',
    education: '',
    fatherName: '',
    motherName: '',
    mobileNumber: '',
    nidRegistrationCode: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [verificationMobile, setVerificationMobile] = useState('');
  const [error, setError] = useState('');

  const handleNIDChange = (e) => {
    const nidNumber = e.target.value;
    const personData = data.find(person => person.nidNumber === nidNumber);

    if (personData) {
      setFormData({
        ...personData,
        previousAddresses: personData.previousAddresses.join(', '),
      });
      setError('');
    } else {
      setFormData({
        nidNumber: nidNumber,
        fullName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        gender: '',
        nationality: '',
        address: '',
        previousAddresses: '',
        maritalStatus: '',
        occupation: '',
        education: '',
        fatherName: '',
        motherName: '',
        mobileNumber: '',
        nidRegistrationCode: '',
      });
      setError('NID Number not found');
    }
  };

  const handleMobileChange = (e) => {
    setVerificationMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationMobile === formData.mobileNumber) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Verification failed: Mobile number does not match.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="grid gap-4 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            NID Number:
            <input
              type="text"
              value={formData.nidNumber}
              onChange={handleNIDChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter NID Number"
            />
          </label>
          <label className="block">
            Full Name:
            <input
              type="text"
              value={formData.fullName}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Date of Birth:
            <input
              type="text"
              value={formData.dateOfBirth}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Place of Birth:
            <input
              type="text"
              value={formData.placeOfBirth}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Gender:
            <input
              type="text"
              value={formData.gender}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Nationality:
            <input
              type="text"
              value={formData.nationality}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Address:
            <input
              type="text"
              value={formData.address}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Previous Addresses:
            <input
              type="text"
              value={formData.previousAddresses}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Marital Status:
            <input
              type="text"
              value={formData.maritalStatus}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Occupation:
            <input
              type="text"
              value={formData.occupation}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Education:
            <input
              type="text"
              value={formData.education}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Father's Name:
            <input
              type="text"
              value={formData.fatherName}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block">
            Mother's Name:
            <input
              type="text"
              value={formData.motherName}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          {/* <label className="block">
            Mobile Number:
            <input
              type="text"
              value={formData.mobileNumber}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label> */}
          <label className="block">
            NID Registration Code:
            <input
              type="text"
              value={formData.nidRegistrationCode}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
            />
          </label>
          <label className="block md:col-span-2">
            Verify Mobile Number:
            <input
              type="text"
              value={verificationMobile}
              onChange={handleMobileChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter Mobile Number to Verify"
            />
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600">
          Submit
        </button>
        {error && <div className="mt-4 text-red-500">{error}</div>}
      </form>
      {submitted && (
        <div className="mt-8 p-4 border border-gray-300 rounded-md bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Submitted Data</h2>
          <pre className="whitespace-pre-wrap">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
