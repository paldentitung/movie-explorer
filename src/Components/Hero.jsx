import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto text-white text-center justify-center items-center min-h-screen ">
      {/* hero  title  */}
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-200 ">
        Discover Your Next Favorite Movie
      </h1>
      {/* sub title */}
      <p className="text-[16px] md:text-2xl text-gray-400 ">
        Browse, search, and explore movies from every genre, era, and country.
      </p>

      {/* search bar */}
      <div className="w-full flex justify-center">
        <input
          type="search"
          placeholder="Search through thousands of movies"
          className="w-full max-w-xl md:max-w-2xl px-4 py-3   outline-none border "
        />
      </div>
    </div>
  );
};

export default Hero;
