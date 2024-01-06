import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

export const useFetch = (url, func, movieState) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  if (movieState) return;

  async function getNowPlayingMovies() {
    const data = await fetch(url, TMDB_OPTIONS);
    const res = await data.json();
    dispatch(func(res.results));
  }
};
