import { FaSearch } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { HiChevronDown, HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src="./logo.svg" alt="logo" className="h-6" />
        </div>

        <div className="search relative">
          <input
            type="text"
            className="border py-1 px-3 w-[500px] rounded-md"
            placeholder="Enter interests, keyword, company name, etc."
          />
          <FaSearch className="text-black absolute top-1/2 -translate-y-1/2 right-2" />
        </div>

        <div className="icons">
          <ul className="flex items-center gap-4">
            <li>
              <BsChatDots />
            </li>
            <li className="flex items-center">
              <span>EN</span> <HiChevronDown className="text-xl" />
            </li>
            <li>
              <HiOutlineBell className="text-xl" />
            </li>
            <li className="flex items-center">
              <img
                src="https://img.innoloft.com/users/user_8d48197d.png"
                alt="profile"
                className="h-6 w-6 rounded-full"
              />
              <HiChevronDown className="text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
