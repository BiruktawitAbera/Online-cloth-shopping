import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 sm:px-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start">
        {/* Logo and Description */}
        <div className="text-center sm:text-left">
          <img src={assets.logo} className="w-20 h-20 rounded-full mx-auto sm:mx-0" alt="Logo" />
          <p className="mt-4 text-sm text-gray-600 max-w-md">
            Explore the best collections and discover high-quality products tailored for you.  
            Shop with confidence and enhance your experience today.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-6 sm:mt-0 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            {["Home", "Collection", "About", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-[#FF6F61] transition-all text-gray-700"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 sm:mt-0 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900">Follow Us</h2>
          <div className="flex justify-center sm:justify-start mt-2 gap-4">
            {["facebook", "instagram", "twitter"].map((platform, index) => (
              <a key={index} href={`https://${platform}.com`} target="_blank" rel="noopener noreferrer">
                <img
                  src={assets[`${platform}_icon`]}
                  className="w-6 transition-all hover:scale-110 hover:opacity-80"
                  alt={platform}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Your Brand. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
