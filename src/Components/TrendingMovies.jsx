// TrendingMovies.jsx
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { getTrendingMovies } from "../API/tmdb";
import { motion } from "framer-motion";
import { AppContext } from "../Context/AppContext";
const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  // using context for theme
  const { theme } = useContext(AppContext);
  useEffect(() => {
    const fetchTrending = async () => {
      const data = await getTrendingMovies(); // call your JS function
      setMovies(data);
    };

    fetchTrending();
  }, []); // runs once on mount

  return (
    <section
      className={`${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
    >
      {" "}
      <div className={`my-10 px-4 w-full max-w-6xl mx-auto  flex flex-col  `}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4  text-center">
          Trending This Week
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {movies.map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
