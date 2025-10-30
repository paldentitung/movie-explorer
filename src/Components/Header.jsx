import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex  items-center  p-6 w-full max-w-6xl mx-auto justify-between  text-white">
      {/* title */}
      <div className="text-2xl md:text-3xl font-bold ">MoiveExplorer</div>

      <div className="flex gap-10">
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
    </div>
  );
};

export default Header;
