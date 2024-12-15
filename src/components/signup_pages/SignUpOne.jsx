import React from 'react';

const SignUpOne = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-500 w-1/2 hidden md:block">
        <div className="h-full flex flex-col justify-center items-center px-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Join Us and Unlock Endless Possibilities!
          </h1>
          <p className="text-white text-lg mb-8">
            Welcome to Creativo, where your journey begins. Sign up now to access
            exclusive features, personalized recommendations, and seamless user
            experience.
          </p>
          
          <div className="flex text-white mt-4 w-full">
            <span className="mr-1">★</span>
            <span className="mr-1">★</span>
            <span className="mr-1">★</span>
            <span className="mr-1">★</span>
            <span className="mr-1">★</span>
          </div>
          <p className="text-white mt-2">
            "We love Creativo! our designers were using it for their projects, so
            we already knew what kind of design they want."
          </p>
          <div className="flex items-center w-full mt-3">
            <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                <img
                    src="https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg"
                    alt="Designer Avatar"
                    className="mr-4 bg-cover"
                />
            </div>
            
            <div>
              <p className="text-white font-bold">Jame Doe</p>
              <p className="text-white">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md px-8">
          <h2 className="text-2xl font-bold mb-4">Sign up to Creativo</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-medium mb-2">
                Your Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Create a Password
              </label>
              <input
                type="password"
                id="password"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="Create a Password"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block font-medium mb-2">
                Confirm Your Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border rounded-md py-2 px-3 w-full"
                placeholder="Confirm Your Password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" required />
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 w-full hover:bg-blue-600"
            >
              Create Account
            </button>
            <div className="mt-4 text-center">
              <span className="mr-2">Or</span>
              <button
                type="button"
                className="text-blue-500 hover:text-blue-600"
              >
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpOne;