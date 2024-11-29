export const getPriceInCurrency = (price: number, currency: string) => {
  let fixedPrice = 0;
  switch (currency) {
    case "TRY":
      fixedPrice = price;
      break;
    case "USD":
      fixedPrice = price * 1.2;
      break;
    case "EUR":
      fixedPrice = price * 2;
      break;
    case "AZN":
      fixedPrice = price * 5;
      break;
    default:
      fixedPrice = price;
      break;
  }
  return fixedPrice;
};
