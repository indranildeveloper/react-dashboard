import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
