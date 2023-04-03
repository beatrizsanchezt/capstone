import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";

function Main() {
  return (
    <HomePage />
    // <Routes>
    //    <Route path="/" element={<HomePage />}></Route>
    //   {/* <Route path="/booking" element={<BookingPage />}></Route> */}
    // </Routes>
  );
}

export default Main;
