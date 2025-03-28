import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">
      {/* Page Title */}
      <div className="text-center">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center">
        {/* Image */}
        <img className="w-full max-w-[500px] mx-auto rounded-lg shadow-lg" src={assets.contact_img} alt="Contact" />

        {/* Contact Details */}
        <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Our Store</h2>
          <p className="text-gray-600">Feel free to reach out to us at our store or contact us anytime.</p>

          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <p className="text-gray-700">
                Bol, Addis Ababa, Ethopia 
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <p className="text-gray-700">+251-90-312-340</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <p className="text-gray-700">biruktawitaberaa@gmail.com</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg mt-4 hover:scale-105 transition-transform">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Newsletter */}

    </div>
  )
}

export default Contact
