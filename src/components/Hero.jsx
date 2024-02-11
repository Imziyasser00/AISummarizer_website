import React from "react";
import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col mt-10 pt-3 mx-40">
      <nav className="flex justify-between items-center w-full px-20">
        <div className="w-50% flex items-center justify-center">
          <img src={logo} alt="logo" className="w-12 object-contain" />
          <h2 className="title_logo px-2">AI ARTICLE SUMMARIZER</h2>
        </div>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Imziyasser00/AISummarizer_website")
          }
          className="github_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="text-4xl uppercase ">
      Summarize any article <br />
      Using<span className="bg-gradient-to-r from-amber-500 via-orange-600 tp bg-yellow-500 bg-clip-text text-transparent"> AI </span>
      </h1>
    </header>
  );
};

export default Hero;
Hero;
