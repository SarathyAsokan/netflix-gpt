import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_OPTIONS } from "../utils/constants";

export const useFetch = (url, func) => {
    const dispatch = useDispatch();
    async function getNowPlayingMovies() {
        console.log("CHECK URLL", url);
        const data = await fetch(
        //   "https://api.themoviedb.org/3/movie/now_playing?page=1",
            url,
          TMDB_OPTIONS
        );
        const res = await data.json();
        // dispatch(addNowPlayingMovies(res.results));
        dispatch(func(res.results));
      }
    
      useEffect(() => {
        getNowPlayingMovies();
      }, []);
}
