import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(AppContext);
  const navigate = useNavigate();

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevents navigating
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="relative shadow-md rounded-md overflow-hidden hover:shadow-lg cursor-pointer">
      {/* Navigation click */}
      <div
        onClick={() => navigate(`/movie/${movie.id}`)}
        className="relative w-full h-112"
      >
        <img
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110 hover:brightness-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 hover:bg-black/60 rounded-md"></div>

        {/* Rating */}
        <div className="absolute top-0 left-0 m-2 text-yellow-400 font-semibold">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}
        </div>
      </div>

      {/* Favorite star - outside navigation div */}
      <div
        onClick={toggleFavorite}
        className="absolute top-0 right-0 m-2 text-yellow-400 text-2xl z-20"
      >
        {isFavorite(movie.id) ? <AiFillStar /> : <AiOutlineStar />}
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2">
        <h3 className="text-md font-semibold text-white">{movie.title}</h3>
        <p className="text-sm text-gray-200">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
