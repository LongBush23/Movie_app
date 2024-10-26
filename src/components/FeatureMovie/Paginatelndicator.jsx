import { useEffect } from "react";

const Paginatelndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = movies.findIndex(
        (movie) => movie.id === activeMovieId,
      );
      const nextIndex = (currentIndex + 1) % movies.length;
      setActiveMovieId(movies[nextIndex].id);
    }, 5000);
    return () => clearInterval(interval);
  }, [movies, activeMovieId, setActiveMovieId]);

  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            onClick={() => setActiveMovieId(movie.id)}
            key={movie.id}
            className={`h-1 w-4 cursor-pointer transition-colors duration-300 ease-out ${
              movie.id === activeMovieId ? "slide bg-slate-100" : "bg-slate-600"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Paginatelndicator;

// const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
//   return (
//     <div className="absolute bottom-[10%] right-8">
//       <ul className="flex gap-1">
//         {movies.map((movie) => (
//           <li
//             onClick={() => setActiveMovieId(movie.id)}
//             key={movie.id}
//             className={`h-1 w-6 cursor-pointer ${movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"}`}
//           ></li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default PaginateIndicator;
