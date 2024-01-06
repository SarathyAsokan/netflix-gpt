import React from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

export const GptMovieSuggestions = () => {
  const searchedMovies = useSelector((state) => state.gpt.searchedResult);
  if (!searchedMovies) return;

  return (
    <div className="flex flex-wrap p-2">
      {searchedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
