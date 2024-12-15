import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const SignUpTwo = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-[#25C2A0] w-1/2 hidden md:block">
        <div className="h-full flex flex-col justify-center items-center px-16">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome Back!</h1>
          <p className="text-white text-lg mb-8">
            To keep connected with us please login with your personal info
          </p>
          <button className="bg-[#20ac8e] text-white rounded-full py-3 px-16 text-xl font-bold hover:bg-[#1c967b] ">
            SIGN IN
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
          <div className="flex justify-center mb-4">
            <a href="#" className="mx-2">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="mx-2">
              <FaGoogle className="w-6 h-6" />
            </a>
            <a href="#" className="mx-2">
              <BsLinkedin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center mb-4">or use your email for registration:</p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="border rounded-md py-2 px-3 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
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
            <button
              type="submit"
              className="bg-[#25C2A0] text-white rounded-md py-2 px-4 w-full hover:bg-[#1CA088]"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpTwo;