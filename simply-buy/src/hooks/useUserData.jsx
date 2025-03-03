import { useEffect, useState } from "react";
import useAuth from "./useAuth";

import { getUserData } from "../api/auth";
import useProductsProvider from "./useProductsProvider";

const useUserData = () => {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState({});
  const [userDatLoading, setUserDataLoading] = useState(true);
  const [wishlistLength, setWishlistLength] = useState(0);
  const { wishlistLengthUpdater} = useProductsProvider();

  useEffect(() => {
    if (user && !loading) {
      setUserDataLoading(true);
      getUserData(user?.email)
        .then((data) => {
          
          setUserData(data);
          setWishlistLength(data.wishList.length);
          setUserDataLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setUserDataLoading(false);
        });
    }
  }, [loading, user, wishlistLengthUpdater]);

  return [userData, userDatLoading, wishlistLength];
};

export default useUserData;
