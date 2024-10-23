import ImageComponent from "@components/ImageComponent";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";

const PeoplePage = () => {
  return (
    <div>
      <div className="container pt-20">
        {/* left Info */}
        <div className="flex-1">
          <ImageComponent
            src={`https://media.themoviedb.org/t/p/w600_and_h900_face/algQ1VEno2W9SesoArWcZTeF617.jpg`}
            width={600}
            height={900}
          />
          <div>
            <p className="mb-6 text-lg font-bold">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Known For</p>
                <p>Acting</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>Male</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>HCM, Hanoi, BMT, VietNam</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>1982-10-28</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex-2">
          <p className="mb-6 text-2xl font-bold">Matt Smith</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biography</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae architecto voluptate natus amet ab possimus
              voluptatibus soluta ex incidunt? Cumque dolore, ea omnis commodi
              placeat suscipit magni at quibusdam dignissimos neque, fuga
              obcaecati! Distinctio laborum aspernatur quos officia aut
              incidunt!
            </p>
          </div>
          <RelatedMediaList />
        </div>
      </div>
    </div>
  );
};
export default PeoplePage;
