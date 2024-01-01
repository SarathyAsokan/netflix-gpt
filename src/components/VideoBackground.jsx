import React, { useEffect, useState } from "react";
import { TMDB_OPTIONS } from "../utils/constants";

export const VideoBackground = ({ movieId }) => {
  const [trailer, setTrailer] = useState(null);

  async function getVideos() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      TMDB_OPTIONS
    );
    const response = await data.json();

    const filteredVideos = response.results.filter(
      (data) => data.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : response[0];
    setTrailer(trailer);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="">
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&controls=0&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        controls={false}
      ></iframe>
    </div>
  );
};
