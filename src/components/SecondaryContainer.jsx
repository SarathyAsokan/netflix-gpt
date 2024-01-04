import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const nowPlayingList = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularList = useSelector((store) => store.movies?.popularMovies);
  const topratedList = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingList = useSelector((store) => store.movies?.upcomingMovies);

  if (!nowPlayingList || !popularList || !topratedList || !upcomingList) return;

  return (
    <div className="bg-black">
      <div className="relative -mt-36 z-20">
      <MovieList title="Now Playing" movies={nowPlayingList} />
      <MovieList title="Popular" movies={popularList} />
      <MovieList title="Top Rated" movies={topratedList} />
      <MovieList title="Upcoming" movies={upcomingList} />
      </div>
    </div>
  );
};
