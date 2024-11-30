import bg from "../../assets/bg-main.jpg";
import LatestDestinationCard from "../../Components/LatestDestinationCard";
import SearchBox from "../../Components/SearchBox";
import { hotelData } from "../../consts/HotelData";
import Offers from "./Offers";
const Main = () => {
  const topRowHotels = hotelData.data?.slice(0, 2) || [];
  const bottomRowHotels = hotelData.data?.slice(2) || [];
  return (
    <>
      <div className="w-full relative h-[85vh] ">
        <img
          src={bg}
          alt="HomeGif"
          className="opacity-80 absolute top-0 left-0 w-full h-[85vh] object-cover -z-40 object-top filter brightness-50"
        />
        <div className="container mx-auto relative">
          <div className="flex justify-center md:pt-80 pt-60 flex-col text-center items-center gap-5">
            <h1 className="md:text-5xl text-2xl text-white font-extrabold">
              Halal Holidays for the Muslim traveller
            </h1>
            <p className="w-[50%] md:block hidden text-lg text-white font-semibold">
              Muslim-friendly hotels: Women-only pools and beaches, a wide range
              of halal hotel options, alcohol-free family hotels, secluded
              villas, and hijab-friendly accommodations available on
              HalalHolidayCheck.
            </p>
          </div>
          <div className="relative top-20 md:top-40">
            <SearchBox />
          </div>
        </div>
      </div>
      <div className="py-10  bg-slate-100">
        <div className="container mx-auto">
          <Offers />
        </div>
        <div className={"space-y-3 container mx-auto"}>
          <h2 className={"md:text-3xl text-xl font-bold"}>
            Latest Destinations lorem
          </h2>
          <p>Most recent destinations added by our hosts</p>
          <div className={"grid gap-4"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
              {topRowHotels.map((hotel) => (
                <LatestDestinationCard hotel={hotel} />
              ))}
            </div>
            <div className={"grid md:grid-cols-3 gap-4"}>
              {bottomRowHotels.map((hotel) => (
                <LatestDestinationCard hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
