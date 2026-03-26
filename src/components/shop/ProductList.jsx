import React, { useState } from "react";
import { useSearchParams } from "react-router";
import ProductCards from "../ui/ProductCards";
import CategoryPanel from "./CategoryPanel";
import Loading from "../ui/Loading";
<<<<<<< HEAD
import { useFetchProductsQuery } from "../../services/Api";
=======
import { useFetchProductsQuery } from "../../Services/Api";
>>>>>>> 90ace7a (fix: Api.js path issue)

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);

  const { data, isLoading } = useFetchProductsQuery({
    limit,
    skip,
    category,
  });

  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-[260px]">
          <CategoryPanel />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header Card */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-primary capitalize">
                {category ? category : "All Products"}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Showing {data?.products?.length || 0} items
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Show:</span>

              <select
                onChange={(e) => setLimit(Number(e.target.value))}
                value={limit}
                className="rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loading />
            </div>
          ) : (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {data?.products?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-2"
                >
                  <ProductCards data={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
