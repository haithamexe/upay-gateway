import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-[86dvh] ">
      <header className="flex items-center justify-between w-full p-5 py-2 h-16 bg-secondary border-b-1">
        <div className="flex items-center gap-2 h-full py-[10px]">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-full object-contain"
          />
          <h1 className="text-xl font-bold">U-Pay</h1>
        </div>
        <h1 className="text-xl font-bold">Team 16</h1>
      </header>
      <Outlet />
      <footer className="flex items-center justify-center h-16 w-full text-sm text-black bg-secondary border-t-1">
        Powered by Team 16 @ Fintech X Makers-IQ
      </footer>
    </div>
  );
};

export default Layout;
