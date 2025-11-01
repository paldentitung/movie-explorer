import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "../API/tmdb";
import Header from "../Components/Header";
import { FaArrowLeft } from "react-icons/fa";
const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  // go back navgate
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieDetail(id);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading)
    return <div className="text-center mt-10 text-white">Loading...</div>;
  if (!movie)
    return <div className="text-center mt-10 text-white">Movie not found</div>;

  return (
    <section className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="w-full max-w-6xl mx-auto p-6 flex flex-col space-y-6">
        {/* go back button */}
        <div>
          {" "}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 p-2 text-teal-500 border border-transparent  hover:border-teal-500"
          >
            <FaArrowLeft />
            GoBack
          </button>
        </div>
        {/* Title and tagline */}
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 italic mb-4">{movie.tagline}</p>

        {/* Movie info */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-md w-full md:w-1/3"
          />
          <div className="flex-1">
            <p className="mb-2">
              <strong>Overview:</strong> {movie.overview}
            </p>
            <p className="mb-2">
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="mb-2">
              <strong>Rating:</strong> {movie.vote_average} / 10
            </p>
            <p className="mb-2">
              <strong>Runtime:</strong> {movie.runtime} min
            </p>
            <p className="mb-2">
              <strong>Genres:</strong>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
