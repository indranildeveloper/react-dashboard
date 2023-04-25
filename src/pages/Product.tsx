import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMPurify from "dompurify";
import { BiHomeAlt2 } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { getProduct } from "../features/product/productSlice";
import ProductImage from "../components/ProductImage";
import CompanyInfo from "../components/CompanyInfo";
import ProductVideo from "../components/ProductVideo";
import OfferDetails from "../components/OfferDetails";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";

const Product = () => {
  const { product, isError, isLoading, message } = useAppSelector(
    (state) => state.product
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const { name, description } = product;

  const sanitizedDescription = DOMPurify.sanitize(description || "", {
    ALLOWED_TAGS: ["p"],
  });

  if (isError) {
    toast.error(message);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="flex pt-6 gap-10">
          <Sidebar />

          <div className="right">
            <div className="header mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-500">
                <BiHomeAlt2 /> <HiChevronRight className="text-xl" />{" "}
                <span>Offers</span> <HiChevronRight className="text-xl" />{" "}
                {name}
              </div>
              <Link to="/product/edit">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-950">
                  Edit
                </button>
              </Link>
            </div>
            <div className="product">
              <div className="border rounded-md bg-white">
                <div className="flex">
                  <div className="w-[60%] border-r-2 relative">
                    <ProductImage />
                    <div className="p-6">
                      <h2 className="font-semibold">{name}</h2>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {sanitizedDescription}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <CompanyInfo />
                </div>
              </div>

              {/* Video */}
              <ProductVideo />
              {/* Offer Details */}
              <OfferDetails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
