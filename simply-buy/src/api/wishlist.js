import axios from "axios";

export const addToWishList = async (userEmail, productId) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/wishlist/add`,
    { userEmail, productId }
  );
  return res.data;
};

export const removeFromWishlist = async (userEmail, productId) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/wishlist/remove`,
    {
      userEmail,
      productId,
    }
  );
  return res.data;
};

export const getWishlistProducts = async (email, token) => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/wishlist/${email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
