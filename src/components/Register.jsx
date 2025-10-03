import React from "react";
import { useEffect } from "react";
const Register = () => {
  const [registerData, setRegisterData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    country: "",
    phoneNumber: "",
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
          fullName: "Test User",
          email: "testuser@example.com",
          password: "password123",
          confirmPassword: "password123",
          companyName: "Test Company",
          country: "Test Country",
          phoneNumber: "1234567890",
        });
      }
    });

    // document.addEventListener("keydown", (e) => {
    //   if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    //     e.preventDefault();
    //   }
    // });

    return () => {
      document.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
      document.removeEventListener("keydown", (e) => {
        if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
          e.preventDefault();
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="text-xl font-bold w-full text-center">
        Apply for an Account
      </h1>
      <label className="text-sm text-gray-600">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </label>
      <label className="text-sm text-gray-600">Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 p-2 rounded"
        name="fullName"
        value={registerData.fullName}
        onChange={handleChange}
      />
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
      <label className="text-sm text-gray-600">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="border border-gray-300 p-2 rounded"
        name="confirmPassword"
        value={registerData.confirmPassword}
        onChange={handleChange}
      />
      <label className="text-sm text-gray-600">Company Name</label>
      <input
        type="text"
        placeholder="Company Name"
        className="border border-gray-300 p-2 rounded"
        name="companyName"
        value={registerData.companyName}
        onChange={handleChange}
      />
      <label className="text-sm text-gray-600">Country</label>
      <input
        type="text"
        placeholder="Country"
        className="border border-gray-300 p-2 rounded"
        name="country"
        value={registerData.country}
        onChange={handleChange}
      />
      <label className="text-sm text-gray-600">phone number</label>
      <input
        type="number"
        placeholder="Phone Number"
        className="border border-gray-300 p-2 rounded"
        name="phoneNumber"
        value={registerData.phoneNumber}
        onChange={handleChange}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
