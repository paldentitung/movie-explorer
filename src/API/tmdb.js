const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Trending movies
export const getTrendingMovies = async () => {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file");
  }
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

// get detail of a single movie
export const getMovieDetail = async (movieId) => {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file");
  }

  const res = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data;
};
