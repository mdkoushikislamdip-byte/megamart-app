import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import { useFetchCategoriesQuery } from "../../services/Api";

const CategoryPanel = () => {
  const { data: categoriesList, isLoading: fetching } =
    useFetchCategoriesQuery();

  const renderCategories = () => {
    if (fetching)
      return <p className="text-gray-500 text-sm">Loading categories...</p>;
    return categoriesList?.slice(0, 10).map((category, index) => (
      <Link
        key={index}
        to={`/shop?category=${category}`}
        className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-2xl text-gray-700 text-sm font-medium hover:bg-brand hover:text-white hover:shadow transition duration-150 capitalize"
      >
        <span>{category}</span>
        <FaChevronRight className="text-xs" />
      </Link>
    ));
  };

  return (
    <aside className="hidden md:flex flex-col w-64 p-6 bg-white rounded-3xl shadow-md border border-gray-200 h-fit">
      {/* Header */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h4 className="font-semibold text-lg text-gray-800">
          Product Categories
        </h4>
        <p className="text-xs text-gray-500">Select a category to explore</p>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-3">{renderCategories()}</div>
    </aside>
  );
};

export default CategoryPanel;
