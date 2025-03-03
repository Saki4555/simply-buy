import useProductsProvider from "../../hooks/useProductsProvider";

const SortSelector = () => {
  const { sortOption, setSortOption} = useProductsProvider();
  // console.log(sortOption);

 
  return (

    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="select select-bordered w-full lg:w-1/6">
      <option value='asc'>Price Low to High</option>
      <option value='dsc'>Price High to Low</option>
    </select>
  );
};

export default SortSelector;
