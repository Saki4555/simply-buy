import { useEffect, useState } from "react";
import useUserData from "../../hooks/useUserData";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import useProductsProvider from "../../hooks/useProductsProvider";

const Success = () => {
  const [userData, userDatLoading] = useUserData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setWishlistLengthUpdater } = useProductsProvider();
  
  const [paymentVerified, setPaymentVerified] = useState(false); 

  useEffect(() => {
    const verifyPaymentAndClearWishlist = async () => {
      const sessionId = searchParams.get("session_id");
      console.log(sessionId);
      if (!sessionId || !userData?.email || userDatLoading || paymentVerified) return;

      
        const verificationResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/verify-payment`,
          { sessionId }
        );

        if (verificationResponse.data.success) {
          const res = await axios.patch(`${import.meta.env.VITE_BASE_URL}/wishlist/clear`, {
            userEmail: userData.email,
          });
          setWishlistLengthUpdater((prev) => !prev); 
          console.log(res.data);
          // console.log("Wishlist cleared successfully");

          setPaymentVerified(true); 
        } else {
          console.error("Payment verification failed");
        }
      
    };

    verifyPaymentAndClearWishlist();
  }, [searchParams, userData.email, userDatLoading, paymentVerified, setWishlistLengthUpdater]); 

  return (
    <div className=" min-h-80 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p>Your wishlist has been cleared.</p>
      <button onClick={() => navigate("/")} className="btn btn-success text-white mt-4">
        Go to Home
      </button>
    </div>
  );
};

export default Success;
