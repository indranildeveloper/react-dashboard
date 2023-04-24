import { useAppSelector } from "../hooks/useAppDispatch";

const UserInfo = () => {
  const { product } = useAppSelector((state) => state.product);

  const { user, company } = product;

  return (
    <>
      <img
        src={user?.profilePicture}
        alt={user?.firstName}
        className="h-20 w-20 rounded-full"
      />
      <div>
        <p className="font-semibold">
          {user?.firstName} {user?.lastName}
        </p>
        <p>{company?.name}</p>
      </div>
    </>
  );
};
export default UserInfo;
