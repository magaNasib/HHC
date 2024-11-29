import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { CurrencyContext } from "../context/Context";
import { useState } from "react";
import { SearchContextProvider } from "../context/SearchContext";
import Footer from "../Components/Footer";

const Layout = () => {
  const [currency, setCurrency] = useState<string>("TRY");

  return (
    <SearchContextProvider>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Header />
        <Outlet />
        <Footer />
      </CurrencyContext.Provider>
    </SearchContextProvider>
  );
};

export default Layout;
