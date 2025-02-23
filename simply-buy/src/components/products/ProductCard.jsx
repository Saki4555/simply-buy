import { addToWishList } from "../../api/wishlist";
import useUserData from "../../hooks/useUserData";
import useProductsProvider from "../../hooks/useProductsProvider";
import toast from "react-hot-toast";
const ProductCard = ({ product }) => {
  const { wishlistLengthUpdater, setWishlistLengthUpdater } =
    useProductsProvider();
  // console.log({ wishlistLengthUpdater });

  const [userData] = useUserData();
  const handleAddToWishList = () => {
    if(userData.email){
      addToWishList(userData.email, product._id)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setWishlistLengthUpdater(!wishlistLengthUpdater);
          toast.success("Added to Wishlist Successfully");
          return;
        }
        if (data.matchedCount) {
          toast.error("This product is already in your wishlist");
          return;
        }
      })
      .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform border border-gray-200 bg-white">
      <img
        src={product.productImage}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        {/* <p className="text-sm text-gray-600 mt-1">{product.description}</p> */}
        <p className="text-md font-bold text-blue-600">${product.price}</p>
        <p className="text-xs text-gray-400 mt-1">Sold: {product.totalSold}</p>
        <button
          onClick={handleAddToWishList}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
