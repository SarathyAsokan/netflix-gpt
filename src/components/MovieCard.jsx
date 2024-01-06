import React from "react";
import { IMAGE_URL } from "../utils/constants";

export const MovieCard = ({ movie }) => {
  if (!movie.poster_path) return;
  return (
    <div className="w-40 h-60 m-2 hover:cursor-pointer">
      <img src={IMAGE_URL + movie.poster_path} alt="Movie Poster" />
    </div>
  );
};
