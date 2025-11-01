import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 py-8 px-4 md:px-8">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-teal-600 mb-2">
            MovieExplorer
          </h1>
          <p className="text-sm md:text-base">
            Discover and explore your favorite movies. Your ultimate guide to
            trending films and hidden gems!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li className="hover:text-teal-500 cursor-pointer">Home</li>
            <li className="hover:text-teal-500 cursor-pointer">Movies</li>
            <li className="hover:text-teal-500 cursor-pointer">Favourites</li>
            <li className="hover:text-teal-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-1">
            <FaFacebook
              className="hover:text-teal-600 transition-colors cursor-pointer"
              size={24}
            />
            <FaInstagram
              className="hover:text-teal-600 transition-colors cursor-pointer"
              size={24}
            />
            <FaLinkedin
              className="hover:text-teal-600 transition-colors cursor-pointer"
              size={24}
            />
            <FaWhatsapp
              className="hover:text-teal-600 transition-colors cursor-pointer"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MovieExplorer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
