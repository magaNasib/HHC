import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "./../../assets/discount.jpeg";

interface Offer {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const mockOffers: Offer[] = [
  {
    id: 1,
    title: "Black Friday: Exclusive Family Getaways",
    description:
      "Enjoy up to 50% off on family-friendly stays with separate pools for women and halal-certified dining options.",
    buttonText: "Explore Family Deals",
    image: img, // Replace with your image URL
  },
  {
    id: 2,
    title: "Luxury Resorts: Women-Only Pool Access",
    description:
      "Indulge in 40% off luxury resorts featuring exclusive women-only pool areas and private spa treatments.",
    buttonText: "Book Luxury Deals",
    image: img, // Replace with your image URL
  },
  {
    id: 3,
    title: "Alcohol-Free Black Friday Packages",
    description:
      "Save 30% on stays with alcohol-free packages and halal-certified dining for a serene getaway.",
    buttonText: "Find Alcohol-Free Deals",
    image: img, // Replace with your image URL
  },
  {
    id: 4,
    title: "City Breaks with Prayer Facilities",
    description:
      "Discover up to 35% off city escapes with on-site prayer rooms and halal-certified dining options.",
    buttonText: "Discover City Deals",
    image: img, // Replace with your image URL
  },
  {
    id: 5,
    title: "Private Villas for Relaxation",
    description:
      "Get up to 45% off private villas offering family-friendly amenities, alcohol-free stays, and secluded pools.",
    buttonText: "Book Private Villas",
    image: img, // Replace with your image URL
  },
];

const Offers: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(2); // Default: 2 items for desktop

  // Update visible items based on screen size
  useEffect(() => {
    const updateVisibleItems = () => {
      const isMobile = window.innerWidth < 768; // Mobile breakpoint (Tailwind's `md` size)
      setVisibleItems(isMobile ? 1 : 2);
    };

    updateVisibleItems(); // Initial check
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const handleNext = () => {
    if (currentIndex < mockOffers.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full mt-4 mb-8">
      <h2 className="md:text-3xl text-xl font-bold">Offers</h2>
      <p>Promotions, deals, and special offers for you</p>
      <div className="relative flex items-center -z-0">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute -left-5 p-2 z-10 bg-gray-200 rounded-full disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {/* Carousel Items */}
        <div className="flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {mockOffers.map((offer) => (
              <div
                key={offer.id}
                className={`${
                  visibleItems === 1 ? "w-1/3" : "w-1/2"
                } p-4 flex-shrink-0 flex`} // Adjust width for mobile
              >
                <div className="p-4 border rounded-lg w-full shadow flex flex-col h-full">
                  {/* Set flex-col and h-full */}
                  <h3 className="text-lg font-bold">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <div className="mt-auto">
                    {/* Push button to the bottom */}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                      {offer.buttonText}
                    </button>
                  </div>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="mt-4 w-full h-auto object-contain object-right rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= mockOffers.length - visibleItems}
          className="absolute -right-5 z-10 p-2 bg-gray-200 rounded-full disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Offers;