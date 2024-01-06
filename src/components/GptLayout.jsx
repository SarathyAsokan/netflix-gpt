import React from "react";
import { BG_IMAGE } from "../utils/constants";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestions } from "./GptMovieSuggestions";

export const GptLayout = () => {
  return (
    <>
      <img className="fixed" src={BG_IMAGE} alt="bg-img" />
      <div className="absolute pt-28 w-screen">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
