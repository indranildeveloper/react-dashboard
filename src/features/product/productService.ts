import axios from "axios";
import IUpdateProduct from "../../interfaces/UpdateProduct";

const API_URL = "/api/product/6781";

const getProduct = async () => {
  const response = await axios.get(API_URL);
  const data = response.data;
  return data;
};

const updateProduct = async (product: IUpdateProduct) => {
  const response = await axios.put(API_URL, product);
  const data = response.data;
  return data;
};

const productService = { getProduct, updateProduct };

export default productService;
