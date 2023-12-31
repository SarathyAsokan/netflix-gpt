import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[Math.floor(Math.random() * 20)];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
