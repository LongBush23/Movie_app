import ImageComponent from "@components/ImageComponent";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, profile_path, episodeCount }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="overflow-hidden rounded-lg border border-slate-300 shadow-sm"
    >
      <div>
        <ImageComponent
          width={276}
          height={350}
          src={
            profile_path &&
            `https://media.themoviedb.org/t/p/w276_and_h350_face${profile_path}`
          }
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
          {episodeCount && <p>{episodeCount} Episodes</p>}
        </div>
      </div>
    </Link>
  );
};
export default ActorInfo;
