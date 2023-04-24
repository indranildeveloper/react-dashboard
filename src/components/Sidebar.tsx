import { BiHomeAlt2 } from "react-icons/bi";
import UserInfo from "./UserInfo";
import { FiUsers } from "react-icons/fi";
import { GoOrganization } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar_menu">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 w-[300px]">
          <UserInfo />
        </div>

        <ul className="flex flex-col gap-6">
          <li className="flex items-center text-xl gap-2">
            <BiHomeAlt2 /> Home
          </li>
          <li className="flex items-center text-xl gap-2">
            <FiUsers /> Members
          </li>
          <li className="flex items-center text-xl gap-2 justify-between">
            <p className="flex items-center gap-1">
              <GoOrganization /> Organizations
            </p>
            <HiChevronDown className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
