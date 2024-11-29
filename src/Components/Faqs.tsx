import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How much does it cost to stay at Modern Hotel?",
    answer:
      "The prices at Modern Hotel may vary depending on your stay (e.g., dates, hotel's policy, etc.). To see prices, enter your dates.",
  },
  {
    question: "What kind of breakfast is served at Modern Hotel?",
    answer: "Breakfast options vary depending on the date of your stay.",
  },
  {
    question: "How far is Modern Hotel from the center of Baku?",
    answer: "Modern Hotel is located 10 km from the center of Baku.",
  },
  {
    question: "What type of room can I book at Modern Hotel?",
    answer:
      "We offer a variety of rooms including single, double, and suite options.",
  },
  {
    question: "Is Modern Hotel popular with families?",
    answer:
      "Yes, Modern Hotel is popular with families for its amenities and services.",
  },
  {
    question: "Does Modern Hotel have a hot tub for its guests?",
    answer: "Yes, we have a hot tub available for guests to use.",
  },
  {
    question: "Does Modern Hotel have a restaurant on site?",
    answer:
      "Yes, Modern Hotel has a restaurant serving local and international cuisine.",
  },
  {
    question: "What is there to do at Modern Hotel?",
    answer:
      "There are several activities, including a fitness center, spa, and swimming pool.",
  },
  {
    question: "What are the check-in and check-out times at Modern Hotel?",
    answer: "Check-in starts at 2:00 PM, and check-out is until 12:00 PM.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">FAQs about Modern Hotel</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="font-medium text-lg">{faq.question}</p>
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
