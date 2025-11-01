import React from "react";

import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import MovieDetail from "./Pages/MovieDetail";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
