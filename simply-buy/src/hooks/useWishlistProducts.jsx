import { useEffect, useState } from "react";
import { getWishlistProducts } from "../api/wishlist";
import useUserData from "./useUserData";
import useProductsProvider from "./useProductsProvider";


const useWishlistProducts = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [wishlistProductsLoading, setWishlistProductsLoading] = useState(true);
  const [userData] = useUserData();
  
  const { refetchWishlistProducts} = useProductsProvider();

  const token = localStorage.getItem("access-token");
  useEffect(() => {
    if ((userData.email  && token)) {
      // setWishlistProductsLoading(true);
      getWishlistProducts(userData.email, token)
        .then((data) => {
          // console.log(data);
          setWishlistProducts(data);
          setWishlistProductsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setWishlistProductsLoading(false);
        });
    }
  }, [token,  userData.email, refetchWishlistProducts]);

  return [wishlistProducts, wishlistProductsLoading];
};

export default useWishlistProducts;
