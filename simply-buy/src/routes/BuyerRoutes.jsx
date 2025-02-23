import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import useUserData from "../hooks/useUserData";

const BuyerRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [userData,userDatLoading] = useUserData();

  if (loading || userDatLoading || !userData.role) return <Loader />;
  if (user && userData.role === 'buyer') return children;
  <Navigate to="/" state={{ from: location }} replace />;
};

export default BuyerRoutes;
