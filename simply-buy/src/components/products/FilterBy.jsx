import useProductsProvider from "../../hooks/useProductsProvider";

const FilterBy = () => {
  const { toFilter, setToFilter } = useProductsProvider();
  console.log(toFilter);
  const categories = [
    { id: 1, name: "Smartphones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Computers" },
    { id: 4, name: "Wearables" },
    { id: 5, name: "Audio" },
    { id: 6, name: "Gaming" },
    { id: 7, name: "Cameras" },
    { id: 8, name: "SmartHome" },
    { id: 9, name: "Power" },
    { id: 10, name: "Accessories" },
  ];

  return (
    <div className="w-full lg:w-1/4">
      <div className="p-4 border border-gray-300 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg"
          value={toFilter}
          onChange={(e) => setToFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBy;
