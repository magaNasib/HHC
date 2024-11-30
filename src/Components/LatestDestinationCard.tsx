import { Link, useNavigate } from "react-router-dom";
import { HotelType } from "../models";
import { IoLocation } from "react-icons/io5";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  const navigate = useNavigate();
  return (
    <Link
      to={`/search/${hotel._id}`}
      onClick={() => navigate(`/search/${hotel._id}`)}
      className={" cursor-pointer relative overflow-hidden rounded-md"}
    >
      <div
        className={
          "h-[300px] cursor-pointer overflow-hidden hover:scale-105 duration-500 transition-all"
        }
      >
        <img
          src={hotel.imageUrls[0]}
          className={
            "group-hover:scale-110   transition-all absolute duration-300 w-full h-full object-cover object-center"
          }
          alt={hotel.name}
        />
      </div>
      <div
        className={
          "p-4 bg-[#0000007d] bottom-0 absolute z-20 flex justify-between items-center bg-opacity-50 w-full rounded-b-md"
        }
      >
        <span
          className={
            "text-white font-bold tracking-tight md:text-2xl text-base"
          }
        >
          {hotel.name}
        </span>
        <span
          className={
            "text-gray-300 flex items-center gap-2 font-bold tracking-tight md:text-base text-sm"
          }
        >
          <IoLocation color="#fff" />
          {hotel.city}, {hotel.country}
        </span>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
