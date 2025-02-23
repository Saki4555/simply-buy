const EmptyWishlist = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img
        src="https://grgarments.in/images/product-not-found.png" // Empty wishlist image (use your own)
        alt="Empty Wishlist"
        className="mx-auto mb-6"
        width="150"
      />
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Your Wishlist is Empty
      </h2>
      <p className="text-lg text-gray-500 mb-6">
        Looks like you haven’t added any products to your wishlist yet. Start
        shopping now!
      </p>
      <button
        onClick={() => (window.location.href = "/shop")} // Redirect to the shopping page or your product page
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Start Shopping
      </button>
    </div>
  );
};

export default EmptyWishlist;
