import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/logo/logo.webp";

import { GrLogout } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

import { AiOutlineBars } from "react-icons/ai";
import SellerMenu from "./SellerMenu";
import BuyerMenu from "./BuyerMenu";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";

const Sidebar = () => {
  const navigate = useNavigate();

  const { user, logOut } = useAuth();

  const [userData] = useUserData();
  // console.log(userData);

  const [isActive, setActive] = useState("false");

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <p>saki</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 mt-5 md:mt-0 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <Link to="/">
              <div className="w-full bg-primary hidden md:flex py-3 justify-center items-center  rounded mx-auto text-gray-200">
                <p className="font-bold  font-serif text-xl">Simply Buy</p>
              </div>
            </Link>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                {user?.photoURL ? (
                  <img
                    className="object-cover w-24 h-24 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaUserCircle className="w-24 h-24"/>
                )}
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {userData && userData.role === "seller" ? (
                <SellerMenu />
              ) : (
                <BuyerMenu />
              )}
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
