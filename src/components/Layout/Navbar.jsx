import React, { useState, useRef, useEffect } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { TbTruckDelivery, TbUser } from "react-icons/tb";
import { Link } from "react-router";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const sidebarRef = useRef();

  // outside click close
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

  const categories = [
    {
      title: "Groceries",
      to: "/",
      Children: [
        { title: "Milk", to: "" },
        { title: "Bread", to: "" },
        { title: "Rice", to: "" },
        { title: "Apples", to: "" },
        { title: "Eggs", to: "" },
      ],
    },
    {
      title: "Premium Fruits",
      to: "",
      Children: [
        { title: "Apple", to: "" },
        { title: "Banana", to: "" },
        { title: "Orange", to: "" },
        { title: "Mango", to: "" },
        { title: "Grapes", to: "" },
      ],
    },
    {
      title: "Home & Kitchen",
      to: "",
      Children: [
        { title: "Cookware Set", to: "" },
        { title: "Non-Stick Frying Pan", to: "" },
        { title: "Electric Kettle", to: "" },
        { title: "Dining Table", to: "" },
        { title: "Kitchen Storage Container", to: "" },
      ],
    },
    {
      title: "Fashion",
      to: "",
      Children: [
        { title: "T-Shirt", to: "" },
        { title: "Jeans", to: "" },
        { title: "Sneakers", to: "" },
        { title: "Jacket", to: "" },
        { title: "Handbag", to: "" },
      ],
    },
    {
      title: "Electronics",
      to: "",
      Children: [
        { title: "Smartphone", to: "" },
        { title: "Laptop", to: "" },
        { title: "Headphones", to: "" },
        { title: "Smartwatch", to: "" },
        { title: "Bluetooth Speaker", to: "" },
      ],
    },
    {
      title: "Home Improvement",
      to: "",
      Children: [
        { title: "Drill Machine", to: "" },
        { title: "Hammer", to: "" },
        { title: "Screwdriver Set", to: "" },
        { title: "Wall Paint", to: "" },
        { title: "LED Light Bulb", to: "" },
      ],
    },
    {
      title: "Sports, Toys & Luggage",
      to: "",
      Children: [
        { title: "Football", to: "" },
        { title: "Cricket Bat", to: "" },
        { title: "Teddy Bear", to: "" },
        { title: "Remote Control Car", to: "" },
        { title: "Travel Suitcase", to: "" },
      ],
    },
  ];

  return (
    <>
      {/* TOP_BAR */}
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
            <img src="/logo.png" className="w-28" />
          </Link>
          {/* Search Bar */} 
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
             
            {/* Sign In */} 
            <Link
              className="hidden sm:flex items-center gap-2 text-sm md:text-base font-semibold text-primary relative after:absolute after:h-full after:w-[1px] after:bg-primary/40 after:top-0 after:-right-3 lg:after:-right-5"
              to="/SignIn"
            >
               
              <TbUser className="text-lg md:text-xl text-brand" /> 
              <span className="hidden lg:block">Sign Up/Sign In</span> 
            </Link> 
            {/* Cart */} 
            <Link
              className="flex items-center gap-1 text-base md:text-lg font-semibold text-primary"
              to="/Cart"
            >
               
              <CiShoppingCart className="text-xl md:text-2xl text-brand" />
              <span className="hidden lg:block ">Cart</span>
            </Link> 
          </div> 
        </div>

        {/* Mobile_search */}
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

      {/* DESKTOP_MENU */}
   <div className="border-b border-secondary">
  <div className="container hidden md:flex gap-4 px-4 py-5 text-base font-semibold">
    {categories.map((item) => (
      <div key={item.title} className="relative group">
        {/* Button */}
        <button
          className="lg:px-4 lg:py-2 md:p-1 rounded-full hover:bg-brand flex items-center gap-2 text-[15px]"
        >
          {item.title}
          {item.Children && (
            <CgChevronDown className="transition group-hover:rotate-180" />
          )}
        </button>

        {/* Dropdown_Menu */}
        {item.Children && (
          <ul className="absolute top-full left-0 bg-white shadow-lg rounded-xl w-52 mt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            {item.Children.map((child) => (
              <li key={child.title}>
                <Link className="block rounded-xl px-4 py-2 hover:bg-gray-100">
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>

      {/* MOBILE_SIDEBAR */}
{sidebarOpen && (
  <div className="fixed inset-0 bg-black/40 z-50">
    <div ref={sidebarRef} className="w-4/5 sm:w-3/5 bg-white h-full p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold">Menu</h2>
        <button onClick={() => setSidebarOpen(false)}>✕</button>
      </div>

      <ul className="space-y-3">
        {categories.map((item, index) => (
          <li key={item.title}>
            <div className="flex justify-between items-center">
              {/* Title as Link */}
              <Link href={item.url} className="flex-1">
                {item.title}
              </Link>

              {/* Chevron_submenu */}
              {item.Children && (
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="ml-2"
                >
                  <FaChevronRight
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Submenu_smooth_slide */}
            {item.Children && (
              <ul
                className={`pl-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.Children.map((child) => (
                  <li key={child.title}>
                    <Link href={child.to} className="text-sm text-gray-600">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* Sign In */} 
           <div className="mt-15 py-8 border-t border-gray-400"> <Link
              className=" sm:flex items-center gap-2 text-lg font-bold text-primary"
              to="/SignIn"
            > Sign Up/Sign In
            </Link> </div>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
