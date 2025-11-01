import { createContext, useState, useEffect } from "react";

// create context
export const AppContext = createContext();

// AppProvider component
export const AppProvider = ({ children }) => {
  //   state
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find((m) => m.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((m) => m.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((m) => m.id === id);
  };
  // Provide the theme and toggleTheme function to all child components
  return (
    <AppContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};
