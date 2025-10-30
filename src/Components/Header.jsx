import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex  items-center  p-6 w-full max-w-6xl mx-auto justify-between  text-white">
      {/* title */}
      <div className="text-2xl md:text-3xl font-bold ">MoiveExplorer</div>

      <div className=" gap-10 hidden md:flex">
        {/* nav */}
        <nav>
          <ul className="flex items-center gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
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

      <div>
        <FaBars size={20} onClick={() => setShowMenu(true)} />
      </div>

      {/* mobile menu */}
      {showMenu && (
        <div className="flex gap-10 absolute top-0 right-0 w-3/4 h-full flex-col bg-black/80">
          <div className="flex justify-end p-4">
            <FaTimes size={20} onClick={() => setShowMenu(!showMenu)} />
          </div>
          {/* nav */}
          <nav>
            <ul className="flex  gap-5 flex-col justify-start p-4 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
            </ul>
          </nav>

          {/* feature */}
          <div className="flex  gap-5 p-4 items-center">
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
      )}
    </div>
  );
};

export default Header;
