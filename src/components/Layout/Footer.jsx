import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brand text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left */}
        <div>
          <h2 className="text-xl font-semibold mb-3">MegaMart</h2>

          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <span>+1 202-918-2132</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+1 202-918-2132</span>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <img src="/appstore.png" alt="App Store" className="h-9 opacity-80 hover:opacity-100 transition" />
            <img src="/playstore.png" alt="Google Play" className="h-9 opacity-80 hover:opacity-100 transition" />
          </div>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white/90">
            Categories
          </h3>
          <ul className="space-y-1 text-sm text-white/70">
            {[
              "Staples",
              "Beverages",
              "Personal Care",
              "Home Care",
              "Baby Care",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-sm font-semibold mb-3 text-white/90">
            Support
          </h3>
          <ul className="space-y-1 text-sm text-white/70">
            {[
              "About Us",
              "Terms",
              "FAQ",
              "Privacy",
              "Returns",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-xs text-white/60 border-t border-white/10 pt-4">
        © {new Date().getFullYear()} MegaMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;