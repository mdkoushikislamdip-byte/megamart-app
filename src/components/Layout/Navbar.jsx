import React, { useState, useRef, useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { TbTruckDelivery, TbUser } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
<<<<<<< HEAD
import { useFetchCategoriesQuery } from "../../services/Api";
=======
import { useFetchCategoriesQuery } from "../../Services/Api";
>>>>>>> 90ace7a (fix: Api.js path issue)

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();
  const navigate = useNavigate();

  // API call for categories
  const { data: categoriesData, isLoading } = useFetchCategoriesQuery();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setSidebarOpen(false);
    navigate("/auth");
  };

  // Outside click close sidebar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-secondary py-2 text-sm">
        <div className="container flex justify-between">
          <span>Welcome to Megamart!</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <CiLocationOn /> Deliver
            </span>
            <span className="flex items-center gap-1">
              <TbTruckDelivery /> Track
            </span>
            <span className="flex items-center gap-1">
              <BiSolidOffer /> Offers
            </span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="border-b border-secondary py-4">
        <div className="container flex justify-between items-center">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl md:hidden"
          >
            <IoMdMenu />
          </button>

          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" className="w-28" alt="logo" />
          </Link>

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 bg-[#F3F9FB] rounded-xl px-3 py-2 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-4">
            <FiSearch className="text-brand text-lg md:text-xl" />
            <input
              className="w-full outline-none bg-transparent text-sm md:text-base text-primary"
              type="text"
              placeholder="Search essentials, groceries and more..."
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            {user ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 text-sm md:text-base font-semibold text-primary"
              >
                <TbUser className="text-lg md:text-xl text-brand" />
                <span className="hidden lg:block">{user.username}</span>
              </Link>
            ) : (
              <Link
                to="/auth"
                className="hidden sm:flex items-center gap-2 text-sm md:text-base font-semibold text-primary relative after:absolute after:h-full after:w-[1px] after:bg-primary/40 after:top-0 after:-right-3 lg:after:-right-5"
              >
                <TbUser className="text-lg md:text-xl text-brand" />
                <span className="hidden lg:block">Sign Up/Sign In</span>
              </Link>
            )}

            <Link
              to="/cart"
              className="flex items-center gap-1 text-base md:text-lg font-semibold text-primary"
            >
              <CiShoppingCart className="text-xl md:text-2xl text-brand" />
              <span className="hidden lg:block">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 mt-3">
          <div className="flex items-center bg-[#F3F9FB] px-3 py-2 rounded-xl">
            <FiSearch />
            <input
              className="bg-transparent outline-none ml-2 w-full"
              placeholder="Search..."
            />
          </div>
        </div>
      </nav>

      {/* DESKTOP CATEGORY BAR  */}
      <div className="border-b border-secondary">
        <div className="container hidden md:flex gap-4 px-4 py-5 text-base font-semibold flex-wrap">
          {/* Home Button */}
          <Link
            to="/"
            className="lg:px-4 lg:py-2 md:p-1 rounded-full hover:bg-brand hover:text-white text-[15px] capitalize transition-colors duration-200"
          >
            Home
          </Link>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            categoriesData?.slice(0, 10)?.map((item, index) => (
              <Link
                key={index}
                to={`/shop?category=${item}`}
                className="lg:px-4 lg:py-2 md:p-1 rounded-full hover:bg-brand hover:text-white text-[15px] capitalize transition-colors duration-200"
              >
                {item}
              </Link>
            ))
          )}
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full bg-white w-4/5 sm:w-3/5 p-4 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between mb-4">
            <h2 className="font-bold text-lg">Menu</h2>
            <button
              className="text-xl font-bold"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="space-y-3 uppercase hover:bg-gray-400 hover:rounded-2xl">
            {categoriesData?.slice(0, 10)?.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/shop?category=${item}`}
                  onClick={() => setSidebarOpen(false)}
                  className="block text-black hover:text-brand transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Sign In / Log Out */}
          <div className="mt-10 py-6 border-t border-gray-400">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-2 text-lg font-bold text-primary hover:text-brand transition-colors duration-200"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-2 text-lg font-bold text-primary hover:text-brand transition-colors duration-200"
              >
                Sign Up/Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
