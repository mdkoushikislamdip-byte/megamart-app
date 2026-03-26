import React from "react";
import { Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Add to Cart function
export const addToCart = (product) => {
  if (!product) return;

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const exist = existingCart.find((item) => item.id === product.id);

  if (exist) {
    const updatedCart = existingCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            qty: item.qty + 1,
            total: item.price * (item.qty + 1),
            discountedTotal:
              item.price * (item.qty + 1) -
              (item.price * (item.qty + 1) * item.discountPercentage) / 100,
          }
        : item,
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    const newItem = {
      id: product.id,
      name: product.title || "Product",
      price: product.price || 0,
      qty: 1,
      image: product.thumbnail || "/placeholder.png",
      discountPercentage: product.discountPercentage || 0,
      total: product.price || 0,
      discountedTotal:
        (product.price || 0) -
        ((product.price || 0) * (product.discountPercentage || 0)) / 100,
    };
    localStorage.setItem("cart", JSON.stringify([...existingCart, newItem]));
  }

  // Trigger live update
  window.dispatchEvent(new CustomEvent("cartUpdated"));

  // ✅ Toastify success message
  toast.success(`${product.title} added to cart!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const ProductCards = ({ data }) => {
  if (!data) return null;

  const discountAmount = data.discountPercentage
    ? Math.round((data.discountPercentage / 100) * data.price)
    : 0;
  const discountedPrice = data.price - discountAmount;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 w-full flex flex-col h-[400px] md:h-[450px]">
      {/* Toast Container */}
      <ToastContainer />

      {/* Image */}
      <Link
        to={`/shop/${data.id}`}
        className="flex justify-center h-44 md:h-52 mb-4 overflow-hidden rounded-lg group"
      >
        <img
          src={data.thumbnail || "/placeholder.png"}
          alt={data.title || "Product Image"}
          className="object-contain w-full h-full transition-transform duration-300 transform group-hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">
          {data.title}
        </h3>

        {/* Price & Discount */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              $ {discountedPrice}
            </p>
            {discountAmount > 0 && (
              <p className="text-sm md:text-base line-through text-gray-400">
                $ {data.price}
              </p>
            )}
          </div>

          {discountAmount > 0 && (
            <span className="bg-red-100 text-red-700 text-xs md:text-sm px-2 py-0.5 rounded-full font-semibold">
              $ {discountAmount} OFF
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(data)}
          className="mt-auto w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-md font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
