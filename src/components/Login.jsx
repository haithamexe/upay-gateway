import React from "react";
import { useEffect } from "react";

const Login = () => {
  const [registerData, setRegisterData] = React.useState({
    fullName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "F1") {
        e.preventDefault();
        setRegisterData({
          email: "testuser@example.com",
          password: "password123",
        });
      }
    });

    return () => {
      document.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      document.removeEventListener("keydown", (e) => {
        if (e.key === "F1" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
          e.preventDefault();
        }
      });
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-xl font-bold w-full text-center">Login</h1>

        <label className="text-sm text-gray-600">Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 p-2 rounded"
          name="email"
          value={registerData.email}
          onChange={handleChange}
        />
        <label className="text-sm text-gray-600">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 p-2 rounded"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
