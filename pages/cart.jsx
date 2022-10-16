import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <ShoppingCart />
    </div>
  );
};

export default Cart;
