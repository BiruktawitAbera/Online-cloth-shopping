import React, { useState } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium bg-white shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-16 h-16 rounded-full shadow-lg" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        {["Home", "Collection", "About", "Contact"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase()}`}
            className="relative flex uppercase flex-col items-center gap-1 transition-all duration-300 hover:text-[#FF6F61]"
          >
            <p>{item}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
          </NavLink>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer transition-all hover:scale-110" alt="Search" />

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to="/login">
            <img className="w-6 cursor-pointer transition-all hover:scale-110" src={assets.profile_icon} alt="Profile" />
          </Link>
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-40 py-3 px-5 bg-white text-gray-600 shadow-lg rounded-lg border">
              <p className="cursor-pointer hover:text-black transition-all hover:pl-1">My Profile</p>
              <p className="cursor-pointer hover:text-black transition-all hover:pl-1">Orders</p>
              <p className="cursor-pointer hover:text-black transition-all hover:pl-1">Log Out</p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-6 transition-all hover:scale-110" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center bg-black text-white rounded-full text-[10px] leading-4">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden transition-all hover:scale-110" alt="Menu" />
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-all duration-500 ease-in-out ${
          visible ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-600 p-5">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          {["Home", "Collection", "About", "Contact"].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border-b transition-all hover:bg-gray-100"
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
