import React, { useState } from "react";

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCardNumberComplete, setIsCardNumberComplete] = useState(false);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 16) {
      setCardNumber(value);
      setIsCardNumberComplete(value.length === 16); // Enable MM/YY and CVV fields when 16 digits are entered
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9/]/g, ""); // Allow only numbers and /
    if (/^(0[1-9]|1[0-2])\/[0-9]{0,2}$/.test(value) || value === "") {
      setExpiry(value);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  return (
    <div className="py-4">
      <div className="border rounded-lg flex items-center p-2 gap-4">
        {/* Card Number Input */}
        <div className="flex-1">
          <input
            type="text"
            className="w-full bg-transparent border-none outline-none placeholder-gray-500"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={19} // Allow for spaces (if added later)
            inputMode="numeric"
          />
        </div>

        {/* MM/YY Input */}
        <div className="flex items-center">
          <input
            type="text"
            className="w-16 bg-transparent border-none outline-none placeholder-gray-500"
            placeholder="MM/YY"
            value={expiry}
            onChange={handleExpiryChange}
            disabled={!isCardNumberComplete}
            maxLength={5} // MM/YY format
            inputMode="numeric"
          />
        </div>

        {/* CVV Input */}
        <div>
          <input
            type="text"
            className="w-14 bg-transparent border-none outline-none placeholder-gray-500"
            placeholder="CVC"
            value={cvv}
            onChange={handleCvvChange}
            disabled={!isCardNumberComplete}
            maxLength={3}
            inputMode="numeric"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
