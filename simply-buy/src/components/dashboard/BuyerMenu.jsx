import { NavLink } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import wishlistIcon from '../../assets/wishlist.png';

const BuyerMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/my-wishlist"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BsCartDash className="w-5 h-5" />
        <img src={wishlistIcon} alt="wishlist" className="w-5 h-5" />

        <span className="mx-4 font-medium">My Cart</span>
      </NavLink>
    </>
  );
};

export default BuyerMenu;
