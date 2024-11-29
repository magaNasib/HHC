import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { hotelData } from "../../consts/HotelData";
import { useSearchContext } from "../../context/SearchContext";
import BookingDetailSummary from "./BookingDetailSummary";
import BookingForm from "./BookingForm";
import { Elements } from "@stripe/react-stripe-js";

const Booking = () => {
  const search = useSearchContext();
  const { id } = useParams();
  const hotel = hotelData.data.find((hotel) => {
    return hotel._id === id;
  });
  const [numberOfNights, setNumberOfNights] = useState<number>(0);

  useEffect(() => {
    if (search.checkIn && search.checkOut) {
      const nights =
        Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) /
        (1000 * 60 * 60 * 24);
      setNumberOfNights(Math.ceil(nights));
    }
  }, [search.checkIn, search.checkOut]);

  if (!hotel) {
    return <>No Data!</>;
  }

  return (
    <div>
      <div className="w-full relative h-[10vh] bg-[#333]"></div>
      <div
        className={"grid md:grid-cols-[1fr_2fr] gap-5 mt-10 container mx-auto"}
      >
        <BookingDetailSummary
          roomCount={search.roomCount}
          checkIn={search.checkIn}
          checkOut={search.checkOut}
          adultCount={search.adultCount}
          childCount={search.childCount}
          numberOfNights={numberOfNights}
          hotel={hotel}
        />
        <BookingForm numberOfNights={numberOfNights} hotel={hotel} />
      </div>
    </div>
  );
};

export default Booking;
