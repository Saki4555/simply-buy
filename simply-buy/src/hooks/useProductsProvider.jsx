import { useContext } from "react";
import { productsDataContext } from "../providers/ProductsDataProvider";


const useProductsProvider = () => {
    return useContext(productsDataContext);
};

export default useProductsProvider;