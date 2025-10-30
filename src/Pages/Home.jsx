import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center brightness-30"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
