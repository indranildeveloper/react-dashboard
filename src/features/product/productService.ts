import axios from "axios";

const API_URL = "/api/product/6781";

const getProduct = async () => {
  const response = await axios.get(API_URL);
  const data = response.data;

  console.log(data);
  return data;
};

const updateProduct = () => {
  //
};

const productService = { getProduct, updateProduct };

export default productService;
