import React, { useContext, useState } from "react";

type SearchContext = {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adultCount: number;
  childCount: number;
  roomCount: number;
  travelingWithPets: boolean;
  hotelId: string;
  saveSearchValues: (
    destination: string,
    checkIn: Date | null,
    checkOut: Date | null,
    adultCount: number,
    childCount: number,
    roomCount: number,
    travelingWithPets: boolean
  ) => void;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const [destination, setDestination] = useState<string>(
    () => sessionStorage.getItem("destination") || ""
  );
  const [checkIn, setCheckIn] = useState<Date | null>(
    () =>
      new Date(sessionStorage.getItem("checkIn") || new Date().toISOString())
  );
  const [checkOut, setCheckOut] = useState<Date | null>(
    () =>
      new Date(sessionStorage.getItem("checkOut") || new Date().toISOString())
  );
  const [adultCount, setAdultCount] = useState<number>(() =>
    parseInt(sessionStorage.getItem("adultCount") || "1")
  );
  const [childCount, setChildCount] = useState<number>(() =>
    parseInt(sessionStorage.getItem("childCount") || "0")
  );
  const [roomCount, setRoomCount] = useState<number>(() =>
    parseInt(sessionStorage.getItem("roomCount") || "0")
  );
  const [travelingWithPets, setTravelingWithPets] = useState<boolean>(() =>
    Boolean(sessionStorage.getItem("travelingWithPets") || false)
  );

  const [hotelId, setHotelId] = useState<string>(
    () => sessionStorage.getItem("hotelID") || ""
  );

  const saveSearchValues = (
    destination: string,
    checkIn: Date | null,
    checkOut: Date | null,
    adultCount: number,
    childCount: number,
    roomCount: number,
    travelingWithPets: boolean,
    hotelId?: string
  ) => {
    setDestination(destination);
    setCheckIn(checkIn);
    setCheckOut(checkOut);
    setAdultCount(adultCount);
    setChildCount(childCount);
    setRoomCount(roomCount);
    setTravelingWithPets(travelingWithPets);
    if (hotelId) {
      setHotelId(hotelId);
    }

    sessionStorage.setItem("destination", destination);
    sessionStorage.setItem("checkIn", (checkIn ?? new Date()).toISOString());
    sessionStorage.setItem("checkOut", (checkOut ?? new Date()).toISOString());
    sessionStorage.setItem("adultCount", adultCount.toString());
    sessionStorage.setItem("childCount", childCount.toString());
    sessionStorage.setItem("roomCount", roomCount.toString());
    sessionStorage.setItem("travelingWithPets", travelingWithPets.toString());
    if (hotelId) {
      sessionStorage.setItem("hotelID", hotelId);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        destination,
        checkIn,
        checkOut,
        adultCount,
        childCount,
        roomCount,
        hotelId,
        travelingWithPets,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  return context as SearchContext;
};
