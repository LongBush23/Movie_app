// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "@components/ImageComponent";
import { useModalContext } from "@context/ModalProvider";
import { Link } from "react-router-dom";

const Movie = (props) => {
  // const [isLoaded, setIsLoaded] = useState(false);
  const {
    data: { id, backdrop_path, title, release_date, overview },
    trailerVideoKey = {},
  } = props;

  const { openPopup } = useModalContext();

  return (
    <div>
      <ImageComponent
        src={
          backdrop_path && `https://image.tmdb.org/t/p/original${backdrop_path}`
        }
        className={`bgAnimation loaded aspect-video w-full brightness-50`}
        alt={title}
        width={900}
        height={500}
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{title}</p>
        <p className="text-[1.2vw]">{release_date}</p>
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              openPopup(
                <iframe
                  title="Trailer"
                  src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                  className="aspect-video w-[50vw]"
                />,
              );
            }}
            className="mr-2 rounded-md bg-white px-4 py-2 text-10 text-black lg:text-lg"
          >
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <Link to={`/movie/${id}`}>
            <button className="rounded-md bg-slate-300/35 px-4 py-2 text-10 text-white lg:text-lg">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
