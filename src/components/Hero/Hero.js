import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home" className="bg-green-600 py-8">
      <div className="text-center relative">
        <h3 className="text-2xl lg:text-3xl font-bold">
          Hi, I'm <span className="text-purple-600">Abu Sufian</span>
        </h3>
        <span className="font-semibold opacity-70 text-sm">Front End Web Developer Based on Bangladesh</span>
        <p className="mt-8 text-4xl md:text-5xl lg:text-7xl font-bold">
          Passionate <br />
          to craft innovative <br />
          web products.
        </p>
        <Link to="#" className="mt-12 inline-block bg-white py-2 px-4 font-semibold capitalize rounded-lg">connect with me</Link>
        <div className="bg-white/20 py-1 px-4 rounded-3xl absolute right-4 top-14 text-white">Web Developer</div>
        <div className="bg-white/20 py-1 px-4 rounded-3xl absolute left-8 top-8 text-white">UI/UX Designer</div>
        <div className="bg-white/20 py-1 px-4 rounded-3xl absolute left-0 bottom-8 text-white">Freelancer</div>
      </div>
    </div>
  );
};

export default Hero;
