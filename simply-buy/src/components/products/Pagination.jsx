import useProductsProvider from "../../hooks/useProductsProvider";

const Pagination = () => {
  const { page, totalPages, setPage } = useProductsProvider();
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center pt-6 pb-16">
      <div className="join">
        <button
          onClick={() => handlePageChange(page - 1)}
          className={`join-item btn ${page === 1 ? "btn-disabled" : ""}`}
        >
          «
        </button>
        <p className="join-item btn">Page {page}</p>
        <button
          onClick={() => handlePageChange(page + 1)}
          className={`join-item btn ${
            page === totalPages ? "btn-disabled" : ""
          }`}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
