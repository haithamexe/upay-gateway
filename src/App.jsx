import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:paymentParams" element={<Payment />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
export default App;
