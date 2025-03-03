
import Searchbar from "../components/products/Searchbar";
import SortSelector from "../components/products/SortSelector";

import FilterBy from "../components/products/FilterBy";
import useProductsProvider from "../hooks/useProductsProvider";
import Loader from "../components/Loader";
import ProductCard from "../components/products/ProductCard";
import Pagination from "../components/products/Pagination";



export default function Products() {
  console.log(import.meta.env.VITE_BASE_URL);


  const { products, productsLoading, sortOption } = useProductsProvider();
  console.log({products, sortOption});


  if(productsLoading) return <Loader />

  
  return (
    <div className="p-6 max-w-6xl mx-auto lg:flex gap-6">
     
      <FilterBy />

     
      <div className="w-full md:w-3/4">
        <div className="flex w-full flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <Searchbar />
          <SortSelector />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
