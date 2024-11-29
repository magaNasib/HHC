import { createContext, useContext } from "react";

interface CurrencyContextType {
  currency: string;
  setCurrency: (value: string) => void;
}

const defaultValue: CurrencyContextType = {
  currency: "TRY",
  setCurrency: () => {}, // Provide a no-op function as a default
};

export const CurrencyContext = createContext<CurrencyContextType>(defaultValue);

export const useCurrencies = () => useContext(CurrencyContext);
