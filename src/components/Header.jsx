import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute inset-0 top-3 z-[1] flex h-14 items-center justify-between bg-transparent px-8 text-white">
      <div className="flex items-center gap-4 text-base sm:gap-9 lg:gap-6">
        <Link to="/">
          <img src="/netflix.png" className="w-[68px] sm:w-28" />
        </Link>
        <Link to={`/search?mediaType=movie`} className="sm:text-xl">
          Movie
        </Link>
        <Link to={`/search?mediaType=tv`} className="sm:text-xl">
          TV Show
        </Link>
      </div>
      <div>
        <Link to={"/search"}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-4 cursor-pointer sm:h-6"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
