import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 items-center justify-between py-16 px-6 sm:px-16 bg-gray-50">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 text-center sm:text-left space-y-6">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <p className="w-10 md:w-12 h-[2px] bg-[#414141]"></p>
          <p className="font-semibold text-sm md:text-base text-gray-700 tracking-wide">
            TRENDING NOW
          </p>
        </div>

        <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-900">
          Discover the Latest Fashion
        </h1>

        <p className="text-gray-600 text-sm md:text-lg max-w-md mx-auto sm:mx-0">
          Elevate your style with our newest collection. Browse premium designs, 
          hand-picked for you. Shop now and redefine your wardrobe.
        </p>

        <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">
          <button className="bg-black text-white px-6 py-2 text-sm md:text-base font-medium rounded-lg shadow-md hover:bg-gray-800 transition">
            Shop Now
          </button>
          <button className="border border-black px-6 py-2 text-sm md:text-base font-medium rounded-lg hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero right side with rounded image */}
      <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
        <img
          src={assets.hero_img}
          className="w-4/5 sm:w-3/4 rounded-3xl shadow-2xl object-cover hover:scale-105 transition-all duration-300"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
