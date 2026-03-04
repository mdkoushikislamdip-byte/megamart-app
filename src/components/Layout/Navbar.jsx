import React, { Children } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { CiLocationOn, CiShoppingCart } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { TbTruckDelivery, TbUser } from "react-icons/tb";
import { Link } from "react-router";

const Navbar = () => {
  const categories = [
    {
      title: "Groceries",
      to: "",
      Children: ["Milk", "Bread", "Rice", "Apples", "Eggs"],
    },
    {
      title: "Premium Fruits",
      to: "",
      Children: ["Apple", "Banana", "Orange", "Mango", "Grapes"],
    },
    {
      title: "Home & Kitchen",
      to: "",
      Children: [
        "Cookware Set",
        "Non-Stick Frying Pan",
        "Electric Kettle",
        "Dining Table",
        "Kitchen Storage Container",
      ],
    },
    {
      title: "Fashion",
      to: "",
      Children: ["T-Shirt", "Jeans", "Sneakers", "Jacket", "Handbag"],
    },
    {
      title: "Electronics",
      to: "",
      Children: [
        "Smartphone",
        "Laptop",
        "Headphones",
        "Smartwatch",
        "Bluetooth Speaker",
      ],
    },
    {
      title: "Beauty",
      to: "",
      Children: ["Lipstick", "Foundation", "Mascara", "Perfume", "Face Cream"],
    },
    {
      title: "Home Improvement",
      to: "",
      Children: [
        "Drill Machine",
        "Hammer",
        "Screwdriver Set",
        "Wall Paint",
        "LED Light Bulb",
      ],
    },
    {
      title: "Sports, Toys & Luggage",
      to: "",
      Children: [
        "Football",
        "Cricket Bat",
        "Teddy Bear",
        "Remote Control Car",
        "Travel Suitcase",
      ],
    },
  ];
  return (
    <>
      {/* ========================================================
                          Top_bar Start
   ===========================================================*/}
      <div className="bg-[#F5F5F5] h-auto sm:h-12 flex items-center text-sm py-2 sm:0">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          {/*============= Left Side =============== */}
          <span className="font-sm text-[#666666]">
            Welcome to worldwide Megamart!
          </span>

          {/*============= Right Side =============== */}
          <ul className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-8 font-sm">
            <li className="flex items-center gap-1 text-[#666666] cursor-pointer hover:text-[#008ECC] transition">
              <CiLocationOn />
              Deliver to 423651
            </li>

            <li className="flex items-center gap-1 text-[#666666] cursor-pointer hover:text-[#008ECC] transition">
              <TbTruckDelivery />
              Track your order
            </li>

            <li className="flex items-center gap-1 text-[#666666] cursor-pointer hover:text-[#008ECC] transition">
              <BiSolidOffer />
              All Offers
            </li>
          </ul>
        </div>
      </div>
      {/* ========================================================
                          Top_bar end
   ===========================================================*/}
      {/* ========================================================
                          Nav_Bar Start
   ===========================================================*/}
      <nav className="border-b border-[#EDEDED] py-5">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          {/* =================Logo================ */}
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-28 sm:w-32 md:w-auto" />
          </Link>
            {/* ===================Search_bar============== */}
       <div className="flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-xl w-full lg:max-w-lg">
            <FiSearch className="text-brand text-2xl" />
            <input
              className="w-full outline-0 text-base text-primary "
              type="text"
              placeholder="Search essentials, groceries and more..."
            />
          </div>
            {/*================= Sign up ================*/}
         <div className="flex gap-6 sm:gap-10">
            <Link
              className="flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5 "
              to="/SignIn"
            >
              {" "}
              <TbUser className="text-xl text-brand" />
              Sign Up/Sign In
            </Link>
            {/*=================== Cart============= */}
            <Link
              className="flex items-center gap-1.5 text-lg font-bold text-primary"
              to="/Cart"
            >
              {" "}
              <CiShoppingCart className="text-2xl text-brand" />
              Cart
            </Link>
          </div>
        </div>
      </nav>
      {/* ========================================================
                          Nav_Bar end
   ===========================================================*/}
      {/* ========================================================
                          Product_Categories Start
   ===========================================================*/}
      <div className="py-4 border-b border-[#EDEDED]">
        <div className="container flex gap-2">
          {categories.map((item) => (
            <div key={item.title} className="relative group">
              <Link className="bg-base inline-block hover:bg-brand py-2 px-3  font-medium text-base rounded-3xl text-[#222222]  hover:text-theme ">
                <div className="flex items-center gap-1">
                  <p>{item.title}</p>
                  <CgChevronDown className="text-2xl" />
                </div>
              </Link>
              <ul className="absolute top-full left-0 transition invisible opacity-0 group-hover:visible group-hover:opacity-100 w-48 rounded-2xl space-y-2 bg-theme shadow text-base text-primary font-medium ">
                {item.Children.map((child) => (
                  <li key={child}>
                    <Link className="p-2 rounded hover:bg-brand hover:text-theme block">
                      {child}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* ========================================================
                          Product_Categories end
   ===========================================================*/}
    </>
  );
};

export default Navbar;
