import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-gradient-to-r from-fuchsia-500 via-rose-400 to-orange-400 text-white py-10 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-xl font-bold mb-3">🌟 A Fashion</h2>
          <p>Brighten your wardrobe with style and fun!</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-600" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-sm opacity-80">
        © {currentYear} Ataullah Fashion. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
