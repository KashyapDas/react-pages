import React from 'react';
import { FaGoogle, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

const SignUpThree = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#5B45FF] w-1/2 hidden md:block">
        <div className="h-full flex flex-col justify-center items-center px-16">
          <div className="flex items-center mb-4">
            <GiWorld className="text-5xl text-white mr-2" />
            <h1 className="text-5xl font-bold text-white">10 Hour College</h1>
          </div>
          <p className="text-white text-lg mb-8">
            Learn From World's Best Instructors Around The World.
          </p>
          <div className="flex space-x-4">
            <img src="https://i.pinimg.com/736x/e4/44/7f/e4447f47da162510de4d7073cf5147e5.jpg" alt="School Items" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <h2 className="text-2xl font-bold mb-4">Create Accout</h2>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                I agree to the terms of service and privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#6F73FF] text-white rounded-md py-2 px-4 w-full hover:bg-[#5258D6]"
            >
              Sign Up
            </button>
            <div className="mt-4 text-center">
              <p>Or Sign Up With</p>
              <div className="flex justify-center mt-2 space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaGoogle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpThree;