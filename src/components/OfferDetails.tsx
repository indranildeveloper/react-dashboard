import { CiSettings } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import { TbChessKnight, TbMoneybag } from "react-icons/tb";
import { useAppSelector } from "../hooks/useAppDispatch";

const OfferDetails = () => {
  const { product } = useAppSelector((state) => state.product);

  const { businessModels, trl, investmentEffort } = product;

  return (
    <div className="border mt-6 mb-6 p-6 bg-white rounded-md">
      <h2 className="font-semibold mb-2">Offer Details</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
        {/* -Technologies- */}
        <div className="text-gray-500">
          <p className="flex items-center">
            <CiSettings className="text-xl" />{" "}
            <span className="text-sm">Technology</span>
          </p>
          <ul className="flex gap-2 mt-2 ml-4">
            <li className="border bg-gray-200 px-4 py-1 text-xs rounded-full">
              Label 1
            </li>
            <li className="border bg-gray-200 px-4 py-1 text-xs rounded-full">
              Label 2
            </li>
            <li className="border bg-gray-200 px-4 py-1 text-xs rounded-full">
              Label 3
            </li>
          </ul>
        </div>
        {/* -Business Model- */}
        <div className="text-gray-500">
          <p className="flex items-center">
            <TbChessKnight className="text-xl" />{" "}
            <span className="text-sm">Business Model</span>
          </p>
          <ul className="flex gap-2 mt-2 ml-4 flex-wrap">
            {businessModels &&
              businessModels.map((item) => (
                <li
                  key={item.id}
                  className="border bg-gray-200 px-4 py-1 text-xs rounded-full"
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>

        {/* -TRL- */}
        <div className="text-gray-500">
          <p className="flex items-center">
            <HiOutlineClock className="text-xl" />{" "}
            <span className="text-sm">TRL</span>
          </p>
          <ul className="flex gap-2 mt-2 ml-4">
            <li className="border bg-gray-200 px-4 py-1 text-xs rounded-full">
              {trl && trl?.name}
            </li>
          </ul>
        </div>

        {/* -- */}
        <div className="text-gray-500">
          <p className="flex items-center">
            <TbMoneybag className="text-xl" />{" "}
            <span className="text-sm">Technology</span>
          </p>
          <ul className="flex gap-2 mt-2 ml-4">
            <li className="border bg-gray-200 px-4 py-1 text-xs rounded-full">
              {investmentEffort}
            </li>
          </ul>
        </div>
        {/* -- */}
      </div>
    </div>
  );
};

export default OfferDetails;
