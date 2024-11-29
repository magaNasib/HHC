import { HotelType } from "../../models";

type Props = {
  checkIn: Date | null;
  checkOut: Date | null;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  roomCount: number;
  hotel: HotelType;
};

const BookingDetailSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  roomCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className={"grid gap-4 rounded-lg border border-slate-300 p-5 h-fit"}>
      <h2 className={"text-xl font-bold"}>Your Booking Details</h2>
      <div className={"border-b py-2"}>
        Location:
        <div
          className={"font-bold"}
        >{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</div>
      </div>
      <div className={"flex justify-between "}>
        <div>
          Check-in
          <div className={"font-bold"}>
            {(checkIn ?? new Date()).toDateString()}
          </div>
        </div>
        <div>
          Check-out
          <div className={"font-bold"}>
            {(checkOut ?? new Date()).toDateString()}
          </div>
        </div>
      </div>
      <div className={"border-b border-t py-2"}>
        Total length of stay:
        <div className={"font-bold "}>{numberOfNights} nights</div>
      </div>
      <div className={"border-b border-t py-2"}>
        Room count(s):
        <div className={"font-bold "}>{roomCount} room(s)</div>
      </div>
      <div>
        Guests
        <div className={"font-bold"}>
          {adultCount} adults & {childCount} children
        </div>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
