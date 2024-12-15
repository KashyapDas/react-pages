import React, { useState } from 'react';
import { FaTriangleExclamation } from "react-icons/fa6";

const SignUpFour = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(name, email, country);
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex items-center mb-6">
          <FaTriangleExclamation className="text-purple-600 text-3xl mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">easyclass</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Get started</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <select
              id="country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {/* Add your country options here */}
            </select>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <p className="text-gray-600 text-sm text-center">
            By signing up, I agree to the Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpFour;