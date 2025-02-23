import { removeFromWishlist } from "../../api/wishlist";
import useProductsProvider from "../../hooks/useProductsProvider";
import useUserData from "../../hooks/useUserData";
import toast from "react-hot-toast";
const WishlistCard = ({ product }) => {
  const [userData] = useUserData();
  const { refetchWishlistProducts, setRefetchWishlistProducts } =
    useProductsProvider();
  const handleRemoveFromWishlist = () => {
    if (userData.email) {
      removeFromWishlist(userData.email, product._id)
        .then(() => {
          setRefetchWishlistProducts(!refetchWishlistProducts)
          toast.success("Removed Successfully");
          
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.productImage}
        alt="Product Image"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <p className="text-gray-600">Category: {product.category}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xl font-bold text-gray-800">${product.price}</p>
        <p className="text-sm text-gray-500">Amount: {product.amount}</p>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Seller: {product.sellerName}</p>
        <p>Email: {product.sellerEmail}</p>
        <p>Total Sold: {product.totalSold}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleRemoveFromWishlist}
          className="mt-3 w-full opacity-90 btn btn-error text-white"
        >
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
