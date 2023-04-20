import { useState, useEffect } from "react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { getProduct } from "../features/product/productSlice";

const Product = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);

  return <div>Product</div>;
};
export default Product;
