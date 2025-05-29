import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders/Orders";
import Payment from "./pages/Payment/Payment";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/Auth/SignUp";
import Landing from "./pages/Landing/Landing";
import Results from './pages/Results/Results';
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default Routing;
