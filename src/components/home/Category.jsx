import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";

const Categories = () => {
  const categorie = [
    { image: "/phone.png", title: "Mobile" },
    { image: "/cosmetics.png", title: "cosmetics" },
    { image: "/electronics.png", title: "Electronics" },
    { image: "/furniture.png", title: "Furniture" },
    { image: "/watch.png", title: "Watches" },
    { image: "/decor.png", title: "Decor" },
    { image: "/accessories.png", title: "Accessories" },
  ];

  return (
    <section className="pb-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 flex justify-between items-center pb-4 border-b border-primary/30 relative after:absolute after:w-full after:max-w-96 after:h-1 after:bg-brand after:left-0 after:bottom-0 after:rounded-full">
          <h2 className="heading text-lg md:text-2xl">
            Shop From{" "}
            <span className="font-bold text-brand">Top Categories</span>
          </h2>
          <Link
            to="/shop"
            className="flex items-center text-md md:text-xl text-nowrap"
          >
            View all
            <BiChevronRight className="text-2xl text-brand" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categorie.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-secondary flex justify-center items-center overflow-hidden border border-transparent hover:shadow-xl hover:border-brand/40 transition-all duration-300 ease-in-out transform hover:scale-105">
                <Link
                  to={`/shop?category=${item.title.toLowerCase()}`}
                  className="w-full h-full flex justify-center items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-3/4 h-3/4 object-contain rounded-full"
                  />
                </Link>
              </div>
              <p className="mt-3 text-center text-base font-medium capitalize">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
