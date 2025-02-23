import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth"
import useUserData from "../hooks/useUserData";

const SellerRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [userData] = useUserData();
    const location = useLocation();

    if(loading || !userData.role) return <Loader />
    if(user && userData.role === 'seller') return children;
    <Navigate to='/' state={{from: location}} replace />
}

export default SellerRoutes;