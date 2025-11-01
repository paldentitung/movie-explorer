import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="relative bg-gray-800 text-white shadow-md group rounded-md overflow-hidden hover:cursor-pointer hover:shadow-lg">
      <div className="aspect-w-2 aspect-h-3 w-full">
        <img
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 rounded-md"></div>

      <div className="absolute top-0 right-0 p-2 hidden group-hover:block ">
        <p className="text-xs text-yellow-400 font-semibold">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}
        </p>
      </div>

      <div className="absolute bottom-2 right-0 p-2 hidden group-hover:block ">
        <AiFillStar size={20} />
      </div>

      <div className="absolute bottom-1 left-0 w-full">
        <div className="p-4 flex flex-col gap-1">
          <h3 className="text-md font-semibold">{movie.title}</h3>
          <p className="text-sm text-gray-200">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
