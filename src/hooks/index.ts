import { useState } from "react";
import { hotelData } from "../consts/HotelData";
import { HotelQuery, THotelData } from "../models";
interface Hotel {
  city: string;
  adultCount: number;
  childCount: number;
  [key: string]: any; // For other possible properties
}

export const useHotels = () => {
  const [hotels, setHotels] = useState<THotelData>();
  const getHotels = (query?: HotelQuery) => {
    if (!query) {
      setHotels(hotelData);
      return;
    }

    let filteredData = hotelData.data.filter((hotel: Hotel) => {
      const isDestinationValid =
        !query.destination ||
        hotel.city.toLowerCase().includes(query.destination.toLowerCase()) ||
        hotel.name.toLowerCase().includes(query.destination.toLowerCase()) ||
        hotel.country.toLowerCase().includes(query.destination.toLowerCase());
      const isRoomCountValid =
        !query.roomCount || hotel.roomCount >= query.roomCount;
      const isAdultCountValid =
        !query.adultCount || hotel.adultCount >= query.adultCount;
      const canTravelWithPets =
        !query.travelingWithPets || hotel.travelingWithPets;
      const isChildCountValid =
        !query.childCount || hotel.childCount >= query.childCount;

      const isValidPrice =
        !query.maxPrice || hotel.pricePerNight <= query.maxPrice;

      const isStarred =
        query.stars.length === 0 ||
        query.stars.includes(String(hotel.starRating));
      const isTypedHotel =
        query.types.length === 0 || query.types.includes(String(hotel.type));

      const isFacilitesIncludes =
        query.facilities.length === 0 ||
        query.facilities.every((facility) =>
          hotel.facilities.includes(facility)
        );
      return (
        isDestinationValid &&
        isValidPrice &&
        isAdultCountValid &&
        isChildCountValid &&
        isStarred &&
        isTypedHotel &&
        isRoomCountValid &&
        canTravelWithPets &&
        isFacilitesIncludes
      );
    });

    let cuttedData = filteredData.slice(query.page * 5 - 5, query.page * 5);
    if (query.sortOption === "starRating") {
      cuttedData = cuttedData.sort((a, b) => b.starRating - a.starRating);
    } else if (query.sortOption === "pricePerNightAsc") {
      cuttedData = cuttedData.sort((a, b) => a.pricePerNight - b.pricePerNight);
    } else if (query.sortOption === "pricePerNightDesc") {
      cuttedData = cuttedData.sort((a, b) => b.pricePerNight - a.pricePerNight);
    }
    setHotels({
      data: cuttedData,
      pagination: {
        total: filteredData.length,
        page: query.page,
        pages: filteredData.length / 5.1 + 1,
      },
    });
  };

  return { hotels, getHotels };
};
