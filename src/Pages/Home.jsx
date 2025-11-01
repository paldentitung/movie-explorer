import React, { useContext } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import TrendingMovies from "../Components/TrendingMovies";
import Footer from "../Components/Footer";
import { AppContext } from "../Context/AppContext";
const Home = () => {
  // using context
  const { theme } = useContext(AppContext);
  return (
    <section
      className={`relative w-full min-h-screen ${
        theme === "light" ? "bg-white" : "bg-gray-900 text-white"
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-30"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <Header />
        <Hero />
        <TrendingMovies />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
