import { Link, useNavigate } from "react-router-dom";
import { HotelType } from "../models";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/search/${hotel._id}`}
      onClick={() => navigate(`/search/${hotel._id}`)}
      className={" cursor-pointer overflow-hidden rounded-md"}
    >
      <div className={"h-[300px] overflow-hidden"}>
        <img
          src={hotel.imageUrls[0]}
          className={
            "group-hover:scale-110 transition-all duration-300 w-full h-full object-cover object-center"
          }
          alt={hotel.name}
        />
      </div>
      <div className={"p-4 bg-[#0000002a] bg-opacity-50 w-full rounded-b-md"}>
        <span
          className={"text-white font-bold tracking-tight md:text-3xl text-xl"}
        >
          {hotel.name}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
