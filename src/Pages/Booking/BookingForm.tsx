import { CardElement } from "@stripe/react-stripe-js";
import { HotelType } from "../../models";
import { useCurrencies } from "../../context/Context";
import PaymentDetails from "./PaymentDetails";

export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: string;
  checkOut: string;
  hotelId: string;
  totalCost: number;
  paymentIntentId: string;
};
type Props = {
  numberOfNights: number;
  hotel: HotelType;
};

const BookingForm = ({ numberOfNights, hotel }: Props) => {
  // const { mutate:bookRoom, isLoading } = useMutation(apiClient.createRoomBooking, {
  //     onSuccess: () => {
  //         showToast({ message: "Booking Saved!", type: "SUCCESS" })
  //     },
  //     onError: () => {
  //         showToast({ message: "Error while saving booking!", type: "ERROR" })
  //     }
  // })
  const { currency } = useCurrencies();

  return (
    <div className="">
      <form
        className={
          "grid grid-cols-1 gap-5 rounded-lg border border-slate-300 p-5"
        }
      >
        <span className={"text-3xl font-bold"}>Confirm Your Details</span>
        <div className={"grid grid-cols-2 gap-6"}>
          <label className={"text-gray-700 text-sm font-bold flex-1"}>
            First Name
            <input
              className={
                "mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal "
              }
              type={"text"}
            />
          </label>
          <label className={"text-gray-700 text-sm font-bold flex-1"}>
            Last Name
            <input
              className={
                "mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal "
              }
              type={"text"}
            />
          </label>
          <label className={"text-gray-700 text-sm font-bold flex-1"}>
            Email
            <input
              className={
                "mt-1 border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 font-normal "
              }
              type={"text"}
            />
          </label>
        </div>
        <div className={"space-y-2"}>
          <h2 className={"text-xl font-semibold"}>Your Price Summary:</h2>
          <div className={"bg-blue-200 p-4 rounded-md"}>
            <div className={"font-semibold text-lg"}>
              Total Cost:{" "}
              {hotel.pricePerNight * numberOfNights + " " + currency}
            </div>
            <div className={"text-xs"}>Include taxes and charges</div>
          </div>
        </div>
        <div className={"space-y-2"}>
          <h3 className={"text-xl font-semibold"}>Payment Details</h3>
          <PaymentDetails />
        </div>
        <div className={"flex justify-end"}>
          <button
            type={"submit"}
            className={
              "bg-blue-600 text-white p-2 font-bold rounded-lg hover:bg-blue-500 text-base disabled:bg-gray-500"
            }
          >
            {"Confirm Booking"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
