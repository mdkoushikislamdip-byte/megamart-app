import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import Productcards from "../ui/ProductCards";
import { useFetchProductsQuery } from "../../services/Api";


const BestDeals = () => {
  const { data, isLoading } = useFetchProductsQuery({
    limit: 6,
    category: "smartphones",
  });

  if (isLoading) {
    return (
      <section className="py-10 md:py-16">
        <div className="container mx-auto text-center text-gray-400">
          Loading best deals...
        </div>
      </section>
    );
  }

  const products = data?.products || []; 
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 pb-3 border-b border-primary/30 relative">
          <h2 className="text-xl md:text-3xl font-semibold text-primary">
            Grab the best deals on{" "}
            <span className="text-brand">Smartphones</span>
          </h2>
          <Link
            to={`/shop?category=smartphones`}
            className="flex items-center gap-2 text-sm md:text-base font-medium text-brand hover:underline mt-2 md:mt-0"
          >
            View All
            <BiChevronRight className="text-lg md:text-xl" />
          </Link>
        </div>

        {/* Product Grid Desktop */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-3 flex flex-col items-center"
            >
              <Productcards data={item} />
            </div>
          ))}
        </div>

        {/* Mobile / Tablet  */}
        <div className="md:hidden overflow-x-auto flex gap-4 pb-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-[160px] sm:min-w-[200px] bg-white rounded-2xl shadow-md p-3 flex flex-col items-center"
            >
              <Productcards data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
