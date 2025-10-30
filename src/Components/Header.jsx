import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

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
    <div className="flex items-center p-6 w-full max-w-6xl mx-auto justify-between text-white">
      {/* title */}
      <div className="text-2xl md:text-3xl font-bold text-teal-500">
        MoiveExplorer
      </div>

      <div className="gap-10 hidden md:flex">
        {/* nav */}
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

        {/* feature */}
        <div className="flex items-center gap-5">
          {/* search bar */}
          <div>
            <FaSearch size={20} />
          </div>

          {/* theme toggle */}
          <div className="w-18 h-7 border rounded-full flex items-center p-1">
            <span className="w-5 h-5 bg-white rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <FaBars size={20} onClick={() => setShowMenu(true)} />
      </div>

      {/* mobile menu */}
      {showMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowMenu(false)}
          ></div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowMenu(false)}
            className="flex gap-10 absolute top-0 right-0 w-3/4 h-full flex-col bg-black/80"
          >
            <div className="flex justify-end p-4">
              <FaTimes size={20} onClick={() => setShowMenu(!showMenu)} />
            </div>

            {/* nav */}
            <nav>
              <ul className="flex gap-5 flex-col justify-start p-4">
                <NavLink
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive ? "text-teal-500" : ""
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/favorites"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive ? "text-teal-500" : ""
                  }
                >
                  Favorites
                </NavLink>
              </ul>
            </nav>

            {/* feature */}
            <div className="flex gap-5 p-6 items-center mt-auto">
              {/* search */}
              <div>
                <FaSearch size={20} />
              </div>

              {/* theme toggle */}
              <div className="w-18 h-7 border rounded-full flex items-center p-1">
                <span className="w-5 h-5 bg-white rounded-full"></span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Header;
