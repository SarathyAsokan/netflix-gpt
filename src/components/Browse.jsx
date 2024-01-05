import React from "react";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { useFetch } from "../hooks/useFetch";

export const Browse = () => {
  
  useFetch("https://api.themoviedb.org/3/movie/now_playing?page=1", addNowPlayingMovies);
  useFetch("https://api.themoviedb.org/3/movie/popular?page=1", addPopularMovies);
  useFetch("https://api.themoviedb.org/3/movie/top_rated?page=1", addTopRatedMovies);
  useFetch("https://api.themoviedb.org/3/movie/upcoming?page=1", addUpcomingMovies);

  return (
    <div className="absolute">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};