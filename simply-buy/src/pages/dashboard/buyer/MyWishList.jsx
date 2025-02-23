import Loader from "../../../components/Loader";
import useWishlistProducts from "../../../hooks/useWishlistProducts";
import WishlistCard from "../../../components/dashboard/WishlistCard";
import EmptyWishlist from "../../../components/dashboard/EmptyWishlist";

const MyWishList = () => {
  const [wishlistProducts, wishlistProductsLoading] = useWishlistProducts();
  console.log(wishlistProductsLoading);
//   console.log(wishlistProducts);
  return (
    <>
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">My Wish List</h1>
        </header>

        {wishlistProductsLoading ? (
          <Loader />
        ) : wishlistProducts.length === 0 ? <EmptyWishlist /> :  (
          <>
            {" "}
            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistProducts.map((product, index) => (
                <WishlistCard key={index} product={product} />
              ))}
            </div>
            {/* Checkout Button */}
            <div className="mt-6">
              <button className="w-full text-white btn btn-success">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyWishList;
