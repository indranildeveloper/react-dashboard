import { FC } from "react";
import { SlBadge } from "react-icons/sl";
import { useAppSelector } from "../hooks/useAppDispatch";

const ProductImage: FC = () => {
  const { product } = useAppSelector((state) => state.product);

  const { picture, name } = product;

  return (
    <>
      <img src={picture} alt={name} className="h-80 w-full object-contain" />
      <div className="flex items-center absolute top-0 left-0 shadow rounded-tl-md rounded-br-md bg-white">
        <div className="p-2 bg-primary rounded-tl-md rounded-br-md text-white">
          <SlBadge className="text-xl" />
        </div>
        <p className="text-xl px-4">Patent</p>
      </div>
    </>
  );
};

export default ProductImage;
