import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HotelType } from "../models";
import { useCurrencies } from "../context/Context";
import { getPriceInCurrency } from "../utils";
import { IoLocation } from "react-icons/io5";

type Props = {
  hotel: HotelType;
};

const SearchResultCard = ({ hotel }: Props) => {
  const { currency } = useCurrencies();

  return (
    <div
      className={
        "grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-3 md:p-8 gap-8"
      }
    >
      <div className={"w-full h-[300px]"}>
        <img
          src={hotel.imageUrls[0]}
          className={"w-full h-full object-cover object-center"}
        />
      </div>
      <div className={"grid grid-rows-[1fr_2fr_1fr]"}>
        <div>
          <div className={"flex items-center"}>
            <span className={"flex"}>
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <div key={index}>
                  <AiFillStar className={"fill-yellow-400"} />
                </div>
              ))}
            </span>
            <span className={"ml-1 text-sm"}>{hotel.type}</span>
          </div>
          <Link
            to={`/search/${hotel._id}`}
            className={"text-2xl font-bold cursor-pointer"}
          >
            {hotel.name}
          </Link>
        </div>
        <div>
          <div className={"line-clamp-4"}>{hotel.description}</div>
        </div>
        <div>
          <div className={"line-clamp-4 text-gray-700 flex gap-1 items-center"}>
            <IoLocation color="rgb(29 100 243)" />
            {hotel.city + ", " + hotel.country}
          </div>
        </div>
        <div className={"grid grid-cols-2 items-end whitespace-nowrap"}>
          <div className={"flex gap-1 items-center "}>
            {hotel.facilities.slice(0, 2).map((facility) => (
              <span
                key={facility}
                className={
                  "bg-slate-300 p-2 rounded-lg font-semibold text-[10px] whitespace-nowrap"
                }
              >
                {facility}
              </span>
            ))}
            <span className={"text-[10px]"}>
              {hotel.facilities.length > 2 &&
                `+ ${hotel.facilities.length - 2} more `}
            </span>
          </div>
          <div className={"flex flex-col items-end gap-1"}>
            <span className={"font-bold text-xs md:text-base"}>
              {getPriceInCurrency(hotel.pricePerNight, currency)} {currency} per
              night
            </span>
            <Link
              to={`/search/${hotel._id}`}
              className={
                "bg-blue-600 text-white h-full py-2 px-4 font-bold text-xs md:text-lg max-w-fit rounded-xl hover:bg-blue-500"
              }
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResultCard;
