import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  // state for showing mobile menu
  const [showMenu, setShowMenu] = useState(false);

  // disable scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <div className="flex items-center p-6 w-full max-w-6xl mx-auto justify-between text-white bg-black/20  rounded-full">
      {/* title */}
      <div className="text-2xl md:text-3xl font-bold text-teal-500">
        MovieExplorer
      </div>

      {/* desktop nav */}
      <div className="gap-10 hidden md:flex">
        <nav>
          <ul className="flex items-center gap-5">
            <NavLink
              to="/"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? "text-teal-500" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? "text-teal-500" : "")}
            >
              Favorites
            </NavLink>
          </ul>
        </nav>

        {/* search icon */}
        <div className="flex items-center gap-5">
          <FaSearch size={20} />
        </div>
      </div>

      {/* mobile menu toggle */}
      <div className="md:hidden">
        <FaBars size={20} onClick={() => setShowMenu(true)} />
      </div>

      {/* mobile menu */}
      {showMenu && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Mobile menu panel */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 z-50 h-full w-3/4 bg-black/60 shadow-lg flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <FaTimes
                size={24}
                className="text-white hover:text-teal-500 cursor-pointer"
                onClick={() => setShowMenu(false)}
              />
            </div>

            {/* Menu items */}
            <nav className="flex flex-col p-6 gap-6">
              <NavLink
                to="/"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-teal-500" : "text-white"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/favorites"
                onClick={() => setShowMenu(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive ? "text-teal-500" : "text-white"
                  }`
                }
              >
                Favorites
              </NavLink>
            </nav>

            {/* Search icon at bottom */}
            <div className="mt-auto p-6">
              <FaSearch size={20} className="text-white" />
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;
