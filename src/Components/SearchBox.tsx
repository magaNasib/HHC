import { FormEvent, useState } from "react";
import Datepicker, { PopoverDirectionType } from "react-tailwindcss-datepicker";
import AdjustableComponent from "../Pages/Main/Counter";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";

const SearchBox = ({
  popoverDirection,
}: {
  popoverDirection?: PopoverDirectionType;
}) => {
  const search = useSearchContext();
  const [destination, setDestination] = useState<string>(search?.destination);
  const [adults, setAdults] = useState(search?.adultCount);
  const [children, setChildren] = useState(search?.childCount);
  const [rooms, setRooms] = useState(search?.roomCount);
  const [travelingWithPets, setTravelingWithPets] = useState(
    search.travelingWithPets
  );

  const navigate = useNavigate();
  const [dates, setDates] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: search?.checkIn,
    endDate: search?.checkOut,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      dates.startDate,
      dates.endDate,
      adults,
      children,
      rooms,
      travelingWithPets
    );
    navigate("/search");
  };
  return (
    <div className="bg-[#1b4e7a35] backdrop-blur-md w-full p-2 rounded-md">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 px-3"
      >
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
          {/* item 1 */}
          <div className="relative w-full md:w-[30%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="block w-full placeholder-gray-200 p-3 ps-10 text-lg text-white border-none rounded-lg bg-transparent focus:ring-transparent focus:border-none"
              placeholder="Search destinations, hotels..."
            />
          </div>
          {/* item 2 */}
          <div className="w-full md:w-[17rem] relative z-50">
            <Datepicker
              toggleClassName={"text-white relative top-1"}
              placeholder="Check in ~ Check out"
              inputClassName={
                "bg-transparent text-lg w-full md:w-[87%] w-[75%] border-none text-white placeholder:text-white focus:border-none focus:ring-transparent"
              }
              value={dates}
              onChange={(newVal) => {
                setDates({
                  startDate: newVal?.startDate ?? null,
                  endDate: newVal?.endDate ?? null,
                });
              }}
              popoverDirection={popoverDirection || "up"}
            />
          </div>
          {/* item 3 */}
          <AdjustableComponent
            adults={adults}
            children={children}
            rooms={rooms}
            travelingWithPets={travelingWithPets}
            setAdults={setAdults}
            setChildren={setChildren}
            setRooms={setRooms}
            setTravelingWithPets={setTravelingWithPets}
          />
        </div>
        {/* item 4 */}
        <button
          type="submit"
          className="bg-white py-2 px-8 text-[#3d9a62] font-semibold hover:shadow-lg rounded-3xl w-full md:w-auto"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
