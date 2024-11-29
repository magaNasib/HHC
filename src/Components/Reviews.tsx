import React, { useState } from "react";

// ReviewCard Component
interface ReviewCardProps {
  name: string;
  country: string;
  flag: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  country,
  flag,
  review,
}) => {
  return (
    <div className="flex flex-col w-full sm:w-80 bg-white shadow-md rounded-lg p-4 space-y-2">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white font-bold rounded-full">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span>{flag}</span>
            <span>{country}</span>
          </div>
        </div>
      </div>
      {/* Review */}
      <p className="text-gray-700 text-sm">{`"${review}"`}</p>
      {/* Read More */}
      <button className="text-blue-500 text-sm font-medium self-start">
        Read more
      </button>
    </div>
  );
};

// Main Carousel Component
const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Abdulla",
      country: "Azerbaijan",
      flag: "🇦🇿",
      review: "Thank you Modern hotel reception for being kind and helpful",
    },
    {
      name: "Aziz",
      country: "Turkey",
      flag: "🇹🇷",
      review:
        "Good location near supermarket and gym. Especially night shift helped us so much",
    },
    {
      name: "Saad",
      country: "Pakistan",
      flag: "🇵🇰",
      review:
        "Very friendly staff, not too far from Nizami Street, very good accommodation in budget.",
    },
    {
      name: "Ali",
      country: "Pakistan",
      flag: "🇵🇰",
      review:
        "Very friendly and cooperative staff. The service exceeded our expectations!",
    },
    {
      name: "Fatima",
      country: "UAE",
      flag: "🇦🇪",
      review:
        "The ambiance was great, and the location was perfect for a quick getaway!",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Determine the visible reviews
  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  return (
    <div className="flex flex-col items-center space-y-6 px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Guests who stayed here loved
      </h2>
      {/* Carousel */}
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300"
        >
          ←
        </button>
        {/* Visible Reviews */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          {visibleReviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              country={review.country}
              flag={review.flag}
              review={review.review}
            />
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Reviews;
