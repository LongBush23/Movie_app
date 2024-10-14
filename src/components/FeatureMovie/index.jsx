import { useEffect, useState } from "react";
import Movie from "./Movie";
import Paginatelndicator from "./Paginatelndicator";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: popularMoviesResponse } = useFetch({ url: "/movie/popular" });

  const movies = (popularMoviesResponse.results || []).slice(0, 4);

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
          <Movie key={movies.id} data={movies} />
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
