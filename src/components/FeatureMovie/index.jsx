import { useEffect, useState } from "react";
import Movie from "./Movie";
import Paginatelndicator from "./Paginatelndicator";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({
    url: "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
  });

  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

  const temp = (videoResponse?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  console.log({ videoResponse, temp });

  useEffect(() => {
    if (movies[0]?.id) {
      setActiveMovieId(movies[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(movies)]);

  popularMoviesResponse.results || [];

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movies) => (
          <Movie
            key={movies.id}
            data={movies}
            trailerVideoKey={
              (videoResponse?.results || []).find(
                (video) => video.type === "Trailer" && video.site === "YouTube",
              )?.key
            }
          />
        ))}

      <Paginatelndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};
export default FeatureMovie;
