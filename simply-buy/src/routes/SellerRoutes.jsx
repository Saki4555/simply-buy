import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth"
import useUserData from "../hooks/useUserData";
import PendingMessage from "../components/PendingMessage";
import RejectedMessage from "../components/RejectedMessage";

const SellerRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [userData, userDatLoading] = useUserData();
    const location = useLocation();

    if(loading || userDatLoading || !userData.role) return <Loader />
    if(user && userData.role === 'seller'){
        if(userData.status === 'approved') return children;
        else if(userData.status === 'pending') return <PendingMessage />
        else return <RejectedMessage />
    }
    if(user && userData.role === 'seller' && userData.status === 'approved') return children;
    <Navigate to='/' state={{from: location}} replace />
}

export default SellerRoutes;