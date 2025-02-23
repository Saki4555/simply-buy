import useProductsProvider from "../../hooks/useProductsProvider";

const Searchbar = () => {
  const { search, setSearch } = useProductsProvider();
  // console.log(search);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    // e.target.search.value = '';
  }
  return (
    
    <form onSubmit={handleSearch}><label className="input input-bordered w-full flex items-center gap-2">
    <input type="text" name="search" defaultValue={search} className="grow" placeholder="Search" />
   <button type="submit"> <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg></button>
  </label></form>
  );
};

export default Searchbar;
