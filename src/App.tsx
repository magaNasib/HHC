import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./index.css";
import Main from "./Pages/Main";
import Search from "./Pages/Search";
import Detail from "./Pages/Details";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Layout />
            </React.Suspense>
          }
        >
          <Route index element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<Detail />} />
          <Route path="hotel/:id/booking" element={<Booking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
