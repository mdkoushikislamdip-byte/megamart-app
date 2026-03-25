import React from "react";
import { BiChevronRight } from "react-icons/bi";
import ProductCards from "../ui/ProductCards";


const products = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    img: "/Galaxy S22 Ultra.png",
    price: 174999,
    discountedPrice: 132999,
    discount: 56,
  },
  {
    id: 2,
    name: "Galaxy M13 (4GB | 64 GB)",
    img: "/Galaxy M13.png",
    price: 10499,
    discountedPrice: 10499,
    discount: 0,
  },
  {
    id: 3,
    name: "Galaxy M33 (4GB | 64 GB)",
    img: "/Galaxy M33.png",
    price: 14999,
    discountedPrice: 14999,
    discount: 0,
  },
  {
    id: 4,
    name: "Galaxy M53 (4GB | 64 GB)",
    img: "/Galaxy M53.png",
    price: 16999,
    discountedPrice: 14999,
    discount: 56,
  },
  {
    id: 5,
    name: "Galaxy M63 (6GB | 128 GB)",
    img: "/Galaxy M63.png",
    price: 85999,
    discountedPrice: 67999,
    discount: 21,
  },
];

const BestDeals = () => {
  return (
    <section className="container mx-auto mt-8 md:mt-16 py-6 px-4 bg-gray-50 rounded-xl">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/30 relative after:absolute after:w-40 md:after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
        
        <h2 className="text-sm md:text-xl font-bold">
          Grab the best deal on{" "}
          <span className="text-brand">Smartphones</span>
        </h2>

        <button className="flex items-center text-sm text-gray-600 hover:text-blue-500">
          View All
          <BiChevronRight className="text-xl text-brand ml-1" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestDeals;