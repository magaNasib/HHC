export type HotelType = {
  _id: string;
  userId: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageUrls: string[];
  lastUpdated: string;
  bookings: BookingType[];
};
export type THotelData = {
  data: HotelType[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};

export type BookingType = {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: string;
  checkOut: string;
  totalCost: number;
};
export type HotelQuery = {
  destination: string;
  checkIn: string | null;
  checkOut: string | null;
  adultCount: number;
  childCount: number;
  roomCount: number;
  travelingWithPets: boolean;
  page: number;
  stars: string[];
  types: string[];
  facilities: string[];
  maxPrice: number | undefined;
  sortOption: string;
};
