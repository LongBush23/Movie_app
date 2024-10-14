import ImageComponent from "@components/ImageComponent";

const ActorInfo = ({ name, character, profile_path }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 shadow-sm">
      <div>
        <ImageComponent
          width={276}
          height={350}
          src={
            profile_path
              ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profile_path}`
              : "/ActorNoImage.svg"
          }
        />
        <div className="p-3">
          <p className="font-bold">{name}</p>
          <p>{character}</p>
          {/* <p>18</p> */}
        </div>
      </div>
    </div>
  );
};
export default ActorInfo;
