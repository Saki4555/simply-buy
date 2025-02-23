import { NavLink } from "react-router-dom";
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
const SellerMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/my-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <MdHomeWork className="w-5 h-5" />

        <span className="mx-4 font-medium">My Products</span>
      </NavLink>
      <NavLink
        to="/dashboard/add-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsFillHouseAddFill className="w-5 h-5" />

        <span className="mx-4 font-medium">Add Products</span>
      </NavLink>
    </>
  );
};

export default SellerMenu;
