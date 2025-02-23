import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { addProducts } from "../../../api/products";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();

  const categories = ["Earring", "Ring", "Necklace", "Bracelet"];

  const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;

  const onSubmit = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.productImage[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, brandName, category, amount, price, description } = data;
          const productData = {
            name,
            brandName,
            category,
            description,
            productImage: imgURL,
            amount: parseInt(amount),
            price: parseFloat(price),
            sellerName: user?.displayName || "unknown",
            sellerEmail: user?.email || "anonymous",
            totalSold: 0,
          };

          addProducts(productData)
            .then((resData) => {
              console.log(resData);
              if (resData.insertedId) {
                reset();
                toast.success("Added successfully");
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="px-8 pt-36 pb-16">
      <div className="border-2 border-[#C29958] rounded-lg">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white bg-opacity-75 shadow-lg"
        >
          <div className="px-8 pt-6 pb-4 mb-2">
            <div className="flex items-center gap-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Product Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="text"
                  placeholder="Enter product Name"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Product Image
                </label>
                <input
                  type="file"
                  {...register("productImage", { required: true })}
                  className="file-input file-input-bordered w-full]"
                />
                {errors.productImage && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
            </div>
            {/* updating here */}
            <div className="flex items-center gap-4">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="brand"
                >
                  Brand Name
                </label>
                <input
                  {...register("brandName", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="text"
                  placeholder="Enter class Name"
                />
                {errors.brandName && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                {/* select here */}
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-[#C29958] rounded-md"
                  name="category"
                  {...register("category", { required: true })}
                >
                  {categories.map((category, idx) => (
                    <option value={category} key={idx}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-red-500">Select a category</span>
                )}
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sellerName"
                >
                  Seller Name
                </label>
                <input
                  // {...register('sellerName')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="text"
                  defaultValue={user?.displayName || "Unknown"}
                  // readOnly
                  disabled
                />
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sellerEmail"
                >
                  Seller Email
                </label>
                <input
                  // {...register('SellerEmail')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="email"
                  defaultValue={user?.email}
                  // readOnly
                  disabled
                />
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  {...register("amount", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="number"
                />
                {errors.amount && (
                  <span className="text-red-500">Required</span>
                )}
              </div>
              <div className="mb-4 w-1/2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
                  type="number"
                />
                {errors.price && <span className="text-red-500">Required</span>}
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                {...register('description', {required: true})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
              ></textarea>
              {errors.description && <span className="text-red-500">Required</span>}
            </div>

            {/* <input type="number" {...register('rating')} className="border hidden" defaultValue={5} readOnly/> */}

            {/* add button */}
            <div className="flex items-center justify-between">
              <button
                className="bg-[#C29958] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:bg-black hover-text-white transition"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
