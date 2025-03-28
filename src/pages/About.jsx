import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 px-4 md:px-16">
        <img
          className="w-full md:max-w-[350px] rounded-lg shadow-lg border-4 border-gray-200 hover:scale-105 transition-transform duration-300"
          src={assets.about_img}
          alt="About us"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-600">
          <p className="text-sm md:text-base font-semibold text-gray-800 leading-relaxed">
            At <b>Forever Fashion</b>, we bring you high-quality, trendy, and affordable clothing for{' '}
            <b>men, women, and kids</b>, making sure the whole family can stay stylish. Our curated collections
            cater to all your fashion needs, with a focus on <b>quality, comfort, and sustainability</b>.
          </p>
          <p className="text-sm md:text-base font-semibold text-gray-800 leading-relaxed">
            Whether you're looking for casual wear or something for a special occasion, our pieces are designed to fit
            every lifestyle. Our collections are carefully selected to ensure you always have access to the latest
            trends at affordable prices.
          </p>
          <b className="text-gray-800 text-lg font-semibold">Our Mission</b>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We aim to inspire confidence with every piece of clothing, offering modern fashion that’s accessible to
            everyone, while prioritizing sustainability. We believe fashion should not only look good but feel good too!
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16">
        <div className="text-4xl py-4 text-center">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center px-4 md:px-16">
          {/* Quality Assurance */}
          <div className="border px-6 md:px-12 py-6 rounded-lg shadow-lg flex flex-col gap-4 hover:bg-gray-100 transition-colors duration-300">
            <b className="text-xl text-gray-800">Quality Assurance:</b>
            <p className="text-gray-600 text-sm md:text-base">We prioritize top-notch fabrics for durability and comfort, ensuring your clothing lasts and feels great.</p>
          </div>

          {/* Convenience */}
          <div className="border px-6 md:px-12 py-6 rounded-lg shadow-lg flex flex-col gap-4 hover:bg-gray-100 transition-colors duration-300">
            <b className="text-xl text-gray-800">Convenience:</b>
            <p className="text-gray-600 text-sm md:text-base">Enjoy a seamless online shopping experience with fast delivery, secure payments, and easy returns.</p>
          </div>

          {/* Exceptional Customer Service */}
          <div className="border px-6 md:px-12 py-6 rounded-lg shadow-lg flex flex-col gap-4 hover:bg-gray-100 transition-colors duration-300">
            <b className="text-xl text-gray-800">Exceptional Customer Service:</b>
            <p className="text-gray-600 text-sm md:text-base">Our friendly support team is ready to assist you, ensuring your shopping experience is smooth and enjoyable.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
