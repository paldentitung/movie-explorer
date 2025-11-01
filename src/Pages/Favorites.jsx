import React, { useContext } from "react";
import MovieCard from "../Components/MovieCard";
import { AppContext } from "../Context/AppContext";
import Header from "../Components/Header";

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Favorites</h2>

        {favorites.length === 0 ? (
          <div className="text-center mt-10 text-gray-400">
            No favorites yet!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {favorites.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
