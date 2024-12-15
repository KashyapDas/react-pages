import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa'; 


const SignUpFive = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(name, email, password);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleTermsCheck = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  return (
    <div className="bg-gradient-to-br from-purple-200 to-blue-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
        <p className="text-gray-600 mb-4">Already have an account? <a href="#" className="text-blue-500">Log In</a></p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="button" className="absolute top-0 right-0 m-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded">
                <span>&times;</span>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="button" className="absolute top-0 right-0 m-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded">
                <span>&times;</span>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="absolute top-0 right-0 m-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <span>&times;</span> : <span>&bull;</span>}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold">
              <input type="checkbox" className="mr-2" checked={isTermsChecked} onChange={handleTermsCheck} />
              I agree to the Platform's <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policies</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!isTermsChecked}
          >
            Create account
          </button>
          <p className="text-center text-gray-600 mt-4">or sign up with</p>
          <div className="flex justify-center mt-4">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded mr-2">
              <FaGoogle className="mr-2" /> Sign up with Google
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
              <FaFacebookF className="mr-2" /> Sign up with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFive;