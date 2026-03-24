import { BiChevronRight } from "react-icons/bi";

const categories = [
  { name: "Mobile", img: "/phone.png" },
  { name: "Cosmetics", img: "/cosmetics.png" },
  { name: "Electronics", img: "/electronics.png" },
  { name: "Furniture", img: "/furniture.png" },
  { name: "Watches", img: "/watch.png" },
  { name: "Decor", img: "/decor.png" },
  { name: "Accessories", img: "/accessories.png" },
];

const Category = () => {
  return (
    <div className="mt-2 md:mt-10 py-6 md:py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className="group flex justify-between items-center mb-6 pb-4 border-b border-primary/30 relative 
after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand 
hover:border-brand transition-all duration-300 
after:transition-all after:duration-300 group-hover:after:bg-brand"
        >
          {" "}
          <h2 className="text-base md:text-xl font-semibold">
            Shop From <span className="text-brand">Top Categories</span>
          </h2>
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-500 transition">
            View All <BiChevronRight className="text-2xl text-brand" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300"
            >
              {/* Circle Image */}
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-transparent group-hover:border-blue-400 overflow-hidden bg-white flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="mt-2 text-xs md:text-sm text-gray-700 text-center transition-all duration-300 group-hover:text-blue-500 group-hover:font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
