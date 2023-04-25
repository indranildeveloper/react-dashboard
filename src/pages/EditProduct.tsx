import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { FaCheck } from "react-icons/fa";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import {
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Code,
} from "@ckeditor/ckeditor5-basic-styles";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { Undo } from "@ckeditor/ckeditor5-undo";
import { Clipboard } from "@ckeditor/ckeditor5-clipboard";
import { List, TodoList } from "@ckeditor/ckeditor5-list";
import { Font } from "@ckeditor/ckeditor5-font";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Link as CKLink } from "@ckeditor/ckeditor5-link";

import CompanyInfo from "../components/CompanyInfo";
import ProductImage from "../components/ProductImage";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { getProduct, updateProduct } from "../features/product/productSlice";
import Loading from "../components/Loading";

const EditProduct = () => {
  const { product, isLoading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  interface IFormData {
    productName: string;
    productDescription: string;
    productVideo: string;
  }

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const { name, description, video } = product;

  const [formData, setFormData] = useState<IFormData>({
    productName: name || "",
    productDescription: description || "",
    productVideo: video || "",
  });

  const { productName, productDescription, productVideo } = formData;

  const editorConfiguration = {
    plugins: [
      Essentials,
      Bold,
      Italic,
      Strikethrough,
      Paragraph,
      Undo,
      Clipboard,
      List,
      Font,
      Heading,
      Subscript,
      Superscript,
      Code,
      TodoList,
      Indent,
      BlockQuote,
      CodeBlock,
      CKLink,
    ],
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "|",
      "fontfamily",
      "fontsize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "strikethrough",
      "subscript",
      "superscript",
      "code",
      "|",
      "link",
      "blockQuote",
      "codeBlock",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "outdent",
      "indent",
    ],
  };

  const handleSubmit = () => {
    // dispatch(updateProduct());

    console.log(formData);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto">
        <div className="flex pt-6 gap-10">
          <Sidebar />

          <div className="right flex-1">
            <div className="header mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Offer Title</h2>
              </div>
              <Link to="/product">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-950">
                  View Offer
                </button>
              </Link>
            </div>

            <div className="product">
              <div className="border rounded-md bg-white">
                <div className="flex">
                  <div className="w-[60%] border-r-2 relative">
                    <ProductImage />
                    <div className="p-4">
                      <div>
                        <input
                          type="text"
                          className="border-2 w-full p-2 rounded-md"
                          placeholder="Edit Title"
                          value={productName}
                          onChange={(e) => {
                            setFormData((prevState) => ({
                              ...prevState,
                              productName: e.target.value,
                            }));
                          }}
                        />
                        <div className="mt-4">
                          {/* Editor */}
                          <CKEditor
                            editor={ClassicEditor}
                            config={editorConfiguration}
                            data={DOMPurify.sanitize(productDescription)}
                            onReady={(editor) => {
                              // You can store the "editor" and use when it is needed.
                              console.log("Editor is ready to use!");
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setFormData((prevState) => ({
                                ...prevState,
                                productDescription: data,
                              }));
                            }}
                            onBlur={(event, editor) => {
                              console.log("Blur.");
                            }}
                            onFocus={(event, editor) => {
                              console.log("Focus.");
                            }}
                          />
                          {/* Editor */}

                          <div className="flex items-center justify-end mt-3 gap-4">
                            <button type="button">Cancel</button>
                            <button
                              type="button"
                              className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-950"
                              onClick={handleSubmit}
                            >
                              <FaCheck /> Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CompanyInfo />
                </div>
              </div>

              <div className="border mt-6 mb-6 p-6 bg-white rounded-md">
                <h2>Video</h2>
                <input
                  type="text"
                  className="border-2 w-full p-2 rounded-md mt-2"
                  value={productVideo}
                  onChange={(e) => {
                    setFormData((prevState) => ({
                      ...prevState,
                      productVideo: e.target.value,
                    }));
                  }}
                  placeholder="Enter video URL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
