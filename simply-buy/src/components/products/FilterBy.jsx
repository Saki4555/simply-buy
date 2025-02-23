import useProductsProvider from "../../hooks/useProductsProvider";

const FilterBy = () => {
  const {toFilter,setToFilter} = useProductsProvider();
  return (
    <div className="w-1/4 hidden md:block">
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={toFilter}
          onChange={(e) => setToFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBy;
