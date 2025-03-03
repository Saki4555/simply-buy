import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import SellerRoutes from "./SellerRoutes";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";
import BuyerRoutes from "./BuyerRoutes";
import MyWishList from "../pages/dashboard/buyer/MyWishList";
import Success from "../pages/payment/Success";
import Cancel from "../pages/payment/Cancel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard/my-wishlist',
        element: <BuyerRoutes><MyWishList /> </BuyerRoutes>
        
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoutes>
            <MyProducts />
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoutes>
            <AddProducts />
          </SellerRoutes>
        ),
      },
    ],
  },
]);

export default router;
