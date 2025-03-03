import { Link, NavLink } from "react-router-dom";
import UserDropDown from "./home/UserDropDown";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";
import wishlistIcon from '../assets/wishlist.png';


const Navbar = () => {
  const { user } = useAuth();
  const [userData, , wishlistLength] = useUserData();
  // console.log({wishlistLength});
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
           <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold font-serif">Simply Buy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          {/* <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 items-center">
         {
         (user && userData && userData.role === 'buyer')  &&  <button className="btn btn-sm">
          <img src={wishlistIcon} alt="wishlist"  className="w-7"/>
          <div className="badge badge-primary badge-md">
            {wishlistLength}
          </div>
        </button>
         }
          {
            !user && <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          }
          {/* <Link to="/signup">
            {" "}
            <button className="btn">Signup</button>
          </Link> */}
          {user?.email && <UserDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
