import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import the envelope icon
import { AiFillGoogleCircle } from "react-icons/ai";

const SignInOne = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(name, email, password);
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex items-center mb-6">
          <FaEnvelope className="text-gray-800 text-2xl mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Basement</h1>
        </div>
        <h2 className="text-xl font-semibold mb-4">Keep your online business organized</h2>
        <p className="text-gray-600 mb-6">Sign up to start your 30 days free trial</p>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full mb-6">
          <span className="flex items-center">
            <AiFillGoogleCircle className="w-6 h-6 mr-2" />
            Sign in with Google
          </span>
        </button>
        <p className="text-center text-gray-600 mb-4">or</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password*
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-blue-500">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default SignInOne;