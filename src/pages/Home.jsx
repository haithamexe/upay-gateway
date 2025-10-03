import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";

const Home = () => {
  const navigate = useNavigate();
  const [loginOpened, setLoginOpened] = useState(false);
  const [registerOpened, setRegisterOpened] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setLoginOpened(false);
        setRegisterOpened(false);
      }
    });

    return () => {
      document.removeEventListener("mousedown", (event) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target)
        ) {
          setLoginOpened(false);
          setRegisterOpened(false);
        }
      });
    };
  }, []);

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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600"
            onClick={() => setLoginOpened(true)}
          >
            Login
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600"
            onClick={() => setRegisterOpened(true)}
          >
            Apply
          </button>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600">
          Documentation
        </button>
      </section>

      {loginOpened || registerOpened ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-20 w-1/4"
            ref={containerRef}
          >
            {loginOpened && <Login />}
            {registerOpened && <Register />}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Home;
