import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="middle-name" className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middle-name"
              name="middle-name"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="birth-date" className="block text-sm font-medium text-gray-700">
              Birth Date
            </label>
            <input
              type="date"
              id="birth-date"
              name="birth-date"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="col-span-3 sm:col-span-1">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
