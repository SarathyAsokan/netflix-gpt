import React from "react";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { useFetch } from "../hooks/useFetch";
import { GptLayout } from "./GptLayout";
import { useSelector } from "react-redux";

export const Browse = () => {
  const showGptScreen = useSelector((state) => state.gpt.showGptScreen);
  const movies = useSelector((state) => state.movies);
  useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    addNowPlayingMovies,
    movies.nowPlayingMovies
  );
  useFetch(
    "https://api.themoviedb.org/3/movie/popular?page=1",
    addPopularMovies,
    movies.popularMovies
  );
  useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?page=1",
    addTopRatedMovies,
    movies.topRatedMovies
  );
  useFetch(
    "https://api.themoviedb.org/3/movie/upcoming?page=1",
    addUpcomingMovies,
    movies.upcomingMovies
  );

  return (
    <div className="absolute w-screen">
      {showGptScreen && <GptLayout />}
      {!showGptScreen && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
