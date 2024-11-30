import { useLocation, useNavigate } from "react-router-dom";
import { useSearchContext } from "../context/SearchContext";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import AdjustableComponent from "../Pages/Main/Counter";
import { getPriceInCurrency } from "../utils";
import { useCurrencies } from "../context/Context";
import { HotelType } from "../models";

type Props = {
  hotelId: string;
  pricePerNight: number;
  hotel: HotelType | undefined;
};

const GuestInfoForm = ({ hotelId, pricePerNight, hotel }: Props) => {
  const search = useSearchContext();
  const [adults, setAdults] = useState(search?.adultCount);
  const [children, setChildren] = useState(search?.childCount);
  const [rooms, setRooms] = useState(search?.roomCount);
  const navigate = useNavigate();
  const [dates, setDates] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: search?.checkIn,
    endDate: search?.checkOut,
  });

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  const { currency } = useCurrencies();

  const handleSubmit = () => {
    search.saveSearchValues(
      "",
      dates.startDate,
      dates.endDate,
      adults,
      children,
      rooms,
      search.travelingWithPets
    );
    navigate(`/hotel/${hotelId}/booking`);
  };

  return (
    <div
      className={
        "flex flex-col p-4 bg-[#333] gap-4 md:ml-3 md:mt-0 mt-4  rounded-lg"
      }
    >
      <h3 className={"text-base font-bold text-white"}>
        {getPriceInCurrency(pricePerNight * rooms, currency)} {currency} per
      </h3>
      <form onSubmit={handleSubmit}>
        <div className={"grid grid-cols-1 gap-4 items-center"}>
          <Datepicker
            // toggleClassName={"text-white  bg-[#6f6f6f]  relative top-1"}
            placeholder="Check in ~ Check out"
            inputClassName={
              "text-lg w-[100%] bg-[#6f6f6f] rounded-lg border-none text-white placeholder:text-white focus:border-none focus:ring-transparent"
            }
            value={dates}
            onChange={(newVal) => {
              setDates({
                startDate: newVal?.startDate ?? null,
                endDate: newVal?.endDate ?? null,
              });
            }}
          />
          <div className="my-4">
            <AdjustableComponent
              adults={adults}
              children={children}
              rooms={rooms}
              setAdults={setAdults}
              setChildren={setChildren}
              setRooms={setRooms}
              travelingWithPets={search.travelingWithPets}
              position="bottom"
            />
          </div>
          {hotel?.facilities.includes("Airport Transfer") && (
            <div className="flex text-white text-base items-center select-none">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ms-2 ">
                <label htmlFor="helper-checkbox" className="font-medium ">
                  Include Airport Transfer
                </label>
                <p
                  id="helper-checkbox-text"
                  className="text-xs font-normal text-gray-200 dark:text-gray-300"
                >
                  You'll have to pay 20 {currency} additionally
                </p>
              </div>
            </div>
          )}
          <button
            className={
              "bg-blue-600 text-white h-full p-2 font-bold hover:bg-blue-500"
            }
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestInfoForm;
