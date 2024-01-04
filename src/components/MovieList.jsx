import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log("MOVIES", movies);
  return (
    <div className="">
      <h2 className="font-bold text-white ml-2 pt-2">{title}</h2>
      <div className="w-screen flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
