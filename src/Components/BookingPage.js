import React from "react";
import BookingForm from "./BookingForm";
import Button from "./Button";

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
    </>
  );
};

export default BookingPage;
