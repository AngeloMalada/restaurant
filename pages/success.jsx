import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import NewestOrder from "../components/NewestOrder";

const Success = () => {
  return (
    <div>
      <Navbar />
      <NewestOrder />
    </div>
  );
};

export default Success;
