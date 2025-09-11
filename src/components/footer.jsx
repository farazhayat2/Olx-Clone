import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">🚚 Khareedo</h2>
          <p className="text-sm leading-6">
            Your trusted marketplace for mobiles, cars, electronics, clothes, and more. 
            Safe, secure, and simple to use.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/category/mobiles" className="hover:text-white">Mobiles</a></li>
            <li><a href="/category/cars" className="hover:text-white">Cars</a></li>
            <li><a href="/category/laptops" className="hover:text-white">Laptops</a></li>
            <li><a href="/category/furniture" className="hover:text-white">Furniture</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Khareedo. All rights reserved.
      </div>
    </footer>
  );
}
