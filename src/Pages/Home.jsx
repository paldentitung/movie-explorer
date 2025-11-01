import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import TrendingMovies from "../Components/TrendingMovies";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-30"
          style={{ backgroundImage: "url('/hero-image.jpg')" }}
        ></div>

        <div className="relative z-10 flex flex-col h-full">
          <Header />
          <Hero />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-gray-900 text-white">
        <TrendingMovies />
        <Footer />
      </section>
    </>
  );
};

export default Home;
