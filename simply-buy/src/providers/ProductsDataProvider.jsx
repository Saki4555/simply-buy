import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/products";


export const productsDataContext = createContext(null);
const ProductsDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [toFilter, setToFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [wishlistLengthUpdater, setWishlistLengthUpdater] = useState(false);
  const [refetchWishlistProducts, setRefetchWishlistProducts] = useState(false);
 

  
  useEffect(() => {
    setProductsLoading(true);
    getProducts(search, toFilter, page)
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.totalProducts / 9));
        setProductsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setProductsLoading(false);
      });
  }, [page, search, sortOption, toFilter]);

 
  const productsInfo = {
    products,
    productsLoading,
    search,
    setSearch,
    sortOption,
    setSortOption,
    toFilter,
    setToFilter,
    page,
    setPage,
    totalPages,
    wishlistLengthUpdater,
    setWishlistLengthUpdater,
    refetchWishlistProducts, setRefetchWishlistProducts
  };

  return (
    <productsDataContext.Provider value={productsInfo}>
      {children}
    </productsDataContext.Provider>
  );
};

export default ProductsDataProvider;
