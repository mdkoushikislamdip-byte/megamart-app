import React from "react";

const products = [
  {
    name: "Daily Essentials",
    image: "/Daily Essentials.png",
  },
  {
    name: "Vegetables",
    image: "Vegetables.png",
  },
  {
    name: "Fruits",
    image: "/Fruits.png",
  },
  {
    name: "Strawberry",
    image: "/Strawberry.png",
  },
  {
    name: "Mango",
    image: "/Mango.png",
  },
  {
    name: "Cherry",
    image: "/Cherry.png",
  },
];

const DailyEssentials = () => {
  return (
    <div className="container mx-auto px-4 py-6">
    <div className="bg-white p-6 rounded-xl">
      {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/30 relative after:absolute after:w-96 after:h-1 after:left-0 after:bottom-0 after:rounded-full after:bg-brand">
        <h2 className="text-lg font-semibold text-gray-800">
          Daily <span className="text-brand">Essentials</span>
        </h2>
        <button className="text-sm text-blue-500 hover:underline">
          View All →
        </button>
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-lg shadow-sm border border-transparent hover:border-brand transition-all duration-300 text-center cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain mx-auto mb-3"
            />

            <h3 className="text-sm font-medium text-gray-700">
              {item.name}
            </h3>

            <p className=" text-black mt-1">
              Up to 50% OFF
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DailyEssentials;