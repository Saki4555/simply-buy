
import Searchbar from "../components/products/Searchbar";
import SortSelector from "../components/products/SortSelector";

import FilterBy from "../components/products/FilterBy";
import useProductsProvider from "../hooks/useProductsProvider";
import Loader from "../components/Loader";
import ProductCard from "../components/products/ProductCard";
import Pagination from "../components/products/Pagination";



export default function Products() {


  const { products, productsLoading } = useProductsProvider();
  // console.log(products);
  // console.log(productsLoading);

  if(productsLoading) return <Loader />

  
  return (
    <div className="p-6 max-w-6xl mx-auto flex gap-6">
      {/* Sidebar for Category Filter */}
      <FilterBy />

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
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
