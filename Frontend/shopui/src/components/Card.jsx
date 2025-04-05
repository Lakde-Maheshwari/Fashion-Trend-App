import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ id, imageLink, name }) => {
  return (
    <div className="w-[405px] flex flex-col">
      {/* Vertical Image Container */}
      <Link to={`/product/${id}`} className="w-full h-[550px] overflow-hidden rounded-[20px] mb-0 block">
        <img 
          src={imageLink} 
          alt={name} 
          className="w-full h-full object-cover object-center"
          style={{ aspectRatio: "2/3" }}
        />
      </Link>

      {/* Content */}
      <div className="w-[1754px]"> 
        <div className="flex items-center gap-3">
          <p className="font-poppins font-medium text-[32px] leading-[50px] tracking-[-0.04em]">
            {name}
          </p>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-[#797979] m-[3px] border-[#797979] p-1 rounded-full w-[32px] text-[32px]"
          />
        </div>
        <Link to={`/product/${id}`} className="ml-4 font-poppins font-medium text-[24px] leading-[50px] tracking-[-0.04em] text-[#7F7F7F] cursor-pointer flex items-center gap-2">
          Explore Now!
        </Link>
      </div>
    </div>
  );
};

export default Card;
