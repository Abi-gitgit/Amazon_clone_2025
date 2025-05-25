import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/Auth/SignUp";
import Landing from "./pages/Landing/Landing";
import Results from './pages/Results/Results'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
