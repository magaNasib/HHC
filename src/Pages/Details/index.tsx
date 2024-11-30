import { useParams } from "react-router-dom";
import bg from "../../assets/bg-search.jpg";
import SearchBox from "../../Components/SearchBox";
import { AiFillStar } from "react-icons/ai";
import { hotelData } from "../../consts/HotelData";
import GuestInfoForm from "../../Components/GuestInfoForm";
import Reviews from "../../Components/Reviews";
import HouseRules from "../../Components/HouseRules";
import FAQSection from "../../Components/Faqs";
import { IoLocation } from "react-icons/io5";

const Detail = () => {
  const { id } = useParams();
  const hotel = hotelData.data.find((hotel) => {
    return hotel._id === id;
  });
  return (
    <>
      <div className="w-full relative md:h-[40vh] h-[60vh] ">
        <img
          src={bg}
          alt="HomeGif"
          className="opacity-80 absolute top-0 left-0 w-full md:h-[40vh] h-[60vh] object-cover -z-40  filter brightness-50"
        />
        <div className="absolute bottom-20 left-0  w-full">
          <div className="container mx-auto">
            <SearchBox popoverDirection="down" />
          </div>
        </div>
      </div>
      <div className={"space-y-6 my-10 container mx-auto"}>
        <h1 className={"text-3xl font-bold"}>{hotel?.name}</h1>
        <div className="pl-5">
          <span className={"flex"}>
            {Array.from({ length: hotel?.starRating || 0 })?.map(() => (
              <AiFillStar className={"fill-yellow-400"} />
            ))}
          </span>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
          {hotel?.imageUrls.map((image) => (
            <div className={"h-[300px]"}>
              <img
                src={image}
                alt={hotel?.name}
                className={
                  "rounded-md w-full h-full object-cover object-center"
                }
              />
            </div>
          ))}
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-8 gap-2 "}>
          {hotel?.facilities.map((facility) => (
            <div
              className={
                "bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center"
              }
            >
              {facility}
            </div>
          ))}
        </div>

        <div>
          <div className={"line-clamp-4 text-gray-700 flex gap-1 items-center"}>
            <IoLocation color="rgb(29 100 243)" />
            {hotel?.city + ", " + hotel?.country}
          </div>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-[2fr_1fr]"}>
          <div className={"whitespace-pre-line"}>{hotel?.description}</div>
          <div className={"h-fit"}>
            <GuestInfoForm
              hotel={hotel}
              hotelId={hotel?._id ?? ""}
              pricePerNight={hotel?.pricePerNight ?? 0}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <Reviews />
      </div>
      <div className="container mx-auto my-10">
        <HouseRules pricePerNight={hotel?.pricePerNight ?? 0} />
      </div>
      <div className="container mx-auto my-10">
        <FAQSection />
      </div>
    </>
  );
};
export default Detail;
