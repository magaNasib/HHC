import { useEffect, useMemo, useState } from "react";
import HotelTypesFilter from "../../Components/HotelTypesFilter";
import FacilitiesFilter from "../../Components/FacilitiesFilter";
import PriceFilter from "../../Components/PriceFilter";
import Pagination from "../../Components/Pagination";
import SearchResultCard from "../../Components/SearchResultCard";
import StarRatingFilter from "../../Components/StarRatingFilter";
import { useSearchContext } from "../../context/SearchContext";
import SearchBox from "../../Components/SearchBox";
import bg from "../../assets/bg-search.jpg";
import { useHotels } from "../../hooks";

const Search = () => {
  const search = useSearchContext();
  const { hotels, getHotels } = useHotels();
  const [page, setPage] = useState<number>(1);
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>("");

  const searchParams = useMemo(
    () => ({
      destination: search.destination,
      checkIn: (search.checkIn ?? new Date()).toISOString(),
      checkOut: (search.checkOut ?? new Date()).toISOString(),
      adultCount: search.adultCount,
      childCount: search.childCount,
      roomCount: search.roomCount,
      travelingWithPets: search.travelingWithPets,
      page: page,
      stars: selectedStars,
      types: selectedHotelTypes,
      facilities: selectedFacilities,
      maxPrice: selectedPrice,
      sortOption,
    }),
    [
      search.destination,
      search.checkIn,
      search.checkOut,
      search.adultCount,
      search.childCount,
      search.roomCount,
      search.travelingWithPets,
      page,
      selectedStars,
      selectedHotelTypes,
      selectedFacilities,
      selectedPrice,
      sortOption,
    ]
  );

  useEffect(() => {
    getHotels(searchParams);
  }, [searchParams]);

  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handleHotelTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const hotelType = event.target.value;

    setSelectedHotelTypes((prevHotelTypes) =>
      event.target.checked
        ? [...prevHotelTypes, hotelType]
        : prevHotelTypes.filter((type) => type !== hotelType)
    );
  };

  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const facility = event.target.value;

    setSelectedFacilities((prevFacilities) =>
      event.target.checked
        ? [...prevFacilities, facility]
        : prevFacilities.filter((facilityItem) => facilityItem !== facility)
    );
  };

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
            <SearchBox />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className={"grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5"}>
          <div
            className={
              "rounded-lg border border-slate-300 p-5 h-fit lg:sticky lg:top-10"
            }
          >
            <div className={"space-y-5"}>
              <h3
                className={
                  "text-lg font-semibold border-b border-slate-300 pb-5"
                }
              >
                Filter by:
              </h3>
              <StarRatingFilter
                selectedStars={selectedStars}
                onChange={handleStarsChange}
              />
              <HotelTypesFilter
                selectedHotelTypes={selectedHotelTypes}
                onChange={handleHotelTypeChange}
              />
              <FacilitiesFilter
                selectedFacilities={selectedFacilities}
                onChange={handleFacilityChange}
              />
              <PriceFilter
                onChange={(value?: number) => setSelectedPrice(value)}
                selectedPrice={selectedPrice}
              />
            </div>
          </div>
          <div className={"flex flex-col gap-5"}>
            <div className={"flex items-center justify-between"}>
              <span className={"text-xl font-bold "}>
                {hotels?.pagination.total} Hotels found{" "}
                {search?.destination ? ` in ${search?.destination}` : ""}
              </span>
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                className={"p-2 border rounded-md text-xs md:text-base"}
              >
                <option value={""}>Sort by</option>
                <option value={"starRating"}>Star Rating</option>
                <option value={"pricePerNightAsc"}>
                  Price Per Night (low to high)
                </option>
                <option value={"pricePerNightDesc"}>
                  Price Per Night (high to low)
                </option>
              </select>
            </div>
            {hotels?.data?.map((hotel) => (
              <div key={hotel._id}>
                <SearchResultCard hotel={hotel} />
              </div>
            ))}
            <div>
              <Pagination
                page={hotels?.pagination.page || 1}
                pages={hotels?.pagination.pages || 1}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
