import React from "react";
import ProductComponent from "../../components/ProductComponent";
import Navbar from "../../components/Navbar";
import axios from "axios";

const Product = ({ singleProduct }) => {
  return (
    <div>
      <Navbar />
      <ProductComponent singleProduct={singleProduct} />
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${params.id}`
  );
  return {
    props: {
      singleProduct: res.data,
    },
  };
};
