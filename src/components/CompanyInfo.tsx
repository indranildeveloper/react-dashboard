import { FC } from "react";
import { useLocation } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import UserInfo from "./UserInfo";
import { useAppSelector } from "../hooks/useAppDispatch";
import AddressMap from "./AddressMap";
import Loading from "./Loading";

const CompanyInfo: FC = () => {
  const { product, isLoading } = useAppSelector((state) => state.product);
  const { company } = product;

  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="company flex-1 p-8">
      <h4 className="font-semibold">Offered By</h4>
      <img src={company?.logo} alt={company?.name} className="h-10" />
      <div className="flex items-center gap-2">
        <UserInfo />
      </div>

      <div className="location">
        <div className="text-gray-600 flex mt-4 items-start gap-2">
          <CiLocationOn className="text-2xl" />

          <div className="mb-4">
            <p>
              {company?.address.street} {company?.address.house},
            </p>
            <p>
              {company?.address.zipCode} {company?.address.city.name},{" "}
              {company?.address.country.name}
            </p>
          </div>
        </div>

        {location.pathname !== "/product/edit" && !isLoading && <AddressMap />}
      </div>
    </div>
  );
};

export default CompanyInfo;
