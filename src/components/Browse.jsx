import React, { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  const dispatch = useDispatch();

  async function getNowPlayingMovies() {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_OPTIONS
    );
    const res = await data.json();
    dispatch(addNowPlayingMovies(res.results));
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div className="p-2 absolute">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
