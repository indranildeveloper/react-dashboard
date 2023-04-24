import axios from "axios";

const API_URL = "/api/product/6781";

const getProduct = async () => {
  const response = await axios.get(API_URL);
  const data = response.data;
  return data;
};

const updateProduct = async () => {
  const response = await axios.get(API_URL);
  const data = response.data;
  return data;
};

const productService = { getProduct, updateProduct };

export default productService;
