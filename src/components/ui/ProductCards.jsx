import React from "react";
import { Link } from "react-router";

const ProductCards = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`}>
      <div className="relative mt-6 bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer">
        
        {product.discount > 0 && (
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-3 right-3 z-10">
            {product.discount}% OFF
          </div>
        )}

        <div className="w-full h-40 flex items-center justify-center mb-3">
          <img src={product.img} alt={product.name} className="max-h-full object-contain" />
        </div>

        <h3 className="text-center font-semibold text-sm mb-2">{product.name}</h3>

        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">₹{product.discountedPrice.toLocaleString()}</span>
          {product.discount > 0 && (
            <span className="text-gray-400 line-through text-sm">₹{product.price.toLocaleString()}</span>
          )}
        </div>

        {product.discount > 0 && (
          <p className="text-green-600 text-xs mt-1">
            Save ₹{(product.price - product.discountedPrice).toLocaleString()}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProductCards;