import axios from "axios";

export const addProducts = async (productData) => {
  const token = localStorage.getItem("access-token");
  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/add-products`,
    productData,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return await res.data;
};

export const getProducts = async (search, toFilter, page) => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/all-products?title=${search}&page=${page}&limit=9&category=${toFilter}`);
  return await res.data;
};
