import React from "react";

const Home = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center  ">
      <section className="flex flex-col items-center justify-center  w-1/4">
        <img
          src="/images/logo.png"
          alt="Home Illustration"
          className="w-20 h-auto mb-2"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to U-Pay</h1>
        <p className="text-xl mb-8">Your trusted payment gateway solution</p>
      </section>
      <section className="flex flex-col  justify-center gap-2 w-1/4">
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600">
            Sign Up
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600">
          Documentation
        </button>
      </section>
    </div>
  );
};

export default Home;
