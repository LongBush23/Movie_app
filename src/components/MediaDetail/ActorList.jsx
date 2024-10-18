import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentActors = isShowMore ? actors : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profile_path={actor.profile_path}
            episodeCount={actor.episodeCount}
          />
        ))}
      </div>
      <button className="mt-4" onClick={() => setIsShowMore(!isShowMore)}>
        {isShowMore ? "Show less" : "Show More"}
      </button>
    </div>
  );
};
export default ActorList;
