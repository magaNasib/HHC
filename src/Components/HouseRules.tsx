import React from "react";
import { getPriceInCurrency } from "../utils";
import { useCurrencies } from "../context/Context";

const HouseRules: React.FC<{ pricePerNight: number }> = ({ pricePerNight }) => {
  const { currency } = useCurrencies();

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">House rules</h1>
      <p className="text-gray-700 mb-6">
        Modern Hotel takes special requests – add in the next step!
      </p>

      {/* Rules Section */}
      <div className="space-y-6">
        {/* Check-in */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">➡️</span>
          <div>
            <h2 className="font-semibold">Check-in</h2>
            <p>From 2:00 PM</p>
            <p className="text-sm text-gray-500">
              You need to let the property know what time you'll be arriving in
              advance.
            </p>
          </div>
        </div>

        {/* Check-out */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">➡️</span>
          <div>
            <h2 className="font-semibold">Check-out</h2>
            <p>Until 12:00 PM</p>
          </div>
        </div>

        {/* Cancellation / Prepayment */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h2 className="font-semibold">Cancellation/ prepayment</h2>
            <p className="text-gray-700">
              Cancellation and prepayment policies vary according to
              accommodation type. Check what{" "}
              <a href="#" className="text-blue-500 underline">
                conditions
              </a>{" "}
              apply to each option when making your selection.
            </p>
          </div>
        </div>

        {/* Children & Beds */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">👶</span>
          <div>
            <h2 className="font-semibold">Children & Beds</h2>
            <h3 className="font-medium text-lg">Child policies</h3>
            <p className="text-gray-700">Children of all ages are welcome.</p>
            <p className="text-sm text-gray-500">
              To see correct prices and occupancy info, add the number and ages
              of children in your group to your search.
            </p>

            <h3 className="font-medium text-lg mt-4">
              Crib and extra bed policies
            </h3>
            <table className="w-full text-left mt-2">
              <thead>
                <tr>
                  <th className="text-sm font-medium text-gray-700 border-b pb-2">
                    Age
                  </th>
                  <th className="text-sm font-medium text-gray-700 border-b pb-2">
                    Option
                  </th>
                  <th className="text-sm font-medium text-gray-700 border-b pb-2">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">0 - 2 years</td>
                  <td className="py-2">🛏️ Crib upon request</td>
                  <td className="py-2">Free</td>
                </tr>
                <tr>
                  <td className="py-2">5+ years</td>
                  <td className="py-2">🛏️ Extra bed upon request</td>
                  <td className="py-2">
                    {getPriceInCurrency(pricePerNight, currency)} {currency} per
                    person, per night
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-gray-500 mt-4">
              Prices for cribs aren't included in the total price. They'll have
              to be paid for separately during your stay.
            </p>
            <p className="text-sm text-gray-500">
              The number of cribs allowed depends on the option you choose.
              Check your selected option for more info.
            </p>
            <p className="text-sm text-gray-500">
              There are no extra beds available at this property.
            </p>
            <p className="text-sm text-gray-500">
              All cribs are subject to availability.
            </p>
          </div>
        </div>

        {/* No age restriction */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">🔑</span>
          <div>
            <h2 className="font-semibold">No age restriction</h2>
            <p>There's no age requirement for check-in</p>
          </div>
        </div>

        {/* Pets */}
        <div className="flex items-start space-x-4">
          <span className="text-2xl">🐾</span>
          <div>
            <h2 className="font-semibold">Pets</h2>
            <p>
              <span className="font-medium text-green-600">Free!</span> Pets are
              allowed. No extra charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseRules;
