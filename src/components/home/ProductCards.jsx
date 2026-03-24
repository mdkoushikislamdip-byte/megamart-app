import React from "react";
import { BiChevronRight } from "react-icons/bi";

const products = [
  {
    name: "Galaxy S22 Ultra",
    img: "Galaxy S22 Ultra.png",
    price: 174999,
    discountedPrice: 132999,
    discount: 56,
  },
  {
    name: "Galaxy M13 (4GB | 64 GB)",
    img: "Galaxy M13.png",
    price: 10499,
    discountedPrice: 10499,
    discount: 0,
  },
  {
    name: "Galaxy M33 (4GB | 64 GB)",
    img: "Galaxy M33.png",
    price: 14999,
    discountedPrice: 14999,
    discount: 0,
  },
  {
    name: "Galaxy M53 (4GB | 64 GB)",
    img: "Galaxy M53.png",
    price: 16999,
    discountedPrice: 14999,
    discount: 56,
  },
  {
    name: "Galaxy M63 (6GB | 128 GB)",
    img: "Galaxy M63.png",
    price: 85999,
    discountedPrice: 67999,
    discount: 21,
  },
];

const ProductCard = ({ product }) => {
  return (
<div className="relative mt-6 bg-white rounded-xl shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105">      {/* Discount Badge Top-Right */}
      {product.discount > 0 && (
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-3 right-3 z-10">
          {product.discount}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-40 flex items-center justify-center mb-3">
        <img
          src={product.img}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Product Name */}
      <h3 className="text-center font-semibold text-sm mb-2">{product.name}</h3>

      {/* Price */}
      <div className="flex items-center gap-2">
        <span className="text-red-500 font-bold text-lg">
          ₹{product.discountedPrice.toLocaleString()}
        </span>
        {product.discount > 0 && (
          <span className="text-gray-400 line-through text-sm">
            ₹{product.price.toLocaleString()}
          </span>
        )}
      </div>

      {/* Save Amount */}
      {product.discount > 0 && (
        <p className="text-green-600 text-xs mt-1">
          Save - ₹{(product.price - product.discountedPrice).toLocaleString()}
        </p>
      )}
    </div>
  );
};

const ProductCards = () => {
  return (
    <section className="container mt-8 md:mt-40 py-6 px-4 bg-gray-50">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/30 relative after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand ">
        <h2 className="text-sm md:text-xl font-bold">Grab the best deal on <span className="text-brand">Smartphones</span></h2>
        <button className="flex justify-between items-center text-sm text-gray-600 hover:text-blue-500 ">View All  <BiChevronRight className="text-2xl text-brand" /></button>
      </div>

      {/* Responsive Grid: 2 cols mobile, 3 sm, 4 md, 5 lg */}
     <div className="container mx-auto px-4">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>
    </section>
  );
};

export default ProductCards;