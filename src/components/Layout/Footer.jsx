import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brand text-white pt-12 pb-6 relative overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MegaMart</h2>

          <p className="font-semibold mb-2">Contact Us</p>

          <div className="flex items-center gap-2 text-sm mb-2">
            <FaWhatsapp />
            <span>Whats App</span>
          </div>
          <p className="text-sm ml-6 mb-3">+1 202-918-2132</p>

          <div className="flex items-center gap-2 text-sm mb-2">
            <FaPhoneAlt />
            <span>Call Us</span>
          </div>
          <p className="text-sm ml-6 mb-4">+1 202-918-2132</p>

          <p className="font-semibold mb-3">Download App</p>

          <div className="flex gap-3">
            <img src="/appstore.png" alt="App Store" className="h-10" />
            <img src="/playstore.png" alt="Google Play" className="h-10" />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold mb-4 border-b w-fit">
            Most Popular Categories
          </h3>
          <ul className="space-y-2 text-sm list-disc">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold mb-4 border-b w-fit">
            Customer Services
          </h3>
          <ul className="space-y-2 text-sm list-disc">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} All rights reserved. Reliance Retail Ltd.
      </div>

      {/* Background Circle Effect */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
